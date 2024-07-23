import {Text, View} from 'react-native';
import { useMovie } from '../../hooks/useMovie';

export const HomeScreen = () => {
  const {nowPlaying, popular} = useMovie();
  console.log(nowPlaying);
  return (
    <View>
      <Text style={{color: 'black'}}>Hola les saluda yo desde una app movil</Text>
    </View>
  );
};
