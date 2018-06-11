//Redux takes care of application data by creating state of the application (an object rootReducer, separated from components' state!)
//application state is set up in reducers: for each key in rootReducer object you can assign one reducer

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
