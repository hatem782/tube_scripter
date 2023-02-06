import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Home from "./pages/home/Home";
import Scripter from "./pages/scripter/Scripter";

import Footer from "./layouts/footer/Footer";
import DashNav from "./layouts/dash-navbar/DashNav";
import Settings from "./pages/Settings/Settings";
import Bibleotheque from "./pages/bibleo/Bibleothéque";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/script"
            element={
              <>
                <DashNav />
                <Scripter />
                <Footer />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <DashNav />
                <Settings />
                <Footer />
              </>
            }
          />
          <Route
            path="/bibleo"
            element={
              <>
                <DashNav />
                <Bibleotheque />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <DashNav />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
