import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { getProducts } from 'src/api/services/index';

export const fetchProducts = createAsyncThunk(
  'posts/fetchProducts',
  async (thunkAPI) => {
    try {
      const response = await getProducts();
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

interface ProductState {
  entities: any;
  loading: boolean;
  error: any;
}

const initialState = {
  entities: require('src/stores/data/products.json'),
  loading: false,
  error: '',
} as ProductState;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        entities: action.payload,
      };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    });
  },
});

export default productSlice;
