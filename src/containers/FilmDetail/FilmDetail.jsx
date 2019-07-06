/* Global imports */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Loader, Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

/* Local imports */
import { filmDetailProps } from 'Definitions/types'
import { integerToRoman } from 'Utils'

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
        <Meta> EPISODE: { integerToRoman(filmDetail.episode_id) }</Meta>
        <MetaInfo> Producer: { filmDetail.producer } / Director: { filmDetail.director }</MetaInfo>
        <DisplayDate>Released date { moment(filmDetail.release_date).format("DD/MM/YYYY") }</DisplayDate>
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

const MetaInfo = styled.p`
font-style: uppercase;
padding: 5px 0px;
color: yellow;
`
const DisplayDate = styled.span`
  color: #7FC5DA;
`;

const Meta = styled.span`
font-size: 21px;

color: white;
padding: 10px 0px;
margin: 10px 0px;
`


export default React.memo(FilmDetail);
