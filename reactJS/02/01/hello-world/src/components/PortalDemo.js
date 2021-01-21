import React from "react";
import ReactDOM from "react-dom";

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById("portal-root") // access from public/index.html
  );
};

export default PortalDemo;
