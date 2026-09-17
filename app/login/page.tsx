"use client";

import { useState } from "react";
import { ShieldCheck, LockKeyhole, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary login for frontend development.
    // Real authentication will be added later.
    router.push("/home");
  };

  return (
    <main className="login-page">
      <div className="login-background">
        <div className="login-glow glow-one"></div>
        <div className="login-glow glow-two"></div>
      </div>

      <div className="login-container">

        <div className="login-brand">
          <div className="brand-shield">
            <ShieldCheck size={32} strokeWidth={2.2} />
          </div>

          <div>
            <h1>VAJRA AI</h1>
            <p>Your AI Partner</p>
          </div>
        </div>

        <div className="login-card">

          <div className="login-card-header">
            <LockKeyhole size={28} />

            <div>
              <h2>Secure Access</h2>
              <p>VAJRA Sovereign AI Workbench</p>
            </div>
          </div>

          <div className="security-badge">
            <span></span>
            LOCAL &amp; PRIVATE ENVIRONMENT
          </div>

          <form onSubmit={handleLogin}>

            <label>Employee ID / User ID</label>

            <input
              type="text"
              placeholder="Enter your employee ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-button">
              Secure Login
              <ArrowRight size={18} />
            </button>

          </form>

          <button className="access-link">
            Forgot credentials / Request access
          </button>

          <div className="login-security">
            <ShieldCheck size={17} />
            <span>
              Your information remains inside the organization.
            </span>
          </div>

        </div>

        <p className="login-footer">
          VAJRA AI • Secure • Private • Sovereign
        </p>

      </div>
    </main>
  );
}