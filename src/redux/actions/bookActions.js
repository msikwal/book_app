import * as types from "./actionTypes";
import * as bookApi from "../../api/bookApi";


export function searchBooksSuccess(searchStr) {
  return { type: types.SEARCH_BOOKS_SUCCESS, searchStr };
}

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
}
export function errorBooks(error) {
  return { type: types.ERROR_BOOKS, error };
}

export function loadingBooksSuccess() {
  return { type: types.LOADING_BOOKS_SUCCESS };
}

export function searchBooks(searchStr) {
  return function (dispatch) {
    dispatch(searchBooksSuccess(searchStr));
  };
}

export function loadBooks() {
  return function (dispatch) {
    dispatch(loadingBooksSuccess());
    setTimeout(() => {
      return bookApi
        .getBooks()
        .then(books => {
          dispatch(loadBooksSuccess(books));
        })
        .catch(error => {
          //throw error;
          dispatch(errorBooks(error));
        });
    }, 500);
  };
}
