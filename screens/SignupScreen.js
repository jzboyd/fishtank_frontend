import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from 'react-native-elements';
import { auth } from '../firebase';

const Signup = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [postalCode, setpostalCode] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:'Back to Login',
    });
}, [navigation]);

    const Signup = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.update({
                displayName: name,
                photoURL:
                imageUrl ||
                "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
            })
        })
        .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 50 }}>
                Create An Account                
                </Text>
                <View style={styles.inputContainer}>
                    <Input 
                    placeholder="Name" 
                    autoFocus type='text' 
                    value={name}
                    onChangeText={(text) => setName(text)} />
                    <Input 
                    placeholder="E-mail" 
                    type="email"        
                    value={email}
                    onChangeText={(text) => setEmail(text)} />
                    <Input 
                    placeholder="Password" 
                    type="password"
                    secureTextEntry    
                    value={password}
                    onChangeText={(text) => setPassword(text)} />
                    <Input 
                    placeholder="Phone Number" 
                    type="text"
                    value={phoneNumber}
                    onChangeText={(text) => setphoneNumber(text)}
                    />
                    <Input 
                    placeholder="Postal Code" 
                    type="text"
                    value={postalCode}
                    onChangeText={(text) => setpostalCode(text)}
                    onSubmitEditing={Signup} />
                </View>

                <Button containerStyle={styles.button}
                raised 
                onPress={Signup} 
                title="Create Account" />
                <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },

    inputContainer: {
        width: 300,
        marginTop: 15,
    },
})