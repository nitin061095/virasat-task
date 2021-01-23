import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Home() {
        return (
            <View style={styles.container}>
           
                <Text style={{fontSize:30}}>
                    Task Completed by nitin shukla.
                </Text>
            </View>
        );
    }


const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        flex:1
    }
});