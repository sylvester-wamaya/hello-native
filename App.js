import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styleArray from './styleArray';

const PlaceholderImage = require("./assets/images/background-image.png")

export default function App() {
  return (
    <View style={styleArray.container}>
      <View style = {styleArray.imageContainer}>
        <Image source = {PlaceholderImage} style = {styleArray.image}/>
      </View>
      <Text style = {{color: '#fff'}}>Hello there!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


