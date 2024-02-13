import React from "react";
import "./style.css";

export default function Category({ categories }) {
  return (
    
      <div className="categories-items">
        {categories.map((category, index) => (
          <div
            className="category"
            key={index}
            onClick={() =>
              (window.location.href = `/categories?value=${category}`)
            }
          >
            {category}
          </div>
        ))}
      </div>
  );
}
