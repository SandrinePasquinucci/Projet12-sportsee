import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error from "./pages/Error/Error";

//https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-fr
// import your fontawesome library
import "./fontawesome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
