import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Class } from '../../types';
import axios from 'axios';

interface ClassState {
  classes: Class[];
  loading: boolean;
  error: string | null;
}

const initialState: ClassState = {
  classes: [],
  loading: false,
  error: null,
};

export const fetchClasses = createAsyncThunk('classes/fetchClasses', async () => {
  // TODO: Replace with actual API endpoint
  const response = await axios.get('/api/classes');
  return response.data;
});

const classSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.classes = action.payload;
        state.loading = false;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch classes';
      });
  },
});

export default classSlice.reducer;