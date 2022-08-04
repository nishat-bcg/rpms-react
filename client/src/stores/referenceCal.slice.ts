import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { getReferenceCalendar } from 'src/api/services/index';

export const fetchReferenceCalendar = createAsyncThunk(
  'posts/fetchReferenceCalendar',
  async (thunkAPI) => {
    try {
      const response = await getReferenceCalendar();
      return response.data;
    } catch (error) {
      const responseError = error as AxiosError<{ message: string }> | Error;
      if (axios.isAxiosError(responseError)) {
        if (responseError.response?.data)
          return Promise.reject(responseError.response?.data.message);
        return Promise.reject(responseError.message);
      }
      return Promise.reject(responseError);
    }
  }
);

interface calendarState {
  entities: any;
  loading: boolean;
  error: any;
}

const initialState = {
  entities: require('src/stores/data/all_reference_calendars.json'),
  loading: false,
  error: '',
} as calendarState;

const refCalendarSlice = createSlice({
  name: 'refCalendar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReferenceCalendar.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchReferenceCalendar.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        entities: action.payload,
      };
    });
    builder.addCase(fetchReferenceCalendar.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    });
  },
});

export default refCalendarSlice;
