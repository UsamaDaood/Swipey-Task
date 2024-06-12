import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  historyArr: [],
};

const chatSlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    handleSearchHistory: (state, action) => {
      let data = action.payload;
      console.log(data);
      state.historyArr = [data, ...state.historyArr];
    },
  },
  extraReducers: builder => {},
});
export const {handleSearchHistory} = chatSlice.actions;
export const searchHistory = chatSlice.reducer;
