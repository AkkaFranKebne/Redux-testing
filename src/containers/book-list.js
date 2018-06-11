import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    //renders a list of books from reducer
    return this.props.books.map( (book) => {
      //we can use this prop because of function mapStateToProps below
      return (
        <li
          onClick = { () => this.props.selectBook(book) }
          //we can use this method in prop because of function mapDispatch below - function itself is in actions/index.js
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

// mapStateToProps function takes data from application state and enables to use them as props in container
function mapStateToProps(state) {
  //this will show as props in this component
  return {
    books: state.books
  }
}

//function mapDispatchToProps is used to trigger action that changes application's state
function mapDispatchToProps(dispatch) {
  //calling action selectBook - will pass result to all reducers, to be used only with this that deal with this TYPE of action
  //and this will show as props in this component
  return bindActionCreators({selectBook: selectBook }, dispatch);
}

// means that this this component is a container (pass data) and knows what to use as props and what to dispatch
export default connect(mapStateToProps, mapDispatchToProps)(BookList);