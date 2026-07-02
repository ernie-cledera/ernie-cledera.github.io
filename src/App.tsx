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