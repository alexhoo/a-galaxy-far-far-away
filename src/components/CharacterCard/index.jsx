/* Global imports */
import React from "react";
import PropTypes from "prop-types";
import { Card, Icon } from "semantic-ui-react";
import styled from 'styled-components'

/* Local imports */
import { getColor } from 'Utils'

/* Component definition */
const CharacterCard = ({ character }) => {
  const { gender, name, eye_color, mass, height } = character;

  return (
    <Card>
      <Centered>
          <Icon
        size="massive"
        name={getGender(gender)}
        color={getColor(eye_color)}
      />
      </Centered>
      <Card.Content>
        <Card.Header><Centered>{name}</Centered></Card.Header>
      </Card.Content>
      <Card.Content extra>Height: {height} cm / Mass: {mass}</Card.Content>
    </Card>
  );
};

/* PropTypes */
CharacterCard.propTypes = {
  character: PropTypes.object,
};
CharacterCard.defaultProps = {};

/* Local utility functions */
const getGender = gender => {
  switch (gender) {
    case "male":
      return "mars";
    case "female":
      return "venus";
    default:
      return "genderless";
  }
};
/* Styles */
const Centered = styled.div`
display:flex;
justify-content: center;
align-items:center;
`


export default CharacterCard;
