import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
      if (!this.props.book) {
        return(
          <div>Select a book</div>
        )
      }
      return (
        <div>
          <h3>Detailes for { this.props.book.title }</h3>
          <p>{ this.props.book.description }</p>
        </div>
      )
    }
}

function mapStateToProps(state) {
  //this will show as props in this component
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);