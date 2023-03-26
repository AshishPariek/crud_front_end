import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./componets/Home";
import Edit from "./componets/Edit";
import Show from "./componets/Show";
import Add from "./componets/Add";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer autoClose="1000" position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Show/:id" element={<Show />} />
        <Route path="/Add" element={<Add />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
