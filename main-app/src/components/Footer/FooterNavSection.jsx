import React from "react";
import FooterNavSectionLink from "./FooterNavSectionLink";

// Component for rendering a navigation section in the footer.

const FooterNavSection = ({
  header,
  links,
  uniqueSectionId,
  isToggle,
  isExpanded,
  clickHandler
}) => {
  // Click listener function that changes the value of the
  // expandedNavSection state variable in the FooterNav component
  const handleClick = (e) => {
    // If this section is already expanded, close it and no sections will be open,
    // otherwise close this section and open the newly clicked one
    if (isExpanded) {
      clickHandler("");
    } else {
      clickHandler(uniqueSectionId);
    }
  };

  return (
    <div className="footer-top__navigation-section">
      <h2
        className={
          isToggle
            ? "footer-top__navigation-header footer-top__navigation-header--toggle"
            : "footer-top__navigation-header"
        }
      >
        {header}
        {/* If this is a toggle nav section, add some specific CSS classes and 
            a toggle button for expanding and collapsing the section 
        */}
        {isToggle ? (
          <button
            className={
              isExpanded
                ? "footer-top__navigation-toggle footer-top__navigation-toggle--expanded"
                : "footer-top__navigation-toggle"
            }
            aria-expanded={isExpanded}
            onClick={handleClick}
          >
            <span className="visually-hidden">Toggle {header} links</span>
          </button>
        ) : null}
      </h2>
      <ul
        className={
          isToggle
            ? isExpanded
              ? "footer-top__navigation-list footer-top__navigation-list--toggle footer-top__navigation-list--expanded"
              : "footer-top__navigation-list footer-top__navigation-list--toggle"
            : "footer-top__navigation-list"
        }
      >
        {/* 
          Loop through the links prop and for each index,
          extract the data and render a FooterNavSectionLink with the required
          props. If no data is retrieved, render a message saying no data.
        */}
        {links ? (
          links.map((link) => (
            <FooterNavSectionLink
              key={link._id}
              path={link.url}
              text={link.displayText}
              tag={link.tag}
              icon={link.icon}
            />
          ))
        ) : (
          <li footer-top__navigation-item>
            <p>No navigation links were found in this section</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FooterNavSection;
