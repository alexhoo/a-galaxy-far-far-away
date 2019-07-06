/* Global imports */
import React from "react";
import { Card } from "semantic-ui-react";
import moment from "moment";
import styled from "styled-components";
import { Link } from 'react-router-dom'

/* Local imports */
import { truncate, getIdFromFilmUrl, integerToRoman } from "Utils";
import { filmProps } from "Definitions/types";

/* Component definition */
const Film = ({ info }) => {
  const { title, opening_crawl, release_date, episode_id, url } = info;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{ title }</Card.Header>
        <Card.Meta>
          <DisplayDate>
            { moment(release_date).format("DD/MMMM/YYYY") }
          </DisplayDate>
        </Card.Meta>
        <Card.Description>{ truncate(150, opening_crawl) }</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/detail/${getIdFromFilmUrl(url)}`}>
          EPISODE { integerToRoman(episode_id) }
        </Link>
      </Card.Content>
    </Card>
  );
};

/* PropTypes */
Film.propTypes = {
  info: filmProps,
};
Film.defaultProps = {};

/* Local utility functions */

/* Styles */
const DisplayDate = styled.span`
  color: #7FC5DA;
`;
export default Film;
