// reducers take care  as well of changing application state in time, they do it using actions (see actions folder)
// actions are then called using mapDispatchToProps function in containers
//state argument below is not whole application state, only the part of state that this reducer is responsible for

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}