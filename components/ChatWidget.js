"use client";

import { useState, useRef, useEffect } from "react";
import { CHAT_API_URL } from "@/lib/chatConfig";

const SUGGESTED_QUESTIONS = [
  "What is Manoj's PhD research about?",
  "What tools does he use for hydraulic modeling?",
  "What awards has he won?",
  "How can I contact him?",
];

export default function ChatWidget({ profile }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi, I'm ${profile.name}'s portfolio assistant. Ask me about his research, publications, or experience.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
    }
    window.addEventListener("open-chat-widget", handleOpen);
    return () => window.removeEventListener("open-chat-widget", handleOpen);
  }, []);

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: nextMessages
            .filter((m) => m.role !== "system")
            .slice(0, -1)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Sorry, something went wrong." },
      ]);
    } catch {
      setError(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't reach the assistant right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        className="chat-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <span className="chat-fab-icon">{open ? "✕" : "💬"}</span>
        {!open && <span className="chat-fab-label">Chat</span>}
      </button>

      {open && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <div className="chat-avatar">{profile.initials}</div>
            <div>
              <p className="chat-title">Portfolio Assistant</p>
              <p className="chat-subtitle">● Online · Trained on {profile.name.split(" ")[0]}'s info</p>
            </div>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble chat-bubble-${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="chat-bubble chat-bubble-assistant chat-bubble-loading">
                Thinking…
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="chat-suggestions">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  className="chat-suggestion-chip"
                  onClick={() => sendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form
            className="chat-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              className="chat-input"
              type="text"
              placeholder="Ask about research, papers, experience…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button className="chat-send" type="submit" disabled={loading} aria-label="Send">
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
}
