import React from "react";
import "./style.css"

export default function Navbar() {
  return (
    <nav>
      <h1>BaliAbba</h1>

      <div className="search">
        <input type="text" placeholder="Find lige det du mangler" />
        <button>Search</button>
      </div>

      <ul className="links">
        <li>
          <a href="#">Find Butik</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Indkøbskurv</a>
        </li>
      </ul>
    </nav>
  );
}
