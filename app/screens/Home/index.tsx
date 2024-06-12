import React, {useState} from 'react';
import {Text, View, Image, Pressable, ScrollView} from 'react-native';
/** Redux */
import {useDispatch, useSelector} from 'react-redux';
import {searchWeatherAsync} from '../../features/search/thunks';
import {handleSearchHistory} from '../../features/SearchHistory/historySlice';
/** Custom Components */
import CustomHeader from '../../common/Components/CustomHeader';
import CustomInput from '../../common/Components/CustomInput';
import {toastShow} from '../../libs/toast';
/** Images */
import {
  IC_CROSS,
  IC_FORWARD_SELECT,
  IC_FORWARD_UNSELECT,
  IC_NO_RECORD,
  IC_SEARCH,
  IC_SEARCHED_COLORED,
} from '../../utils/ImageSource';
/** Styles */
import Colors from '../../libs/Colors';
import {styles} from '../../Styles/Homestyles';
import {SWIPY_ICON_URL} from '../../utils/Const';

interface HomeProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const dispatch = useDispatch<any>();
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<any>();
  const {searchHistory} = useSelector((state: {searchHistory: any}) => state);

  const renderHeader = () => {
    return <CustomHeader headerTitle="Search Weather" />;
  };

  const searcbAPIPlaces = (cityname: string) => {
    const searchPlace = {
      cityName: cityname,
    };
    saveHistory(cityname);
    dispatch(searchWeatherAsync(searchPlace))
      .unwrap()
      .then((result: any) => {
        console.log('LOG:: SEARCH RESULT ' + JSON.stringify(result));
        result.cod == 200
          ? toastShow('success', 'Successfully get weather')
          : toastShow('error', 'Weather not found');
        setWeather(result);
        setCity('');
      })
      .catch(() => {
        toastShow('error', 'Something wrong');
      });
  };

  // save History
  const saveHistory = (cityName: string) => {
    let data = {
      id: String(String(new Date())),
      search: cityName,
      date: String(new Date()),
    };
    dispatch(handleSearchHistory(data));
  };

  // render Weather Item
  const renderWeatherItem = (title: string, value: string) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{title}</Text>
        <Text>{value}</Text>
      </View>
    );
  };

  const renderWeather = () => {
    return (
      <View style={styles.weatherView}>
        {/* Render Header  */}
        <View style={styles.weatherViewInternel}>
          <Text style={styles.weatherInfoText}>Weather Info</Text>
        </View>

        <View style={{marginTop: 10, padding: 10}}>
          <Text style={styles.cityTextStyle}>City: {weather?.name}</Text>
          {renderWeatherItem('Temperature', weather?.main?.feels_like)}
          {renderWeatherItem('Feels Like', weather?.main?.temp)}
          {renderWeatherItem('Min Temperature', weather?.main?.temp_min)}
          {renderWeatherItem('Max Temperature', weather?.main?.temp_max)}
          {renderWeatherItem('Pressure', weather?.main?.pressure)}
        </View>
      </View>
    );
  };

  // display weather
  const displayWeather = () => {
    return (
      <View style={{marginBottom: 80}}>
        {weather.cod == 200 ? renderWeather() : renderErrorView()}
      </View>
    );
  };

  // render Error View
  const renderErrorView = () => {
    return (
      <View>
        <Image source={IC_NO_RECORD} style={{width: '100%', height: 300}} />
      </View>
    );
  };

  // render Search Histiry
  const renderSearchHistory = () => {
    const slicedData =
      searchHistory && searchHistory.historyArr.length > 5
        ? searchHistory.historyArr.slice(0, 5)
        : searchHistory.historyArr;
    return (
      <View style={{marginTop: 20}}>
        <Text style={styles.recentSearchText}>Recent Searches:</Text>
        {/* Render Search Hostory */}
        <View style={styles.recentListView}>
          {slicedData.map((item: any, index: number) => {
            return (
              <Pressable
                onPress={() => {
                  setCity(item.search);
                  searcbAPIPlaces(item.search);
                }}>
                <View style={styles.searchItemText}>
                  <Text>{item.search}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.centered}>
        {renderHeader()}
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <Image
            source={{uri: SWIPY_ICON_URL}}
            style={{width: '100%', height: 100, marginBottom: 20}}
            resizeMode={'contain'}
          />

          <CustomInput
            placeholder="Search City"
            leftIcon={city.trim().length > 0 ? IC_SEARCHED_COLORED : IC_SEARCH}
            onChangeText={(text: string) => {
              console.log('RText ' + text);
              setCity(text);
            }}
            inputValue={city}
            viewStyle={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: Colors.primaryColor,
            }}
            RightFirstIcon={city.trim().length > 0 && IC_CROSS}
            callBackRightFirstImage={() => {
              setCity('');
            }}
            RightIcon={
              city.trim().length > 0 ? IC_FORWARD_SELECT : IC_FORWARD_UNSELECT
            }
            callBackRightImage={() => {
              city.trim().length > 0 && searcbAPIPlaces(city);
            }}
          />

          {/* render Search History */}

          {searchHistory.historyArr.length > 0 && renderSearchHistory()}

          {/* render Result */}
          {weather && displayWeather()}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
