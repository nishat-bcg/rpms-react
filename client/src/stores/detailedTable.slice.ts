import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { getDetailedTable } from 'src/api/services/index';

export const fetchDetailedTable: any = createAsyncThunk(
  'posts/fetchDetailedTable',
  async (thunkAPI) => {
    try {
      const response = await getDetailedTable();
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

interface DetailedState {
  entities: any;
  loading: boolean;
  error: any;
}

const initialState = {
  entities: require('src/stores/data/detailed_table_data.json'),
  loading: false,
  error: '',
} as DetailedState;

const detailedTableSlice = createSlice({
  name: 'detailedTable',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetailedTable.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchDetailedTable.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        entities: action.payload,
      };
    });
    builder.addCase(fetchDetailedTable.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    });
  },
});

export default detailedTableSlice;
