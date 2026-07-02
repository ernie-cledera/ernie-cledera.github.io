"use client";

import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/50">
      <div className="text-center">
        <img
          src="/Logo Blue.png"
          alt="Logo"
          className="w-32 h-32 animate-fade-in-up"
        />
        <button
          onClick={handleClick}
          className="mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;