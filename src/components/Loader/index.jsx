import React from "react";
import { SpinnerCircular } from "spinners-react";
import "./style.css";

export default function Loader({ loading, center, children }) {
  return (
    <>
      {loading ? (
        <div className={center ? "center" : ""}>
          <SpinnerCircular
            size={50}
            thickness={100}
            speed={150}
            color="#333333"
            secondaryColor="#dddddd"
          />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
