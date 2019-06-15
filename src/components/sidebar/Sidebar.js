import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row, Button} from 'reactstrap';
export default function Sidebar({darkMode, sections, side, open, toggleSidebar}) {
  return (
    <Col xs="2" className={`d-flex flex-column sidebar ${side} ${darkMode ? 'dark': ''} ${open ? 'open':'hidden'}`}>
      {sections && sections.map(section => {
        return (
          <Row>
            <Col>
              <a href={section.link}>{section.label}</a>
            </Col>
          </Row>
        )
      })}
      <Button block className={`mt-auto sidebar-button ${side==='right' ? 'float-left': 'float-right'}`} onClick={toggleSidebar}>{`${open? 'close':'open'}`}</Button>
    </Col>
  );
}

Sidebar.defaultProps = {
  darkMode: false,
  sections: [],
  side: 'left',
  open: true,
}

Sidebar.propTypes = {
  darkMode: PropTypes.bool,
  sections: PropTypes.array.isRequired,
  side: PropTypes.string,
  open: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
}
