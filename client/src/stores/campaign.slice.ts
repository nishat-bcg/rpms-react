import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { getCampaignMatrix } from 'src/api/services/index';

export const fetchCampaignMatrix = createAsyncThunk(
  'posts/fetchCampaignMatrix',
  async (thunkAPI) => {
    try {
      const response = await getCampaignMatrix();
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

interface matrixState {
  entities: any[];
  loading: boolean;
  error: any;
}

const initialState = {
  entities: require('src/stores/data/campaign_matrix.json'),
  loading: false,
  error: '',
} as matrixState;

const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampaignMatrix.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchCampaignMatrix.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        entities: action.payload,
      };
    });
    builder.addCase(fetchCampaignMatrix.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    });
  },
});

export default campaignSlice;
