import React from "react";
import worldImg from "../assets/Fill 213.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav-wrapper">
          <img src={worldImg} />
          <span>my travel journel.</span>
        </nav>
      </header>
    </>
  );
}
