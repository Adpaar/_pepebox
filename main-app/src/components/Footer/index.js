import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

// Component for rendering the footer.

const Footer = () => {
  console.log("teste");
  return (
    <footer className="site-footer">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
