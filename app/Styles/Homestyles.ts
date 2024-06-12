import { StyleSheet } from "react-native";
import Colors from "../libs/Colors";

export const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: Colors.colorGray,
  },
  weatherView: {
    flexDirection: 'column',
    marginTop: 30,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 10,
  },
  weatherViewInternel: {
    backgroundColor: Colors.primaryColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  weatherInfoText: {
    textAlign: 'center',
    color: Colors.whiteColor,
    fontSize: 19,
    fontWeight: 'bold',
  },
  cityTextStyle: {
    color: Colors.primaryColor,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  recentSearchText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentListView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  searchItemText: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    margin: 5,
  },
});