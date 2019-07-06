import { 
    concat, 
    curry, 
    flip, 
    head, 
    pipe, 
    splitAt,
    match,
    defaultTo,
    flatten,
    last,
    split,
    map,
 } from "ramda";

const fconcat = flip(concat);

// truncate :: Number -> String -> String
export const truncate = curry((length, content) =>
  pipe(
    splitAt(length),
    head,
    fconcat("...")
  )(content)
);

// getIdFromUrl :: String -> String
export const getIdFromFilmUrl = pipe(
  match(/films\/[0-9]*/gi),
  map(split("/")),
  flatten,
  last
);

// integerToRoman :: Number -> String
export const integerToRoman = integer => {

    const toRoman = defaultTo(0, integer)
  
    switch (toRoman) {
      case 1:
        return "I";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "IV";
      case 5:
        return "V";
      case 6:
        return "VI";
      case 7:
        return "VII";
      default:
        return toRoman.toString();
    }
  };