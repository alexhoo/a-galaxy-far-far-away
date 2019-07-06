/* Global imports */
import React from "react";
import PropTypes from "prop-types";
import { Menu, Sidebar } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Local imports */
import { getIdFromFilmUrl } from "Utils";

/* Component definition */
const SideBarMenu = ({ visits, visible }) => {
  return (
    <Sidebar
      as={Menu}
      animation={"push"}
      direction={"left"}
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="thin"
    >
      <Title>History</Title>
      <Wrapper>{ loadVisitsLink(visits) }</Wrapper>
    </Sidebar>
  );
};

/* PropTypes */
SideBarMenu.propTypes = {
  visible: PropTypes.bool,
  visits:  PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url:   PropTypes.string,
    })
  ),

};
SideBarMenu.defaultProps = {};

/* Local utility functions */
const loadVisitsLink = visits => {
  return visits.map((v, i) => {
    return (
      <Menu.Item key={i}>
        <Link to={`/detail/${getIdFromFilmUrl(v.url)}`}>{ v.title }</Link>
      </Menu.Item>
    );
  });
};

/* Styles */
const Wrapper = styled.div`
  margin: 10px;
`;

const Title = styled.h2`
  color: white;
  padding: 30px 0px;
`;

export default React.memo(SideBarMenu);
