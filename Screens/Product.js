import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function Book(props) {

    const [list, setList] = useState([
        { id: 1, name: 'Sapota(chiku)', price: '200 per, kg' },
        { id: 2, name: 'mulberry', price: '200 per, kg' },
        { id: 3, name: 'alahabadi guava', price: '200 per, kg' },
        { id: 4, name: 'apple', price: '200 per, kg' },
    ]);

    const [arr, setArr] = useState([])

    return (
        <View style={{ flex: 1 }}>

            {/* <View style={styles.header}>
                <Text style={styles.headerText}>Products</Text>
            </View> */}

            <View style={{ flex: 1, paddingBottom: '10%' }}>
                <Text style={styles.nameText}>Product List</Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={list}
                        style={styles.flatListStyle}
                        renderItem={({ item }) => (
                            <View style={styles.flatlistData}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 0.8 }}>
                                            <Text style={styles.leftText}>Product Name:</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.rightText}>{item.name}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 0.8 }}>
                                            <Text style={styles.leftText}>Price with KG:</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.rightText}>
                                                {item.price} 
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <Button
                    type="outline"
                    title="Display Product"
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonStyle}
                    titleStyle={{ color: 'grey', fontSize: 20 }}
                    onPress={() => navigation.navigate('Aval', { date: '', data: arr })}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        // flex:1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 12,
        paddingLeft: 20,
        paddingRight: 10,
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        // backgroundColor: 'white'
    },
    headerText: {
        fontSize: 25,
    },
    nameText: {
        width: '90%',
        alignSelf: 'center',
        padding: 5,
        paddingLeft: 0,
        fontSize: 23,
        fontWeight: '700',
    },
    flatlistData: {
        flex: 1,
        borderWidth: 1,
        padding: 8,
        marginTop: '3%',
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    flatListStyle: {
        borderTopWidth: 1,
        // alignItems:'center'
    },
    leftText: {
        fontSize: 18,
        fontWeight: '700',
    },
    rightText: {
        fontSize: 15,
    },
    button: {
        // marginTop: 30,
        borderWidth: 1.6,
        borderColor: 'black',
    },
    buttonStyle: {
        width: '90%',
        alignSelf: 'center',
    },
});