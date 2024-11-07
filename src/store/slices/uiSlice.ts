import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isLoading: boolean;
  toast: {
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
  };
  activeModals: string[];
}

const initialState: UIState = {
  isLoading: false,
  toast: {
    show: false,
    message: '',
    type: 'info',
  },
  activeModals: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    showToast: (state, action: PayloadAction<Omit<UIState['toast'], 'show'>>) => {
      state.toast = { ...action.payload, show: true };
    },
    hideToast: (state) => {
      state.toast.show = false;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.activeModals.push(action.payload);
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state.activeModals = state.activeModals.filter(id => id !== action.payload);
    },
  },
});

export const { setLoading, showToast, hideToast, openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;