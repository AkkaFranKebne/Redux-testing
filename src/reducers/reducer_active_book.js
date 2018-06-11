export default function(state = null, action) {
  //state reducer is responsible for
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}