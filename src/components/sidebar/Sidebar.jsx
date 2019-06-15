import React from "react";
import PropTypes from "prop-types";

import { Col } from "reactstrap";
/**
 * Children: Content to show inside the sidebar.
 * DarkMode: (True/False) if the color palette should be dark or not.
 * Sections: Links to be shown.
 * Side: ('left', 'right') Which side should this sidebar show.
 * Open: (True/False) if this sidebar should be open or not.
 * ToggleSidebar: Function to be called when the toggle button is clicked. // Unused right now.
 **/
export default function Sidebar({
  children,
  darkMode,
  sections,
  side,
  open,
  toggleSidebar
}) {
  // Children is the content that you will want to show inside this sidebar.
  return (
    <Col
      xs="2"
      className={`d-flex flex-column sidebar ${side} ${
        darkMode ? "dark" : ""
      } ${open ? "open" : "hidden"}`}
    >
      {children}
      {/* <Button block className={`mt-auto sidebar-button ${side==='right' ? 'float-left': 'float-right'}`} onClick={toggleSidebar}>{`${open? 'close':'open'}`}</Button> */}
    </Col>
  );
}

Sidebar.defaultProps = {
  darkMode: false,
  sections: [],
  side: "left",
  open: true
};

Sidebar.propTypes = {
  darkMode: PropTypes.bool,
  sections: PropTypes.array.isRequired,
  side: PropTypes.string,
  open: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
  children: PropTypes.object
};
