/* Global imports */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Loader } from "semantic-ui-react";

/* Local imports */
import CharacterCard from "Components/CharacterCard";

/* Component definition */
const responsive = {
  0: { items: 1 },
  1024: { items: 3 }
};
const Carousel = ({ people, loading }) => {
  const [parsedPeople, setParsedPeople] = useState(people);

  useEffect(() => {
    if (people) {
      const parsePeople = people.map((p, i) => (
        <CharacterCard 
            key={i} 
            character={p} 
        />
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
Carousel.propTypes = {};
Carousel.defaultProps = {};

/* Local utility functions */

/* Styles */

export default Carousel;
