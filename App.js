
import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import BottomNavigator from './Navigation/BottomNavigator';
import Appnavigator from './Screens/Appnavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './Screens/Login';
import SecondPage from './Screens/Login';
import ThirdPage from './Screens/Login';
console.disableYellowBox = true;



function App() {
  return (
    <NavigationContainer>
      <View style={{flex:1}}>
            <Appnavigator/> 
      </View>
    </NavigationContainer>
  );
}

export default App;


