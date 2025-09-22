import React from "react";
import MainButton from "./mainButton";

export default function CallToAction() {
  return (
    <div className="callToAction">
      <div className="container">
        <h2>
          <span className="dark-bg--normal-word">EMPOWER</span>{" "}
          <span className="orange--word">YOUR</span>,{" "}
          <span className="dark-bg--normal-word">JOURNEY</span>{" "}
          <span className="orange--word">NOW</span>!
        </h2>
        <p>
          Your future deserves unwavering clarity, bold confidence, and compassionate expertise. Let our consultancy transform uncertainty into a guided journey toward the life you’ve always dreamed of
        </p>
        <MainButton>become a member</MainButton>
      </div>
    </div>
  );
}
