import React, { useRef, useState } from 'react';
import { View, StyleSheet, TextInput,Text } from 'react-native';
import { Button } from 'react-native-elements';
import fire from './Firebase'

export default function Home({ navigation }) {
    const secondTextInput = useRef();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const Login = (e) => {
        // e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log(u, 'iiiiiiiiiiiiiiii')
                alert("You are Logged in")
                navigation.navigate('Drawer')
            })
            .catch((error) => {
                // console.log(error.emailVerified,'eeeeeeeeeeeeee')
                // console.log(error,'ffffffffff')
                alert("Invalid Credentials")

            })
    }
    return (
        
            
        <View style={styles.contianer}>
            <Text style={styles.text}> Username</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="email-address"
                onChangeText={(val) => setEmail(val)}
                autoCompleteType='email'
                onSubmitEditing={() => {
                    secondTextInput.current.focus();
                }}
                blurOnSubmit={false}
            />
             <Text style={styles.text1}> Password</Text>
            <TextInput
                style={[styles.textInput, { marginTop: 35 }]}
                // keyboardType="visible-password"
                secureTextEntry={true}
                onChangeText={(val) => setPassword(val)}
                ref={secondTextInput}
            />
            <Button
                buttonStyle={styles.button}
                containerStyle={{ width: '100%', marginTop: '10%' }}
                titleStyle={{ color: 'grey', fontSize: 22 }}
                title="Log In"
                type="outline"
                 onPress={() => Login()}
            // onPress={()=>navigation.navigate('Drawer')}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textInput: {
        borderWidth: 1,
        width: '100%',
        padding: 15,
        fontSize: 22,
        marginTop:"5%"
    },
    button: {
        // marginTop: 30,
        borderWidth: 2,
        borderColor: 'black',
    },
    text: {
             fontSize:20,
             
    },
    text1: {
        fontSize:20,
        paddingTop:"7%"
},
});
