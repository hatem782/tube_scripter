import React, { useState, useEffect } from "react";
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

import Toast from "./components/Toast/CustomToaster";

import { useDispatch, useSelector } from "react-redux";
import { GetUserByToken } from "./redux/User/user.actions";
import { GetLangByToken } from "./redux/lang/lang.actions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);
  const [loading, setLoading] = useState(true);

  const stop_loading = () => {
    setLoading(false);
  };

  useEffect(() => {
    dispatch(GetUserByToken(stop_loading));
    dispatch(GetLangByToken());
  }, []);

  return (
    <div className="app">
      <Toast />

      {!loading && (
        <div className="routes">
          {user.is_connected ? (
            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/script" element={<Scripter />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/bibleo" element={<Bibleotheque />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Navigate to="/settings" />} />
              </Routes>
            </BrowserRouter>
          ) : (
            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<Navigate to="/home" />} />
              </Routes>
            </BrowserRouter>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
