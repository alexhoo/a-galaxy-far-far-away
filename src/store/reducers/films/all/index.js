import autodux from 'autodux'
import { propEq, find } from 'crocks'

export const {
  reducer,
  initial,
  slice,
  actions: {
    failureDetail,
    failureList,
    requestDetail,
    requestList,
    successDetail,
    successList,
  },
  selectors: {
    getCurrent,
    getError,
    getFetching,
    getList,
  },
} = autodux({
  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    failureDetail: (state) => ({ ...state, fetching: false }),
    failureList:   (state) => ({ ...state, fetching: false, error: true }),
    requestDetail: (state) => ({ ...state, fetching: true }),
    requestList:   (state) => ({ ...state, fetching: true, error: false }),
    successDetail: (state, product) => ({
      ...state,
      current:  product._id,
      fetching: false,
      list:     updateProduct(state.list, product),
    }),
    successList: (state, list) => ({ ...state, fetching: false, list, error: false }),
  },

  // The initial value of your reducer state
  initial: {
    current:  0,
    error:    false,
    fetching: false,
    list:     [],
  },

  // No need to select the state slice -- it's done for you.
  selectors: {
    getCurrent: ({ current, list }) =>
      find(propEq('_id', current), list).option(null),
  },

  // the slice of state your reducer controls
  slice: 'films',
})

const updateProduct = (list, product) => {
  const update = p => (dest, el) => dest.concat([el._id === p._id ? p : el])

  const elemSatisfies = (pred, list) => list.findIndex(pred) > -1

  return elemSatisfies(propEq('_id', product._id), list) ? list.reduce(update(product), []) : [product]
}
