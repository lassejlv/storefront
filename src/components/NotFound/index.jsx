import React from "react";
import "./style.css";
import Button from "../Button";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>
        <span role="img" aria-label="Sad face">
          😢
        </span>
        Ups, noget gik galt!
      </h1>
      <p>
        Siden du leder efter findes ikke. Måske er den blevet fjernet, eller
        også har du tastet en forkert URL.
      </p>

      <Button color="default" onClick={() =>  window.location.href = "/"}>Gå til forsiden</Button>
    </div>
  );
}
