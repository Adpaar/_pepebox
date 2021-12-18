import React from "react";

// Component for rendering a link in the footer navigation sections.

const FooterNavSectionLink = ({ path, text, tag, icon }) => {
  return (
    <li className="footer-top__navigation-item">
      {/* If this link is an icon link with no text, render it as such */}
      {icon ? (
        <a
          href={path}
          className="footer-top__navigation-link"
          dangerouslySetInnerHTML={{ __html: icon }}
          aria-label="Product"
          target="_blank"
        ></a>
      ) : (
        <>
          {/* If this is not an icon link, render a normal link with the data passed */}
          <a
            href={path}
            target="_blank"
            className="footer-top__navigation-link"
          >
            {text}
          </a>
          {/* If there is a tag included with this link, display it otherwise display nothing */}
          {tag ? (
            <span className="footer-top__navigation-tag">{tag}</span>
          ) : null}
        </>
      )}
    </li>
  );
};

export default FooterNavSectionLink;
