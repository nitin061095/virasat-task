import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../Screens/Home.js";

import Login from '../Screens/Login';
import Product from '../Screens/Product';
const Tab = createBottomTabNavigator();

export default function Bottom()  {

        return (
           
            <View style={{ flex: 1 }}>
                <Tab.Navigator
                    initialRouteName="Support"
                    tabBarOptions={{
                        style:styles.tabStyle
                    }}  
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            tabBarIcon:()=>null,
                            tabBarLabel:()=>(
                                <Text style={styles.lableStyle}>
                                    Home
                                </Text>
                            )
                        }}
                    />
                    <Tab.Screen 
                    name="Product" 
                    component={Product} 
                        options={{
                            tabBarIcon:()=>null,
                            tabBarLabel:()=>(
                                <Text style={styles.lableStyle}>
                                    Product
                                </Text>
                            )
                        }}
                    />
                    <Tab.Screen 
                    name="About" 
                    component={Login} 
                    options={{
                            tabBarIcon:()=>null,
                            tabBarLabel:()=>(
                                <Text style={styles.lableStyle}>
                                    About
                                </Text>
                            )
                        }}
                    />
                </Tab.Navigator>
            </View>
           
        );
}

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor:'green',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        // height:'6%'
    },
    lableStyle:{
        fontSize:25,
        marginBottom:'6%',
        fontWeight:'bold',
        color:'white'
    }
});