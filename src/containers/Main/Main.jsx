/* Global imports */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { Input } from "semantic-ui-react";

/* hooks */
import useDebounce from "Hooks/useDebounce";

/* Local imports */
import SearchResults from "Components/SearchResults";
import StarWarHeader from "Components/StarWarHeader";
import Carousel from "Components/Carousel";
import { filmProps } from 'Definitions/types'

/* Component definition */
const Main = props => {
  const { getFilms, getPeople, loading, films, loadingPeople, people } = props;
  const [querySearch, setQuerySearch] = useState("");

  const debouncedQuery = useDebounce(querySearch, 500);

  useEffect(() => {
    if (debouncedQuery) {
      getFilms({ search: debouncedQuery });
    }
  }, [debouncedQuery, getFilms]);

  useEffect(() => {
    getPeople();
  }, [getPeople]);

  return (
    <Grid container columns="1">
      <Grid.Row>
        <Grid.Column>
          <StarWarHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Carousel people={people} loading={loadingPeople} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Input
            icon="search"
            fluid
            placeholder="Search..."
            loading={loading}
            iconPosition="left"
            onChange={(ev, input) => setQuerySearch(input.value)}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <SearchResults results={films} loading={loading} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

/* PropTypes */
Main.propTypes = {
  films:         PropTypes.arrayOf(filmProps),
  loading:       PropTypes.bool,
  loadingPeople: PropTypes.bool,
  people:        PropTypes.arrayOf(PropTypes.object), 
};
Main.defaultProps = {};

/* Local utility functions */

/* Styles */

export default Main;
