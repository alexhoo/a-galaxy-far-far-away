/* Global imports */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Loader } from "semantic-ui-react";
import { defaultTo } from 'ramda'


/* Local imports */
import CharacterCard from "Components/CharacterCard";
import { isNotEmpty } from 'Utils'

/* Component definition */
const responsive = {
  0:    { items: 1 },
  1200: { items: 3 },
  1440: { items: 4 },
  700:  { items: 2 },
};
const Carousel = ({ people, loading }) => {
  const [parsedPeople, setParsedPeople] = useState(defaultTo([], people));

  useEffect(() => {
    if (isNotEmpty(people)) {
      const parsePeople = people.map((p, i) => (
        <CharacterCard key={i} character={p} />
      ));

      setParsedPeople(parsePeople);
    }
  }, [people]);
  
  
  return loading ? (
    <Loader size="small" active />
  ) : (
    <AliceCarousel
      autoPlay={true}
      autoPlayInterval={3000}
      fadeOutAnimation={true}
      items={parsedPeople}
      mouseDragEnabled={true}
      responsive={responsive}
      showSlideInfo={false}
      dotsDisabled={true}
      buttonsDisabled={true}
    />
  );
};

/* PropTypes */
Carousel.propTypes = {
    loading: PropTypes.bool,
    people:  PropTypes.arrayOf(PropTypes.object),
    
};
Carousel.defaultProps = {};

/* Local utility functions */

/* Styles */

export default React.memo(Carousel);
