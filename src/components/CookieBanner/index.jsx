import React from "react";
import Button from "../Button";
import "./style.css";

export default function CookieBanner() {
  return (
    <div className="cookie-banner">
      <p className="cookie-banner-text">
        Vi bruger cookies til at forbedre din oplevelse på vores hjemmeside. Ved at bruge vores hjemmeside accepterer du brugen af cookies.
      </p>
      <Button color="default">Accepter</Button>
    </div>
  )
}
