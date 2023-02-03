import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import Login from "./pages/login/Index";
import Register from "./pages/register/Index";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
