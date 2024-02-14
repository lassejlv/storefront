import React from "react";
import "./style.css";
import Button from "../Button";

export default function Category({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <Button color="light" key={index} onClick={() => (window.location.href = `/categories?value=${category}`)}>
          #{category}
        </Button>
      ))}

      <hr className="divider" />
    </div>
  );
}
