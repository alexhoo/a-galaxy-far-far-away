/* Global imports */
import React from "react";
import PropTypes from "prop-types";

/* Local imports */
import Film from "Components/Film/Film";
import { Card, Loader } from "semantic-ui-react";

/* Component definition */
const SearchResults = ({ results, loading }) => {
  
  return loading ? <Loader size="big" active /> : (
    <Card.Group>
      { displayFilms(results) }
    </Card.Group>
  );
};

/* PropTypes */
SearchResults.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.arrayOf(PropTypes.object),
};
SearchResults.defaultProps = {};

/* Local utility functions */
const displayFilms = (results) => results.map((film, index) => {
  return <Film key={index} info={film} />
});


/* Styles */

export default SearchResults;
