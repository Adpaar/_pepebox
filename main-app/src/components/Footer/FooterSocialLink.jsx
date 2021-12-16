import React from "react";

// Component for rendering a social media link.

const FooterSocialLink = ({ path, icon, name }) => {
  return (
    <li className="footer-bottom__socials-item">
      <a
        href={path}
        className="footer-bottom__socials-link"
        dangerouslySetInnerHTML={{ __html: icon }}
        aria-label={name}
      ></a>
    </li>
  );
};

export default FooterSocialLink;
