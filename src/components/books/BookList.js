import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from 'moment';

const BookList = ({ books }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Date</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => {
        return (
          <tr key={book.id}>
            <td>
              {index + 1}
            </td>
            <td>
              <Link to={"/books/" + book.id}>{book.title}</Link>
            </td>
            <td>{book.authorName}</td>
            <td>{book.date ? moment(book.date).format('DD MMM YYYY') : ""}</td>
            <td>{book.body}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
