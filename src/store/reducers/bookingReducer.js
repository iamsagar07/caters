import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: JSON.parse(localStorage.getItem('bookings') || '[]'),
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    submitBooking: (state) => {
      state.loading = true;
      state.error = null;
    },
    submitBookingSuccess: (state, action) => {
      state.loading = false;
      state.bookings = [...state.bookings, action.payload];
      localStorage.setItem('bookings', JSON.stringify(state.bookings));
      console.warn(action.payload)
    },
    submitBookingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { submitBooking, submitBookingSuccess, submitBookingFailure } = bookingSlice.actions;
export default bookingSlice.reducer;