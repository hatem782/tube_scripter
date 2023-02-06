import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Home from "./pages/home/Home";
import Scripter from "./pages/scripter/Scripter";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/script" element={<Scripter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
