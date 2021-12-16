import React from "react";
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";

// Component for rendering the sections that will appear in the top half of the footer

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="footer-top__container">
        <FooterLogo />
        <FooterNav />
      </div>
    </div>
  );
};

export default FooterTop;
