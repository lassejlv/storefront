import React from "react";
import "./style.css";
import { SpinnerCircular } from "spinners-react";

export default function Loader() {
  return (
    <SpinnerCircular
      size={50}
      thickness={100}
      speed={150}
      color="#333333"
      secondaryColor="#dddddd"
    />
  );
}
