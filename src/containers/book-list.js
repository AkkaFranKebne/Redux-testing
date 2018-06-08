import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map( (book) => {
      //we can use this prop because of function mapDispatch below
      return (
        <li
          onClick = { () => this.props.selectBook(book) }
          className = 'list-group-item'
          key = { book.title }
        >{ book.title }</li>
      )
    })
  }


  render() {
    return (
      <ul className = 'list-group col-4-sm'>{ this.renderList() }</ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  //calling action selectBook will pass result to all reducers
  //this will show as props in this component
  return bindActionCreators({selectBook: selectBook }, dispatch);
}

function mapStateToProps(state) {
  //this will show as props in this component
  return {
    books: state.books
  }
}

// means that this this component is a container (pass data) and knows what to dispatch
export default connect(mapStateToProps, mapDispatchToProps)(BookList);