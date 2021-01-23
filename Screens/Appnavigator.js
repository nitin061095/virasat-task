import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from '../Navigation/Drawer';
import Login from "./Login";
// import Book from "../Screens/MyConsultants/BookCon";
// import Filter from "../Screens/MyConsultants/Filter";
// import Aval from "../Screens/MyConsultants/AvailableSlots";

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerMode={null}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Drawer" component={Drawer} />
            {/* <Stack.Screen name="Book" component={Book} />
<Stack.Screen name="Filter" component={Filter} />
<Stack.Screen name="Aval" component={Aval} /> */}
        </Stack.Navigator>
    );
}