import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/books/";

export function getBooks() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}