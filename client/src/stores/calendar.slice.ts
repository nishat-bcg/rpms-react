import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { getAllCalendarsData } from 'src/api/services/index';

export const fetchCalendarsData = createAsyncThunk(
  'posts/fetchCalendarsData',
  async (thunkAPI) => {
    try {
      const response = await getAllCalendarsData();
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
  entities: any[];
  loading: boolean;
  error: any;
}

const initialState = {
  entities: require('src/stores/data/all_calendars.json'),
  loading: false,
  error: '',
} as calendarState;

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addToCalendar(state, { payload }) {
      state.entities = [...state.entities, payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCalendarsData.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchCalendarsData.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        entities: action.payload,
      };
    });
    builder.addCase(fetchCalendarsData.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    });
  },
});

export const { addToCalendar } = calendarSlice.actions;

export default calendarSlice;
