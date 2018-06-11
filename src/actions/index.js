export function selectBook(book) {
  //action creator that pass action as object - is used and changed in reducer
  //action has to have type defined, usually info about state is passed in payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}