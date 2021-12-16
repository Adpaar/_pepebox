import React from "react";
import FooterCopyright from "./FooterCopyright";
import FooterBaseLineLinks from "./FooterBaseLineLinks";
import { legalText } from "./mockData";

// Component for rendering the "baseline" section of the footer that contains the extra links and copyright.

const FooterBaseLine = () => {
  return (
    <div className="footer-bottom__baseline">
      <FooterBaseLineLinks />
      <FooterCopyright text={legalText} />
    </div>
  );
};

export default FooterBaseLine;
