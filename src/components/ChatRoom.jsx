import { useState, useEffect } from "react";

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(saved);
  }, []);

  const sendMessage = () => {
    if (!text.trim()) return;

    const newMessage = {
      text,
      time: new Date().toLocaleTimeString(),
    };

    const updated = [...messages, newMessage];
    setMessages(updated);
    localStorage.setItem("chatMessages", JSON.stringify(updated));
    setText("");
  };

  return (
    <div className="bg-zinc-900 border border-gray-700 p-6 rounded-xl shadow-lg h-full flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-white">💬 Chat Room</h2>

      {/* Pesan */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.length === 0 && (
          <p className="text-gray-400 text-sm text-center">Belum ada pesan</p>
        )}

        {messages.map((msg, i) => (
          <div key={i} className="bg-zinc-700 p-2 rounded">
            <p className="text-sm text-white">{msg.text}</p>
            <span className="text-xs text-gray-400">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis pesan..."
          className="flex-1 p-2 rounded bg-zinc-800 border border-gray-600 text-white"
        />
        <button
          onClick={sendMessage}
          className="px-4 rounded bg-black border border-gray-600 text-white hover:bg-zinc-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}
