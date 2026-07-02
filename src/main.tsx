import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./globals.css";
import { DarkVeilProvider } from "./components/layout/DarkVeilProvider";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <DarkVeilProvider>
      <App />
    </DarkVeilProvider>
  </BrowserRouter>
);