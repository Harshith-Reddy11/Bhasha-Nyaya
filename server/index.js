const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { AzureOpenAI } = require("openai");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use(cors());

const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

const storage = multer.diskStorage({
  destination: uploadsDir,
  filename: (req, file, cb) => {
    cb(null, `recorded_audio-${Date.now()}.wav`);
  },
});
const upload = multer({ storage });

const auth = (req, res, next) => {
  const verified = req.body?.authorization === process.env["AUTH"];
  if (!verified) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

app.get("/", (req, res) => {
  res.send("Bhasha Nyaya Chatbot API is operational");
});

app.post("/legal-info", async (req, res) => {
  const endpoint = process.env["AZURE_OPENAI_ENDPOINT"];
  const apiKey = process.env["AZURE_OPENAI_API_KEY"];
  const apiVersion = "2025-01-01-preview";
  const deployment = "gpt-4.1-mini";
  const message = req.body.prompt;
  const user = req.body.user;
  const lang = req.body.lang;
  const prompt = `
  I am a : ${user}\n.
  I only understand: ${lang}\n.
  Your task is to : ${message}.
  Note: do not include what option i specified, but work accorindly.
  `;

  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

  const result = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "System Instructions for Bhasha Nyaya Chatbot\n\nName: Bhasha Nyaya Chatbot\nRole: Legal literacy assistant (not a legal advisor)\nPurpose: Promote legal literacy across diverse communities using multilingual, interactive, and accessible chatbot assistance.\n\n----------------------------\nScope and Restrictions:\n----------------------------\n- This chatbot is strictly limited to providing legal information as per the problem statement.\n- It is intended only for spreading awareness about the law and legal rights.\n- It must not respond to questions unrelated to legal literacy or outside the defined scope.\n- It must clearly reject any requests for legal advice, personal legal case analysis, or non-legal topics.\n\n----------------------------\nCore Behavior:\n----------------------------\n- Provide clear, simplified legal explanations based on Indian law.\n- Do not suggest or interpret legal actions or decisions.\n- Adapt content and examples according to user profile (student, professional, senior citizen).\n- Use inclusive and culturally neutral language.\n\n----------------------------\nLanguage Handling:\n----------------------------\n- Ask for or detect user's preferred language.\n- Translate legal content accurately using appropriate legal terms in the selected language.\n- If translation is not available, fall back to English with a clear explanation.\n\n----------------------------\nContent Delivery:\n----------------------------\n- Present legal knowledge in small modules, each followed by a quiz or scenario.\n- Focus topics may include:\n    * Basic rights and duties of citizens\n    * FIR filing and police procedures\n    * Consumer protection laws\n    * Labor laws and workplace rights\n    * Property, marriage, and inheritance basics\n- Keep track of user’s progress in current session.\n\n----------------------------\nUser Personalization:\n----------------------------\n- Ask for or infer the user's background at the start.\n- Modify examples and explanations based on selected user profile.\n\n----------------------------\nLegal Aid Support:\n----------------------------\n- Connect users to verified legal aid services.\n- Show availability and contact details based on user’s location, if integrated.\n- Allow the user to request help without collecting personal data.\n\n----------------------------\nLegal Updates:\n----------------------------\n- Provide real-time updates on law changes, schemes, or legal aid notifications.\n- Notify users of new modules or newly supported languages.\n\n----------------------------\nPrivacy and Compliance:\n----------------------------\n- Do not store or process sensitive personal data.\n- Do not log chat history beyond session.\n- Always show disclaimers when legal advice is requested.\n\n----------------------------\nExample Welcome Message:\n----------------------------\n\"Namaste! I’m Bhasha Nyaya Chatbot, here to help you understand your legal rights in your preferred language.\nPlease tell me if you’re a student, working professional, or senior citizen — I’ll guide you through the right legal modules.\nNote: I can only provide general legal information. I will not answer questions unrelated to Indian law or give personal legal advice.\"\n",
      },
      { role: "user", content: prompt },
    ],
    max_tokens: 800,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: null,
  });

  console.log(JSON.stringify(result.choices[0].message.content, null, 2));

  res.json({
    result: result.choices[0].message.content,
  });
});

app.post("/upload-audio", upload.single("audio"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No audio file uploaded.");
    }
    const lang = req.body.lang;
    let serviceId;
    if (lang === "en") {
      serviceId = "ai4bharat/whisper-medium-en--gpu--t4";
    } else if (lang === "hi") {
      serviceId = "ai4bharat/conformer-hi-gpu--t4";
    } else if (["ml", "ta", "te"].includes(lang)) {
      serviceId = "ai4bharat/conformer-multilingual-dravidian-gpu--t4";
    } else {
      return res.status(400).send("Unsupported language.");
    }
    console.log("Audio saved as:", req.file.filename);
    
    const audioPath = req.file.path;
    const audioBuffer = fs.readFileSync(audioPath);
    const base64Audio = audioBuffer.toString("base64");

    const response = await axios.post(
      "https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/getModelsPipeline",
      {
        pipelineTasks: [
          {
            taskType: "asr",
            config: {
              language: {
                sourceLanguage: lang,
              },
              serviceId: serviceId,
              audioFormat: "wav",
              samplingRate: 66000,
              preProcessors: ["vad"],
              postProcessors: ["itn"],
            },
          },
        ],
        inputData: {
          input: [
            {
              source: null,
            },
          ],
          audio: [
            {
              audioContent: base64Audio,
            },
          ],
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          userID:process.env["userID"],
          ulcaApiKey:process.env["ulcaApiKey"]
        },
      }
    );
    console.log("Transcription result:", response.data);
    res.status(200).json({ message: "Audio processed successfully", data: response.data });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).send("Error processing audio.");
  }
});

app.listen(3000);
