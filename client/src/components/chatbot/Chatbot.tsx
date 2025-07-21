import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { MessageSquare, Mic, Upload, X, Send, RefreshCw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import axios from "axios";

// Message types
type MessageType = "user" | "bot";

interface Message {
  id: string;
  content: string;
  type: MessageType;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your legal assistant. How can I help you today?",
      type: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [userType, setUserType] = useState("student");


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsLoading(true);

    fetch("https://bhashini-backend.onrender.com/legal-info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: inputValue, lang:sourceLanguage,user:userType}),
    })
      .then((res) => res.json())
      .then((data) => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: data.result,
          type: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API call error:", error);
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        sendAudioToBackend(audioBlob);
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(true);
    } catch (err) {
      console.error("Microphone access denied:", err);
      alert(
        "Microphone access was denied. Please allow mic permissions in your browser."
      );
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const sendAudioToBackend = async (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append("audio", audioBlob, "recording.webm");
    formData.append("lang", sourceLanguage);
    await fetch("https://bhashini-backend.onrender.com/upload-audio", {
      method: "POST",
      body: formData,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Placeholder for file upload handling
    console.log("File uploaded:", file.name);

    // Simple file type validation
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        content:
          "Sorry, this file type is not supported. Please upload PDF, JPG, PNG, or DOC files.",
        type: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }

    // Add a message about the file
    const fileMessage: Message = {
      id: Date.now().toString(),
      content: `Uploaded: ${file.name}`,
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, fileMessage]);

    // Simulate processing
    setIsLoading(true);
    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I've received your document. In a real implementation, I would analyze it using OCR and AI to provide relevant legal information.",
        type: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, responseMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        content: "Chat has been reset. How can I help you today?",
        type: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="h-14 w-14 rounded-full bg-white text-black hover:bg-white/90 shadow-lg"
        aria-label="Open chat assistant"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full h-full max-w-full p-0 border-none bg-black text-white flex flex-col animate-fade-in sm:rounded-none">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <div>
              <h3 className="font-medium text-white text-lg">
                Legal Assistant
              </h3>
              <p className="text-xs text-bhasha-muted">Powered by AI</p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                onClick={resetChat}
                aria-label="Reset conversation"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    message.type === "user"
                      ? "bg-white text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>

                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] px-4 py-2 rounded-2xl bg-white/10 text-white">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-white/50 animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-white/50 animate-pulse delay-100"></div>
                    <div className="h-2 w-2 rounded-full bg-white/50 animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-4">
            <div className="flex space-x-4 p-4">
              <div className="flex flex-col text-white text-sm">
                <label htmlFor="lang">Source Language</label>
                <select
                  id="lang"
                  className="bg-black border border-white/20 rounded px-2 py-1 text-white"
                  value={sourceLanguage}
                  onChange={(e) => setSourceLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="te">Telugu</option>
                  <option value="hi">Hindi</option>
                  <option value="ml">Malayalam</option>
                  <option value="ta">Tamil</option>
                </select>
              </div>

              <div className="flex flex-col text-white text-sm">
                <label htmlFor="user">User Type</label>
                <select
                  id="user"
                  className="bg-black border border-white/20 rounded px-2 py-1 text-white"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Upload document"
              >
                <Upload className="h-5 w-5" />
              </label> */}
              <Button
                variant="ghost"
                size="icon"
                className={`p-2 rounded-full ${
                  isRecording
                    ? "bg-red-500/20 text-red-500"
                    : "hover:bg-white/10 text-white/70 hover:text-white"
                }`}
                onClick={isRecording ? stopRecording : startRecording}
                aria-label={isRecording ? "Stop recording" : "Start recording"}
              >
                <Mic className="h-5 w-5" />
              </Button>
              <div className="flex-1 relative">
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white resize-none h-10 min-h-[2.5rem] max-h-32 focus:outline-none focus:ring-1 focus:ring-white/30"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  style={{
                    overflow: "hidden",
                    height: "auto",
                  }}
                />
              </div>
              <Button
                className="p-2 bg-white text-black hover:bg-white/90 rounded-full"
                onClick={handleSendMessage}
                disabled={inputValue.trim() === "" || isLoading}
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-2 text-xs text-center text-bhasha-muted">
              <p>This chatbot supports multiple languages and voice input.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
