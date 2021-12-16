import React from "react";
import FooterBaseLineLink from "./FooterBaseLineLink";
import { baselineLinks } from "./mockData";

// Component for rendering all the baseline links in the footer.

const FooterBaselineLinks = () => {
  return (
    <ul className="footer-bottom__baseline-list">
      {/* 
        Loop through the baselineLinks JSON response and for each index,
        extract the data and render a FooterBaseLineLink with the required
        props. If no data is retrieved, render a message saying no data.
      */}
      {baselineLinks ? (
        baselineLinks.map((link) => (
          <FooterBaseLineLink
            key={link._id}
            text={link.displayText}
            path={link.url}
          />
        ))
      ) : (
        <li className="footer-bottom__baseline-item">
          <p>There were no baseline links to render</p>
        </li>
      )}
    </ul>
  );
};

export default FooterBaselineLinks;
