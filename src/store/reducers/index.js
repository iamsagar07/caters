import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import bookingReducer from './bookingReducer';

export default combineReducers({
  theme: themeReducer,
  booking: bookingReducer,
});