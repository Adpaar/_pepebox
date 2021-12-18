import React from "react";

// Component for rendering a baseline link in the footer.

const FooterBaseLineLink = ({ text, path }) => {
  return (
    <li className="footer-bottom__baseline-item">
      <a href={path} target="_blank" className="footer-bottom__baseline-link">
        {text}
      </a>
    </li>
  );
};

export default FooterBaseLineLink;
