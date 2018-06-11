import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
      //we can use it as props because os mapStateToProps function below
      if (!this.props.book) {
        //return sth on application start, when there is no app state yet
        return(
          <div>Select a book</div>
        )
      }
      //return sth on app state change
      return (
        <div>
          <h3>Detailes for { this.props.book.title }</h3>
          <p>{ this.props.book.description }</p>
        </div>
      )
    }
}

function mapStateToProps(state) {
  //this will take data from app's state and show as props in this container
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);