import * as types from "../actions/actionTypes";

const initState = {
  loading: false,
  books: [],
  error: [],
  search: null
}

export default function bookReducer(state = initState, action) {
  switch (action.type) {
    case types.LOADING_BOOKS_SUCCESS:
      return Object.assign({}, state, { loading: true, search: null })
    case types.LOAD_BOOKS_SUCCESS:
      return Object.assign({}, state, { loading: false, books: action.books })
    case types.SEARCH_BOOKS_SUCCESS:
      return Object.assign({}, state, { search: action.searchStr })
    case types.ERROR_BOOKS:
      return Object.assign({}, state, { loading: false, search: null, error: action.error })
    default:
      return state;
  }
}
