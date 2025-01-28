import { takeLatest, put, call } from 'redux-saga/effects';
import { submitBooking, submitBookingSuccess, submitBookingFailure } from '../reducers/bookingReducer';

function* handleSubmitBooking(action) {
  try {
    // Simulate API call
    yield call(() => new Promise(resolve => setTimeout(resolve, 1000)));
    yield put(submitBookingSuccess(action.payload));
  } catch (error) {
    yield put(submitBookingFailure(error.message));
  }
}

export default function* bookingSaga() {
  yield takeLatest(submitBooking.type, handleSubmitBooking);
}