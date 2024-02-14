import React from "react";
import "./style.css";

export default function Button({ color, children, href, ...props }) {
  const allowedColors = ["default", "dark", "light"]
  if (!allowedColors.includes(color)) {
    throw new Error(`Invalid color: ${color}`)
  }

  return (
    <button className={`btn btn-${color}`} {...props}>
      {children}
    </button>
  )
}
