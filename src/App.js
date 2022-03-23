import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/counter";
import GetAPIRequest from "./components/GetAPIRequest";
import PostAPI from "./components/PostAPI";
import Header from "./components/Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/apifetch" element={<GetAPIRequest />} />
        <Route path="/postapi" element={<PostAPI />} />
      </Routes>
    </Router>
  );
}

export default App;
