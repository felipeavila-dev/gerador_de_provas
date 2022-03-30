import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'login',
  initialState: {
    isLogged: false
  },
  reducers:{
    setLogin: (state, action) => {
      state.isLogged = action.payload;  
    }
  }
});

export const {setLogin} = slice.actions;
export default slice.reducer;