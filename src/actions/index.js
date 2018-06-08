export function selectBook(book) {
  //action creator that pass action as object
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}