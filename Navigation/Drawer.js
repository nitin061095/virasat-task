


import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import BottomNavigator from '../Navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from '../Screens/Login';
import SecondPage from '../Screens/Login';
import ThirdPage from '../Screens/Login';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = (props) => {

  const toggleDrawer = () => {

    props.navigationProps.toggleDrawer();
  };

 

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>

        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="Virasat"
        component={BottomNavigator}
        options={{
          title: 'Virasat', //Set Header Title
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () =>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="Login"
        component={SecondPage}
        options={{
          title: 'Login', //Set Header Title

        }} />
      {/* <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}/> */}
    </Stack.Navigator>
  );
}

const  Drrawerscreen = () => {
  return (
    
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'Home' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Login' }}
          component={secondScreenStack} />
      </Drawer.Navigator>
   
  );
}

export default Drrawerscreen;

