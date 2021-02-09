import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useLayoutEffect(() => {
      navigation.setOptions({
          headerBackTitle:'Back',
  });
}, [navigation])

    const signIn = () => {};

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar sytle="light" />
        <Image
          source={require("../images/FishLogo.png")}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.textContainer}>
            <Text style={styles.text}>FISH TANK</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Email"
            autoFocus
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            type="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View> 
        <Button raised 
        // containerStyle={styles.loginButton} 
        onPress={signIn} 
        title="Log In" />
        <Button raised onPress={() => navigation.navigate('Signup')} 
        // containerStyle={styles.signUpButton} 
        type="outline" 
        title="Sign Up" />
        <View style={{ height: 100 }} />
      </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    backgroundColor: "white",
  },
  textContainer: {
     padding: 15,
  },
  inputContainer: {
    width: 300,
    marginTop: 10,
  },
  // signUpButton: {
  //   width: 175,
  //   marginTop: 10,
  // },
  // loginButton: {
  //   width: 175,
  //   marginTop: 10,
  //   backgroundColor: "black"
  // },
});