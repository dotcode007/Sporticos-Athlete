import {createSlice} from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    snackbar: {
      type: 'error',
      text: '',
      visible: false,
      duration: 0,
    },
    loader: false,
  },
  reducers: {
    setSnackbarVisible: (state, action) => {
      state.snackbar = {...state.snackbar, ...action.payload};
    },
    dismissSnackBar: (state, action) => {
      state.snackbar = {...state.snackbar, visible: false, text: ''};
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const {setSnackbarVisible, dismissSnackBar, setLoader} =
  appSlice.actions;

export default appSlice.reducer;
