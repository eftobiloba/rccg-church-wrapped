import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapped from "./pages/Wrapped";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapped />} />
      </Routes>
    </BrowserRouter>
  );
}
