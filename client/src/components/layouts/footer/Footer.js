import React from "react";
import { render } from "react-dom";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
    <p>MonaAssemi Jewelry</p>
  </footer>
);


render([<App key="1" />, <Footer key="2" />], document.getElementById("root"));
