import {StyleSheet, Platform} from 'react-native';
import {DIMENSIONS} from '../constants/constants';

export const iconsStyles = StyleSheet.create({
  image: {
    width: DIMENSIONS.width,
    height: DIMENSIONS.height * 0.55,
  },
  imageCont: {
    paddingTop: 10,
  },
  icons: {
    paddingVertical: Platform.OS === 'ios' ? -30 : 30,
    paddingHorizontal: 10,
  },
  shadow: {
    shadowColor: 'gray',
    shadowRadius: 40,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    elevation: 5,
  },
  notFound: {
    width: DIMENSIONS.width * 0.8,
    height: DIMENSIONS.height * 0.6,
    resizeMode: 'contain',
  },
});
