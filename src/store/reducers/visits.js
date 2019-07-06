import autodux from "autodux";
import { evolve } from "ramda";
import { addToArray } from "Utils";

export const {
  reducer,
  initial,
  slice,
  actions: { addItem },
  selectors: { getList },
} = autodux({
  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    addItem: (state, visit) => evolve({ list: addToArray(visit) }, state),
  },

  // The initial value of your reducer state
  initial: {
    list: [],
  },

  // No need to select the state slice -- it's done for you.
  selectors: {},

  // the slice of state your reducer controls
  slice: "visits",
});
