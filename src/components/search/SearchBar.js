import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import { bindActionCreators } from "redux";
import * as bookActions from "../../redux/actions/bookActions";

class SearchBar extends React.PureComponent {
    state = {
        searchTerm: ''
    };
    doSearch = _.debounce(() => {
        this.props.actions.searchBooks(this.state.searchTerm);
    }, 300);
    handleSearch = (event) => {
        console.log(event.target.value)
        this.setState({ searchTerm: event.target.value }, () => {
            this.doSearch();
        });
    }
    render() {
        return (
            <input
                className="form-control"
                type="search"
                placeholder="Enter search string"
                value={this.state.searchTerm}
                onChange={this.handleSearch}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            searchBooks: bindActionCreators(bookActions.searchBooks, dispatch),
        }
    };
}
export default connect(
    null,
    mapDispatchToProps
)(SearchBar);

