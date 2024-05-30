import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  todayNote: null,
  userSetting: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setTodayNote: (state, action) => {
      state.todayNote = action.payload;
    },
    setUserSetting: (state, action) => {
      state.userSetting = action.payload;
    },
  },
});

export const {setUserData, setUserCurrency, setTodayNote, setUserSetting} =
  userSlice.actions;
export default userSlice.reducer;
