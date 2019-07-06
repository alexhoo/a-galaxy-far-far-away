/* Global imports */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Loader, Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* Local imports */
import { filmDetailProps } from 'Definitions/types'

/* Component definition */
const FilmDetail = ({ getFilmById, filmDetail, match, loading }) => {
  const { id } = match.params;

  useEffect(() => {
    getFilmById(id);
  }, [getFilmById, id]);

  return loading || !filmDetail ? (
    <Loader size="big" active />
  ) : (
    <Wrapper>
      <Container text>
        <Header as="h2" color="yellow">
          { filmDetail.title }
        </Header>
        <Paragraph>{ filmDetail.opening_crawl }</Paragraph>
        <Link to={"/"}> Back </Link>
      </Container>
    </Wrapper>
  );
};

/* PropTypes */
FilmDetail.propTypes = {
  filmDetail:  filmDetailProps,
  getFilmById: PropTypes.func,
  loading:     PropTypes.bool,
  match:       PropTypes.object,
};
FilmDetail.defaultProps = {};

/* Local utility functions */

/* Styles */
const Wrapper = styled.div`
  margin: 15px;
`;

const Paragraph = styled.p`
  color: white;
`;

export default React.memo(FilmDetail);
