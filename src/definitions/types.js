import { shape, string, date, number } from "prop-types";

export const filmProps = shape({
  episode_id:    number,
  opening_crawl: string,
  release_date:  date,
  title:         string,
  url:           string,
});

export const filmDetailProps = shape({
  episode_id:    number,
  opening_crawl: string,
  release_date:  date,
  title:         string,
  url:           string,
});