"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { i18n } from "@/lib/i18n";

type Message = { role: "user" | "assistant"; content: string };

function SparkleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L13.5 9 L20 10.5 L13.5 12 L12 19 L10.5 12 L4 10.5 L10.5 9 Z" />
      <path d="M19 2 L19.8 5.2 L23 6 L19.8 6.8 L19 10 L18.2 6.8 L15 6 L18.2 5.2 Z" opacity="0.6" />
      <path d="M5 16 L5.6 18.4 L8 19 L5.6 19.6 L5 22 L4.4 19.6 L2 19 L4.4 18.4 Z" opacity="0.5" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
          style={{ animation: `chatDot 1.2s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

export default function ChatWidget() {
  const { lang } = useLang();
  const t = i18n[lang].chat;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const sendMessage = async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || loading) return;

    setShowSuggestions(false);
    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const assistantIdx = newMessages.length;
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, lang }),
      });

      if (!res.ok) {
        const errText = res.status === 503 ? t.apiNotConfigured : t.error;
        setMessages((prev) => [
          ...prev.slice(0, assistantIdx),
          { role: "assistant", content: errText },
        ]);
        return;
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let text = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setMessages((prev) => [
          ...prev.slice(0, assistantIdx),
          { role: "assistant", content: text },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev.slice(0, assistantIdx),
        { role: "assistant", content: t.error },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const isEmpty = messages.length === 0;
  const isTyping = loading && messages[messages.length - 1]?.content === "";

  return (
    <>
      <style>{`
        @keyframes chatDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        {/* Chat panel */}
        <div
          className={`flex flex-col rounded-sm border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl shadow-black/20 dark:shadow-black/50 overflow-hidden transition-all duration-300 origin-bottom-left ${
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
          style={{ width: "min(360px, calc(100vw - 32px))", height: "480px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50 dark:bg-zinc-900 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 flex-shrink-0">
                <SparkleIcon size={15} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 leading-none mb-0.5">
                  {t.heading}
                </p>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500">{t.status}</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="w-7 h-7 flex items-center justify-center rounded-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X size={14} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-hide">
            {/* Greeting */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-sm bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 flex-shrink-0 mt-0.5">
                <SparkleIcon size={11} />
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed bg-zinc-100 dark:bg-zinc-800/80 rounded-sm px-3 py-2 max-w-[260px]">
                {t.greeting}
              </p>
            </div>

            {/* Conversation */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "items-start gap-2"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 rounded-sm bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 flex-shrink-0 mt-0.5">
                    <SparkleIcon size={11} />
                  </div>
                )}
                <div
                  className={`text-xs leading-relaxed rounded-sm px-3 py-2 max-w-[260px] ${
                    msg.role === "user"
                      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                      : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {msg.role === "assistant" && msg.content === "" && isTyping
                    ? <TypingDots />
                    : msg.content}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {isEmpty && showSuggestions && (
            <div className="px-4 pb-3 flex flex-wrap gap-1.5 flex-shrink-0">
              {t.suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="text-[10px] px-2.5 py-1.5 rounded-sm border border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors text-left leading-snug"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 pb-4 flex-shrink-0">
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-sm bg-zinc-50 dark:bg-zinc-900 px-3 py-2 focus-within:border-zinc-400 dark:focus-within:border-zinc-600 transition-colors"
            >
              <input
                ref={inputRef}
                id="chat-input"
                name="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                maxLength={400}
                disabled={loading}
                className="flex-1 text-xs bg-transparent text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none min-w-0"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send"
                className="w-6 h-6 flex items-center justify-center rounded-sm bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 disabled:opacity-30 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors flex-shrink-0"
              >
                <ArrowUp size={12} />
              </button>
            </form>
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={t.toggleLabel}
          className="pointer-events-auto group flex items-center gap-2 px-3 py-3 sm:px-4 bg-green-500 dark:bg-green-400 border border-green-500 dark:border-green-400 rounded-full text-white dark:text-zinc-900 hover:bg-green-600 dark:hover:bg-green-500 hover:border-green-600 dark:hover:border-green-500 transition-all duration-300 shadow-lg shadow-green-500/20 dark:shadow-green-400/20"
        >
          <span className="flex-shrink-0">
            <SparkleIcon size={20} />
          </span>
          <span className="hidden sm:block text-xs font-semibold tracking-wide whitespace-nowrap">
            {t.toggleLabel}
          </span>
        </button>
      </div>
    </>
  );
}
