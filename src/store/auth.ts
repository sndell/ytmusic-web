import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    headers: localStorage.getItem('headers') || undefined,
  },
  reducers: {
    authenticate: (state, action) => {
      console.log(action);
      state.headers = action.payload;
      localStorage.setItem('headers', action.payload);
    },
  },
});

export const { authenticate } = auth.actions;
export const selectHeaders = (state: any) => state.auth.headers;
export default auth.reducer;