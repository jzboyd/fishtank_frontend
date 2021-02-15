import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
// import SignupScreen from './screens/SignupScreen';
import { auth } from '../firebase';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser) {
          navigation.replace("Home");
        }
      });

      return unsubscribe;
    }, []);

    

  

    const signIn = () => {
      auth.signInWithEmailAndPassword(email, password).catch(error => alert(error))
    };

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="light" />
        <Image
          source={require("../images/FishLogo.png")}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.textContainer}>
        <Text style={{color: '#888', fontSize: 28}}>
          FISH TANK
        </Text>
        </View>
        <View style={styles.inputContainer}>
        
          <Input
            placeholder="Email" 
            leftIcon={ <MaterialIcons name="email" size={24} color="#005493"/> }
            autoFocus
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            leftIcon={ <MaterialIcons name="lock" size={24} color="#005493" /> }
            secureTextEntry
            type="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={signIn}
          />
        </View> 
        <TouchableOpacity raised onPress={signIn} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity raised onPress={() => navigation.navigate('Signup')} style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity> 
        <View style={{ height: 100 }} />
      </KeyboardAvoidingView>
    );
};

export default LoginScreen;

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
  loginButton: {
    backgroundColor: "#005493",
    padding: 20,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  signupButton: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderColor: "#005493",
    padding: 20,
    borderRadius: 5,
    borderWidth: 3,
    width: 200,
    alignItems: "center",
  },
  signupButtonText: {
    fontSize: 20,
    color: "#005493",
  },

 
});