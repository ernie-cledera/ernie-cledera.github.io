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
</dyadadad-write path="src/App.tsx" description="Fix default export issue and add splash screen route">
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/splash" element={<SplashScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;