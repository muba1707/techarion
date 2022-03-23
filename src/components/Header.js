import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div>
      <h1>Muba Project</h1>
      <header className="header">
        <Link to="/counter">1.counter</Link>
        <Link to="/apifetch">2.API Fetch</Link>
        <Link to="/postapi">3.POST API</Link>
      </header>
    </div>
  );
}

export default Header;
