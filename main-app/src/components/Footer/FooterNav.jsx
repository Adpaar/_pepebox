import React, { useState } from "react";
import FooterNavSection from "./FooterNavSection";
import { navSections } from "./mockData";

// Component for rendering the navigation in the footer.

const FooterNav = () => {
  // State variable for setting which navigation section is expanded
  const [expandedNavSection, setExpandedNavSection] = useState("");

  // Function that sets the expandedNavSection state variable using a passed in id
  const toggleExpandedNavSection = (navId) => {
    setExpandedNavSection(navId);
  };

  return (
    <div className="footer-top__navigation">
      {/* 
        Loop through the navSections JSON response and for each index,
        extract the data and render a FooterNavSection with the required
        props. The toggleExpandedNavSection function is passed down as a prop
        so it can be called inside of the FooterNavSection component to change
        the state. isExpanded is a prop that is a boolean check to see which menu
        should be currently open and uses a unique id to prevent and collisions.
        If no data is retrieved, render a message saying no data.
      */}
      {navSections ? (
        navSections.map((section) => (
          <FooterNavSection
            key={section._id}
            header={section.displayText}
            links={section.navLinks}
            uniqueSectionId={section._id}
            isToggle={!section.highlightOnMobile}
            isExpanded={expandedNavSection === section._id}
            clickHandler={toggleExpandedNavSection}
          />
        ))
      ) : (
        <p>No nav sections were found.</p>
      )}
    </div>
  );
};

export default FooterNav;
