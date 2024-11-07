import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Fee } from '../../types';
import { feeApi } from '../../services/api';

interface FeeState {
  fees: Fee[];
  loading: boolean;
  error: string | null;
}

const initialState: FeeState = {
  fees: [],
  loading: false,
  error: null,
};

export const fetchFees = createAsyncThunk(
  'fees/fetchFees',
  async (studentId: string) => {
    const response = await feeApi.getFees(studentId);
    return response.data;
  }
);

export const createFee = createAsyncThunk(
  'fees/createFee',
  async (data: Partial<Fee>) => {
    const response = await feeApi.createFee(data);
    return response.data;
  }
);

const feeSlice = createSlice({
  name: 'fees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFees.fulfilled, (state, action) => {
        state.fees = action.payload;
        state.loading = false;
      })
      .addCase(fetchFees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch fees';
      })
      .addCase(createFee.fulfilled, (state, action) => {
        state.fees.push(action.payload);
      });
  },
});

export default feeSlice.reducer;