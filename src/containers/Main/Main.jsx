/* Global imports */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Search } from "semantic-ui-react";

/* Local imports */
import useDebounce from 'Hooks/useDebounce';
import StarWarHeader from "Components/StarWarHeader";

/* Component definition */
const Main = props => {
  const { loading, films } = props
  const [querySearch, setQuerySearch] = useState('')
  
  const debouncedQuery = useDebounce(querySearch, 500)
  
  useEffect(() => {
    if (debouncedQuery){
      
      props.getFilms({ search: debouncedQuery } )
    }
    
	}, [debouncedQuery, props]);

  return (
    <Grid container columns="1">
      <Grid.Row>
        <Grid.Column>
          <StarWarHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Search
            loading={loading}
            onResultSelect={() => null}
            onSearchChange={(ev, input) => setQuerySearch(input.value)}
            results={films}
            size="massive"
            value={querySearch}
            fluid={false}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

/* PropTypes */
Main.propTypes = {
  films:   PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,

};
Main.defaultProps = {};

/* Local utility functions */


/* Styles */

export default Main;
