import { 
    always,
    concat, 
    curry, 
    defaultTo,
    flatten,
    flip, 
    head, 
    ifElse,
    includes,
    last,
    map,
    match,
    pipe, 
    split,
    splitAt,
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

const colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]
const predicate = (input) => colors => includes(input, colors)

export const getColor = input => ifElse(predicate(input), always(input), always('blue'))(colors)
