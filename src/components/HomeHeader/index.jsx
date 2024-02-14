import React from "react";
import "./style.css";
import Button from "../Button";

export default function HomeHeader() {
  return (
    <section className="home-header">
      <h1 className="home-header-title">
        Oplev en verden af kvalitetsprodukter
      </h1>
      <p className="home-header-description">
        Vi har et bredt udvalg af produkter, der passer til ethvert behov.
      </p>

      <div className="home-header-buttons">
        <Button color="default">Se produkter</Button>
        <Button color="default">Læs mere</Button>
      </div>
    </section>
  )
}
