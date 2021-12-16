import React from "react";
import FooterSocialMedia from "./FooterSocialMedia";
import FooterBaseLine from "./FooterBaseLine";

// Component for rendering the sections that will appear in the bottom half of the footer.

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom__container">
        <FooterSocialMedia />
        <FooterBaseLine />
      </div>
    </div>
  );
};

export default FooterBottom;
