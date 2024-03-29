import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {DIMENSIONS} from '../../constants/constants';
import Loading from '../../components/loading';
import {iconsStyles} from '../../style/styles';
import debounce from 'lodash/debounce';
import {image185, notFound, searchMovies} from '../../api/moviedb';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = value => {
    if (value && value.length > 2) {
      setLoading(true);
      searchMovies({
        query: value,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      }).then(data => {
        setLoading(false);
        if (data && data.results) {
          setResults(data.results);
        }
      });
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  const handleTextDebounce = debounce(handleSearch, 400);

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 my-3 w-dvw flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className="w-10/12 pb-1 pl-6 text-base font-semocolumn text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="rounded-full p-3 m-1 bg-neutral-500">
          <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View>

      {/* results from the api */}
      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          className="space-y-3">
          <Text className="text-white font-semibold ml-1">
            Results: ({results.length})
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.navigate('Movie', item)}>
                  <View className="space-y-2 mb-4">
                    <Image
                      className="rounded-3xl"
                      source={{uri: image185(item?.poster_path) || notFound}}
                      style={{
                        width: DIMENSIONS.width * 0.44,
                        height: DIMENSIONS.height * 0.3,
                      }}
                    />
                    <Text className="text-neutral-300 ml-1">
                      {item.title.length > 22
                        ? item.title.slice(0, 22) + '...'
                        : item.title}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center">
          <Image
            style={iconsStyles.notFound}
            source={require('../../assets/movie-watch.png')}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
