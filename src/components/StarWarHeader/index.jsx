/* Global imports */
import React from "react";
import { Header } from 'semantic-ui-react'

/* Local imports */

/* Component definition */
const StarWarHeader = () => (
  <div>
    <Header as="h2" icon textAlign="center">
      <Header.Content>Welcome to Star war app</Header.Content>
    </Header>
  </div>
);

/* PropTypes */
StarWarHeader.propTypes = {};
StarWarHeader.defaultProps = {};

/* Local utility functions */

/* Styles */

export default StarWarHeader;
