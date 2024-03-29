import {Image, ScrollView, TouchableOpacity, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/solid';
import {styles} from '../../theme';

// components
import Cast from '../../components/cast';
import MovieList from '../../components/movie-list';
import {DIMENSIONS} from '../../constants/constants';
import {iconsStyles} from '../../style/styles';
import Loading from '../../components/loading';
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  image500,
  notFound,
} from '../../api/moviedb';

const MovieDetail = () => {
  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [isFavourite, setFavourite] = useState(false);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setLoading(true);
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);

  const getMovieDetails = async id => {
    const data = await fetchMovieDetails(id);
    if (data) {
      setMovie(data);
    }
    setLoading(false);
  };

  const getMovieCredits = async id => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) {
      setCast(data.cast);
    }
  };
  const getSimilarMovies = async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setSimilarMovies(data.results);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      className="flex-1 bg-neutral-900">
      {/* Back button and movie poster */}
      <View className="w-full">
        <SafeAreaView
          style={iconsStyles.icons}
          className="absolute z-20 w-full flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.background}
            className="rounded-xl p-1">
            <ChevronLeftIcon size="28" stroke={2} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFavourite(!isFavourite)}
            className="rounded-xl p-1">
            <HeartIcon size="40" color={isFavourite ? 'red' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>
        {loading ? (
          <Loading />
        ) : (
          <View style={iconsStyles.imageCont}>
            <Image
              source={{uri: image500(movie?.poster_path) || notFound}}
              style={iconsStyles.image}
              className="rounded-3xl"
            />
          </View>
        )}
      </View>

      {/* movie details */}
      <View style={{marginTop: DIMENSIONS.height * 0.05}} className="space-y-3">
        {/* title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movie?.title}
        </Text>

        {/* status, release, runtime */}
        {movie?.id ? (
          <Text className="text-neutral-400 text-center text-base font-semibold">
            {movie?.status} | {movie?.release_date?.split('-')[0]} |{' '}
            {movie?.runtime} min
          </Text>
        ) : null}

        {/* genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          {movie?.genres?.map((genre, index) => {
            const showDot = index + 1 !== movie.genres.length;
            return (
              <Text
                key={index}
                className="text-neutral-400 text-center text-base font-semibold">
                {genre?.name} {showDot ? ' •' : null}
              </Text>
            );
          })}
        </View>

        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movie?.overview}
        </Text>
      </View>

      {/* cast */}
      {cast.length > 0 && <Cast cast={cast} navigation={navigation} />}

      {/* similar movies */}
      {similarMovies.length > 0 && (
        <MovieList
          title="Similar Movies"
          hideSeeAll={true}
          data={similarMovies}
        />
      )}
    </ScrollView>
  );
};

export default MovieDetail;
