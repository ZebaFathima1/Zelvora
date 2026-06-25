"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: "bot" | "user" }>>([
    { text: "Hello! I am Zelvora AI. How can I help you build the future today?", sender: "bot" },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    
    const userMsg = inputVal;
    setMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);
    setInputVal("");

    // Simulate AI response
    setTimeout(() => {
      let response = "That sounds interesting! Let's build it together. Would you like to check out our AI courses or set up a consultation call?";
      const lower = userMsg.toLowerCase();
      if (lower.includes("course") || lower.includes("learn") || lower.includes("study")) {
        response = "We offer premium courses: AI Basics for Students, Beginner Machine Learning, and AI for Career Growth. You can find detailed timelines in our Courses section!";
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("fee") || lower.includes("rupees") || lower.includes("₹")) {
        response = "Our beginner student courses are priced at an affordable rate of ₹99 to make AI education accessible to everyone.";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("call")) {
        response = "You can contact our team at zelvoratechnologies@gmail.com, or phone us at +91 91000 40993. Feel free to use the Contact page form too!";
      } else if (lower.includes("service") || lower.includes("develop") || lower.includes("software")) {
        response = "We design adaptive AI Models, Custom Tech Solutions, live AI workshops, and bespoke Software Development. Learn more on our Services page!";
      }
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[310px] sm:w-[350px] h-[420px] rounded-[2rem] border border-cyan-300/20 bg-[#060f14]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-zelvora-primary/10 to-transparent p-5 border-b border-cyan-300/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-zelvora-primary animate-pulse" />
                <div>
                  <h3 className="font-semibold text-white">Zelvora Core AI</h3>
                  <p className="text-[10px] text-zelvora-secondary uppercase tracking-widest">Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zelvora-secondary hover:text-white transition text-xs">
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 text-sm scrollbar-thin">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-zelvora-primary to-zelvora-primaryMid text-zelvora-bg font-medium"
                        : "bg-white/5 border border-cyan-300/10 text-slate-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-4 border-t border-cyan-300/10 flex gap-2">
              <input
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask Zelvora AI..."
                className="flex-1 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-white text-sm outline-none transition focus:border-zelvora-primary"
              />
              <button type="submit" className="rounded-full bg-zelvora-primary p-2.5 text-zelvora-bg hover:scale-105 transition flex items-center justify-center">
                <FaPaperPlane size={12} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep text-zelvora-bg shadow-glow hover:shadow-[0_0_40px_rgba(0,230,208,0.5)] transition-all duration-300"
      >
        <span className="text-2xl">{isOpen ? "✕" : "🤖"}</span>
      </motion.button>
    </div>
  );
}
