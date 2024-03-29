import {Text, View} from 'react-native';
import React from 'react';
import {DIMENSIONS} from '../constants/constants';
import * as Progress from 'react-native-progress';
import {theme} from '../theme';

const Loading = () => {
  return (
    <View
      style={{width: DIMENSIONS.width, height: DIMENSIONS.height}}
      className="absolute justify-center items-center">
      <Progress.CircleSnail
        thickness={12}
        size={160}
        color={theme.background}
      />
    </View>
  );
};

export default Loading;
