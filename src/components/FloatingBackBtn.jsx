import React from "react";
import { Link } from "react-router-dom";

function FloatingBackBtn() {
  return (
    <div className="rounded-circle" id="FloatingBackBtn">
      <Link to="#" onClick={() => window.history.back()}>
        <i className="fas fa-chevron-left fa-2x"></i>
      </Link>
    </div>
  );
}

export default FloatingBackBtn;
