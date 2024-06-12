import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../../Networking/config';
import httpClient from '../../../Networking/httpClient';
import {API_KEY} from '../../../utils/Const';

interface SearchParams {
  cityName: string;
}
// User Signup
export const searchWeatherAsync = createAsyncThunk(
  'weather/search',
  async (params: SearchParams) => {
    const {cityName} = params;

    const linkHit =
      BASE_URL + `/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

    const response = await httpClient.callAPI('POST', linkHit, params, null);
    return response;
  },
);
