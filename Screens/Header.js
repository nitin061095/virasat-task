import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Header,Icon } from 'react-native-elements';
// import Icon from "react-native-elements";
import { useIsDrawerOpen } from '@react-navigation/drawer';





export default function Headerss({navigation}){
        return (
            <View>
                <Header
                    placement="left"
                    backgroundColor='transparent'
                    barStyle='dark-content'
                    containerStyle={styles.headerStyle}
                    centerContainerStyle={{marginLeft:'3%'}}
                    leftComponent={

                        <Icon
                            name='menu'
                            type='material-icons'
                            // color='black'
                            size={27}
                            containerStyle={{marginTop:'16%'}}
                            onPress={()=>{navigation.openDrawer();}}
                        />

                    }
                    centerComponent={
                        <Text style={styles.headerText}>
                            Virasat task
                        </Text>
                    }
                
                />
            </View>
        );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontWeight:'700'
    },
    headerStyle:{
borderBottomWidth:1,
borderBottomColor:'grey'
    }
});