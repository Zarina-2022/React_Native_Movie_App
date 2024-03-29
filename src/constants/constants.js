import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const DIMENSIONS = {width, height};

/**
 * USAGE:
 *      <Text>Width: {DIMENSIONS.width}</Text>
        <Text>Height: {DIMENSIONS.height}</Text>
 */

export const apiKey = 'd7af819ee9d441bd275deff89888e054';

export const moviesData = [
  {
    id: 2,
    title: '',
    backgroundPoster: '',
    image: '',
    description: '',
    releaseDate: '',
    releaseYear: '',
    runTime: '',
  },
];

export const personData = {
  name: '',
  birthPlace: '',
  birthday: '',
  gender: '',
  knownFor: '',
  popularity: '',
  biography: '',
};
