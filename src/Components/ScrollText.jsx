import React from "react";
import "./ScrollText.css";

const ScrollText = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-text">
        {/* Repeat the sentence multiple times for seamless scrolling */}
        Design your success story&nbsp;&nbsp;&nbsp;Design your success story&nbsp;&nbsp;&nbsp;Design your success story&nbsp;&nbsp;&nbsp;Design your success story
      </div>
    </div>
  );
};

export default ScrollText;
