import autodux from 'autodux'

export const {
  reducer,
  initial,
  slice,
  actions: {
    failureList,
    requestList,
    successList,
  },
  selectors: {
    getError,
    getFetching,
    getList,
  },
} = autodux({
  
  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    failureList: (state) => ({ ...state, error: true, fetching: false }),
    requestList: (state) => ({ ...state, error: false, fetching: true }),
    successList: (state, list) => ({ ...state, error: false, fetching: false, list }),
  },

  // The initial value of your reducer state
  initial: {
    error:    false,
    fetching: false,
    list:     [],

  },

  // No need to select the state slice -- it's done for you.
  selectors: {
  },

  // the slice of state your reducer controls
  slice: 'people',
})
