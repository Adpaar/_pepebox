import React from "react";
import FooterSocialLink from "./FooterSocialLink";
import { socialLinks } from "./mockData";

// Component for rendering all social media links.

const FooterSocialMedia = () => {
  return (
    <ul className="footer-bottom__socials">
      {/* 
        Loop through the socialLinks JSON response and for each index,
        extract the data and render a FooterSocialLink with the required
        props. If no data is retrieved, render a message saying no data.
      */}
      {socialLinks ? (
        socialLinks.map((link) => (
          <FooterSocialLink
            key={link._id}
            path={link.url}
            icon={link.icon}
            name={link.name}
          />
        ))
      ) : (
        <li className="footer-bottom__socials-item">
          <p>There were no social media links provided.</p>
        </li>
      )}
    </ul>
  );
};

export default FooterSocialMedia;
