/* Global imports */
import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";
/* Local imports */

/* Component definition */
const StarWarHeader = () => (
  <Wrapper>
    <Logo></Logo>
    <Header as="h2" icon textAlign="center" color="green">
      <Header.Content>WELCOME TO SWAPI </Header.Content>
    </Header>
  </Wrapper>
);

/* PropTypes */
StarWarHeader.propTypes = {};
StarWarHeader.defaultProps = {};

/* Local utility functions */

/* Styles */
const Wrapper = styled.div`
  margin: 10px;
`;
const Logo = styled.div`
display: inline-block;
width: 100%;
height: 75px;
cursor: pointer;
background-image: url(https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz-04368052e188.png);
background-size: auto;
background-repeat: no-repeat;
background-position: center;
`

export default StarWarHeader;
