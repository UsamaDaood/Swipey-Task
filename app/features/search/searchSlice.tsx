import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  weather: {},
};

const searchSliceSlice = createSlice({
  name: 'searchResult_1',
  initialState,
  reducers: {
    searchResult: (state, action) => {
      let {data} = action.payload;
      state.weather = {data};
    },
  },
  extraReducers: builder => {},
});

export const {searchResult} = searchSliceSlice.actions;
export const searchResult_1 = searchSliceSlice.reducer;
