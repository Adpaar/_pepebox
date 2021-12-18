import React from "react";
import { brandLink, brandLogo } from "./mockData";

// Component for rendering the logo in the footer.

const FooterLogo = () => {
  return (
    <div className="footer-top__logo">
      <a
        href={brandLink}
        className="footer-top__logo-link"
        dangerouslySetInnerHTML={{ __html: brandLogo }}
        aria-label="Shogun Home Page"
        target="_blank"
      ></a>
    </div>
  );
};

export default FooterLogo;
