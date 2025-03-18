import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignupPage from "./Pages/SignupPage";
import Service from "./Pages/Service";
import SchedulePage from "./Pages/SchedulePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} /> {/* Default page */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/schedule/:id" element={<SchedulePage />} />{" "}
        {/* Dynamic route */}
      </Routes>
    </BrowserRouter>
  );
}
