"use client";

import { useState, useEffect, type FormEvent } from "react";
import { Eye, EyeOff, LogIn, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  const DEFAULT_USERNAME = "admin";
  const DEFAULT_PASSWORD = "12345";

  useEffect(() => {
    initMatrixBackground();
    initFloatingIcons();
  }, []);

  const initMatrixBackground = () => {
    const matrixBg = document.getElementById("matrixBg");
    if (!matrixBg) return;

    const columns = Math.floor(window.innerWidth / 20);
    matrixBg.innerHTML = "";

    for (let i = 0; i < columns; i++) {
      const column = document.createElement("div");
      column.className = "matrix-column";
      column.style.left = `${i * 20}px`;
      column.style.animationDuration = `${Math.random() * 3 + 2}s`;
      column.style.animationDelay = `${Math.random() * 2}s`;

      let text = "";
      for (let j = 0; j < 20; j++) {
        text += Math.random() > 0.5 ? "1" : "0";
        text += "<br>";
      }
      column.innerHTML = text;

      matrixBg.appendChild(column);
    }
  };

  const initFloatingIcons = () => {
    const floatingIcons = document.getElementById("floatingIcons");
    if (!floatingIcons) return;

    const icons = [
      "🔒",
      "🛡️",
      "📡",
      "🐛",
      "📹",
      "🖥️",
      "👁️",
      "🌐",
      "🔑",
      "🌍",
      "📊",
      "⚡",
    ];

    floatingIcons.innerHTML = "";

    for (let i = 0; i < 15; i++) {
      const icon = document.createElement("div");
      const useOrange = Math.random() > 0.7;
      icon.className = `floating-icon ${useOrange ? "orange" : ""}`;
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
      icon.style.animationDuration = `${Math.random() * 20 + 10}s`;
      icon.style.animationDelay = `${Math.random() * 5}s`;
      icon.textContent = icons[Math.floor(Math.random() * icons.length)];

      floatingIcons.appendChild(icon);
    }
  };

  const clearErrorStates = () => {
    setShowError(false);
    setError("");
    setShake(false);
  };

  const showErrorMessage = (message: string) => {
    setError(message);
    setShowError(true);
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    clearErrorStates();

    if (!username.trim() || !password.trim()) {
      showErrorMessage("Илтимос, фойдаланувчи номи ва паролни тўлдиринг");
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
        setIsSuccess(true);
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      } else {
        setIsLoading(false);
        if (username !== DEFAULT_USERNAME) {
          showErrorMessage("Фойдаланувчи номи топилмади");
        } else if (password !== DEFAULT_PASSWORD) {
          showErrorMessage("Нотўғри парол. Илтимос, қайта уриниб кўринг");
        } else {
          showErrorMessage("Нотўғри фойдаланувчи номи ёки парол");
        }
      }
    }, 1500);
  };

  const handleForgotPassword = () => {
    alert(
      "Паролни тиклаш учун администраторга мурожаат қилинг.\n\nDefault login ma'lumotlari:\nUsername: admin\nPassword: 12345"
    );
  };

  const handleLogoClick = () => {
    setUsername("admin");
    setPassword("12345");
  };

  return (
    <>
      <style jsx global>{`
        :root {
          --bg-dark: #0a1120;
          --primary-blue: #2563eb;
          --accent-orange: #f59e0b;
          --text-light: #f1f5f9;
          --text-gray: #94a3b8;
          --glass-bg: rgba(15, 23, 42, 0.8);
          --glass-border: rgba(37, 99, 235, 0.3);
        }

        body {
          background: var(--bg-dark);
          color: var(--text-light);
          overflow: hidden;
          height: 100vh;
        }

        .matrix-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .matrix-column {
          position: absolute;
          top: -100px;
          font-family: "Courier New", monospace;
          font-size: 14px;
          color: var(--primary-blue);
          opacity: 0.4;
          animation: matrixFall linear infinite;
          text-shadow: 0 0 10px var(--primary-blue);
        }

        @keyframes matrixFall {
          0% {
            transform: translateY(-100px);
            opacity: 0.3;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .floating-icons {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-icon {
          position: absolute;
          font-size: 24px;
          color: var(--primary-blue);
          opacity: 0.3;
          animation: floatIcon linear infinite;
        }

        .floating-icon.orange {
          color: var(--accent-orange);
        }

        @keyframes floatIcon {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -20px) rotate(90deg);
          }
          50% {
            transform: translate(-10px, -40px) rotate(180deg);
          }
          75% {
            transform: translate(20px, -60px) rotate(270deg);
          }
          100% {
            transform: translate(0, -80px) rotate(360deg);
          }
        }

        .login-container {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 2rem;
        }

        .login-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 3rem;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
          width: 100%;
          max-width: 450px;
          text-align: center;
          transform: translateY(50px);
          opacity: 0;
          animation: loginCardEntry 1s ease forwards;
          position: relative;
          overflow: hidden;
          z-index: 10;
        }

        .login-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            var(--primary-blue),
            var(--accent-orange)
          );
          border-radius: 24px;
          padding: 2px;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: subtract;
          z-index: -1;
        }

        @keyframes loginCardEntry {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .login-logo {
          width: 120px;
          height: auto;
          margin: 0 auto 1.5rem;
          display: block;
          filter: drop-shadow(0 0 20px rgba(37, 99, 235, 0.5));
          animation: iconPulse 2s infinite;
          cursor: pointer;
        }

        @keyframes iconPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .login-title {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(
            45deg,
            var(--primary-blue),
            var(--accent-orange)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .shake {
          animation: shake 0.6s ease-in-out;
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-8px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(8px);
          }
        }

        .error-message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          margin-top: 1rem;
          color: #ef4444;
          animation: fadeInError 0.3s ease;
        }

        @keyframes fadeInError {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-input {
          background: rgba(15, 23, 42, 0.5) !important;
          border: 1px solid var(--glass-border) !important;
          color: var(--text-light) !important;
        }

        .custom-input:focus {
          border-color: var(--accent-orange) !important;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2) !important;
        }

        .custom-button {
          background: linear-gradient(
            45deg,
            var(--primary-blue),
            var(--accent-orange)
          ) !important;
          border: none !important;
          position: relative;
          overflow: hidden;
        }

        .custom-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .custom-button:hover::before {
          left: 100%;
        }

        .custom-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4);
        }

        .custom-button.success {
          background: linear-gradient(45deg, #10b981, #059669) !important;
        }

        @media (max-width: 768px) {
          .login-card {
            padding: 2rem;
            margin: 1rem;
          }
          .login-title {
            font-size: 1.8rem;
          }
          .login-logo {
            width: 100px;
          }
        }
      `}</style>

      <div className="matrix-bg" id="matrixBg"></div>
      <div className="floating-icons" id="floatingIcons"></div>

      <div className="login-container">
        <div className={`login-card ${shake ? "shake" : ""}`}>
          <img
            src="/placeholder.svg?height=120&width=120"
            alt="IIB Logo"
            className="login-logo"
            onClick={handleLogoClick}
          />

          <h1 className="login-title">ЧИЛОНЗОР ТУМАНИ</h1>
          <p style={{ color: "var(--text-gray)", marginBottom: "2rem" }}>
            Рақамли хавфсизлик мониторинг тизимига кириш
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <Label
                htmlFor="username"
                className="text-sm"
                style={{ color: "var(--text-gray)" }}
              >
                Фойдаланувчи номи
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Фойдаланувчи номини киритинг"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="custom-input"
                onFocus={clearErrorStates}
                required
              />
            </div>

            <div className="space-y-2 text-left">
              <Label
                htmlFor="password"
                className="text-sm"
                style={{ color: "var(--text-gray)" }}
              >
                Парол
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Паролни киритинг"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="custom-input pr-10"
                  onFocus={clearErrorStates}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(checked) => setRemember(checked as boolean)}
              />
              <Label
                htmlFor="remember"
                className="text-sm"
                style={{ color: "var(--text-gray)" }}
              >
                Эслаб қолиш
              </Label>
            </div>

            {showError && (
              <div className="error-message">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-full text-lg font-semibold custom-button ${
                isSuccess ? "success" : ""
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Текширилмоқда...
                </>
              ) : isSuccess ? (
                <>
                  <Check size={20} className="mr-2" />
                  Кириш муваффақиятли!
                </>
              ) : (
                <>
                  Кириш
                  <LogIn size={20} className="ml-2" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-sm" style={{ color: "var(--text-gray)" }}>
            <p>
              Ҳисобингез борми?{" "}
              <button
                onClick={handleForgotPassword}
                className="text-orange-400 hover:text-blue-400 transition-colors underline"
              >
                Паролни унутдингизми?
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
