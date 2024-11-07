import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Attendance } from '../../types';
import { attendanceApi } from '../../services/api';

interface AttendanceState {
  records: Attendance[];
  loading: boolean;
  error: string | null;
}

const initialState: AttendanceState = {
  records: [],
  loading: false,
  error: null,
};

export const fetchAttendance = createAsyncThunk(
  'attendance/fetchAttendance',
  async ({ classId, date }: { classId: string; date: string }) => {
    const response = await attendanceApi.getAttendance(classId, date);
    return response.data;
  }
);

export const markAttendance = createAsyncThunk(
  'attendance/markAttendance',
  async (data: Partial<Attendance>[]) => {
    const response = await attendanceApi.markAttendance(data);
    return response.data;
  }
);

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttendance.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAttendance.fulfilled, (state, action) => {
        state.records = action.payload;
        state.loading = false;
      })
      .addCase(fetchAttendance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch attendance';
      })
      .addCase(markAttendance.pending, (state) => {
        state.loading = true;
      })
      .addCase(markAttendance.fulfilled, (state, action) => {
        state.records = [...state.records, ...action.payload];
        state.loading = false;
      })
      .addCase(markAttendance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to mark attendance';
      });
  },
});

export default attendanceSlice.reducer;