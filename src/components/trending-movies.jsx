import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {DIMENSIONS} from '../constants/constants';
import {image500} from '../api/moviedb';

const TrendingMovies = ({data}) => {
  const navigation = useNavigation();

  const handleOnPress = item => {
    navigation.navigate('Movie', item);
  };

  return (
    <View className="mb-8">
      <Text>TrendingMovies</Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard item={item} handleOnPress={() => handleOnPress(item)} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={DIMENSIONS.width}
        itemWidth={DIMENSIONS.width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};

const MovieCard = ({item, handleOnPress}) => {
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <Image
        source={{uri: image500(item.poster_path)}}
        style={{
          width: DIMENSIONS.width * 0.6,
          height: DIMENSIONS.height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovies;
