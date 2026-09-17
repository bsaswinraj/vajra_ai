"use client";

import { useState } from "react";
import {
  Bot,
  BookOpen,
  FileText,
  Cpu,
  ClipboardList,
  ScrollText,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Paperclip,
  Send,
  Search,
  Code2,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

import { useRouter } from "next/navigation";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const capabilities = [
  {
    icon: FileText,
    title: "Document Analysis",
    description:
      "Understand and analyse reports, PDFs, scanned documents and images.",
  },
  {
    icon: Code2,
    title: "Coding Assistant",
    description:
      "Write, run and verify code with VAJRA's local AI assistance.",
  },
  {
    icon: Search,
    title: "Knowledge Search",
    description:
      "Find answers from your organization's private knowledge.",
  },
  {
    icon: Cpu,
    title: "Task Automation",
    description:
      "Let VAJRA plan and execute complex multi-step tasks.",
  },
];

const quickActions = [
  { icon: FileText, text: "Analyse a document" },
  { icon: FileText, text: "Generate a report" },
  { icon: Code2, text: "Write and run code" },
  { icon: Search, text: "Search knowledge base" },
];

export default function HomePage() {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: message.trim(),
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      if (!response.ok) {
        throw new Error("Backend request failed");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
      };

      setMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error(error);

      const errorMessage: Message = {
        role: "assistant",
        content:
          "I could not connect to the local AI backend. Please make sure VAJRA's Python backend and Ollama are running.",
      };

      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main className="workbench">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo">
            <ShieldCheck size={26} />
          </div>

          <div>
            <h1>VAJRA AI</h1>
            <span>Your AI Partner</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item active">
            <Bot size={19} />
            <span>Home</span>
          </button>

          <button className="nav-item">
            <BookOpen size={19} />
            <span>Knowledge Base</span>
          </button>

          <button className="nav-item">
            <FileText size={19} />
            <span>Documents</span>
          </button>

          <button className="nav-item">
            <Cpu size={19} />
            <span>Model Selection</span>
          </button>

          <button className="nav-item">
            <ClipboardList size={19} />
            <span>Tasks</span>
          </button>

          <button className="nav-item">
            <ScrollText size={19} />
            <span>Activity Logs</span>
          </button>
        </nav>

        <div className="local-status">
          <div className="status-icon">
            <ShieldCheck size={22} />
          </div>

          <div>
            <strong>Local &amp; Private</strong>
            <p>No internet required</p>
          </div>

          <span className="status-dot"></span>
        </div>
      </aside>

      <section className="main-area">
        <header className="top-header">
          <div className="mobile-brand">
            <ShieldCheck size={23} />
            <strong>VAJRA AI</strong>
          </div>

          <div className="profile-wrapper">
            <button
              className="profile-button"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <div className="profile-avatar">
                <User size={20} />
              </div>

              <ChevronDown size={16} />
            </button>

            {profileOpen && (
              <div className="profile-menu">
                <div className="profile-menu-user">
                  <div className="profile-avatar large">
                    <User size={21} />
                  </div>

                  <div>
                    <strong>Employee</strong>
                    <span>Local User</span>
                  </div>
                </div>

                <div className="profile-divider"></div>

                <button>
                  <User size={17} />
                  Profile
                </button>

                <button>
                  <Settings size={17} />
                  Settings
                </button>

                <button>
                  <HelpCircle size={17} />
                  Help
                </button>

                <div className="profile-divider"></div>

                <button
                  className="logout"
                  onClick={() => router.push("/login")}
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <div className="home-content">

          {messages.length === 0 ? (
            <div className="welcome-section">
              <p className="welcome-small">Welcome to VAJRA</p>

              <h2>
                How can I <span>help you</span> today?
              </h2>

              <p className="welcome-description">
                Ask a question, upload a file, or choose a task to get started.
              </p>

              <div className="welcome-line"></div>
            </div>
          ) : (
            <div className="chat-history">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    msg.role === "user"
                      ? "user-message"
                      : "assistant-message"
                  }`}
                >
                  <div className="message-avatar">
                    {msg.role === "user" ? (
                      <User size={17} />
                    ) : (
                      <Bot size={17} />
                    )}
                  </div>

                  <div className="message-content">
                    <span className="message-role">
                      {msg.role === "user" ? "You" : "VAJRA"}
                    </span>

                    <p>{msg.content}</p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="chat-message assistant-message">
                  <div className="message-avatar">
                    <Bot size={17} />
                  </div>

                  <div className="message-content">
                    <span className="message-role">VAJRA</span>

                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="chat-box">
            <button
              className="attachment-button"
              aria-label="Attach file"
            >
              <Paperclip size={21} />
            </button>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask VAJRA anything..."
              rows={1}
              disabled={loading}
            />

            <button
              className="send-button"
              onClick={handleSend}
              disabled={loading || !message.trim()}
              aria-label="Send"
            >
              <Send size={20} />
            </button>
          </div>

          {messages.length === 0 && (
            <>
              <div className="quick-actions">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;

                  return (
                    <button
                      className="quick-action"
                      key={index}
                      onClick={() => setMessage(action.text)}
                    >
                      <Icon size={17} />
                      {action.text}
                    </button>
                  );
                })}
              </div>

              <div className="capability-grid">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      className="capability-card"
                      key={index}
                    >
                      <div className="capability-icon">
                        <Icon size={22} />
                      </div>

                      <h3>{item.title}</h3>

                      <p>{item.description}</p>

                      <span className="card-arrow">→</span>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <div className="secure-footer">
            <ShieldCheck size={16} />
            <span>Secure</span>
            <b>•</b>
            <span>Private</span>
            <b>•</b>
            <span>Sovereign</span>
          </div>
        </div>
      </section>
    </main>
  );
}