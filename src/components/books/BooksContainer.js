import React from "react";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BookList from "./BookList";
import SearchBar from "../search/SearchBar";
import _ from 'lodash';
import Spinner from './../common/Spinner'

class BooksContainer extends React.Component {
  componentDidMount() {
    const { books, authors, actions } = this.props;

    //if (books.length === 0) {
    actions.loadBooks()
    //}

    //if (authors.length === 0) {
    actions.loadAuthors();
    //}
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return (
        <Spinner />
      );
    }
    return (
      <>
        <h2>List Of Books</h2><SearchBar />
        <BookList books={this.props.books} />
      </>
    );
  }
}

BooksContainer.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const getBooks = (state) => {
  let books = state.authors.length === 0
    ? []
    : state.bookReducer.books.map(book => {
      return {
        ...book,
        authorName: state.authors.find((a) => a.id === book.authorId).firstName
      };
    });
  if (!_.isNil(state.bookReducer.search) && !_.isEmpty(books)) {
    const filterBooks = _.filter(books, function (object) {
      return object['title'].toLowerCase().indexOf(state.bookReducer.search.toLowerCase()) >= 0;
    });
    return filterBooks;
  }
  return books;
}
function mapStateToProps(state) {
  return {
    books: getBooks(state),
    loading: state.bookReducer.loading,
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBooks: bindActionCreators(bookActions.loadBooks, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksContainer);
