import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
//import { user } from './user/userSlice';
import {app} from './app/appSlice';
import {combineReducers} from '@reduxjs/toolkit';
import {searchHistory} from './SearchHistory/historySlice';
import {searchResult_1} from './search/searchSlice';
const storeConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Combine all the reducers into one
const rootReducer = combineReducers({
  app,
  searchResult_1,
  searchHistory,
});

const persistedReducer = persistReducer(storeConfig, rootReducer);

export default persistedReducer;
