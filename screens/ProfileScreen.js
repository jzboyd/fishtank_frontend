import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { ListItem, Avatar } from "react-native-elements";
import { auth, db } from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



const ProfileScreen = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
        navigation.replace('Login')
    })
 }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={styles.profileImage}>
          <Image 
          source={require('../images/FishLogo.png')}
          style={styles.image}
          resizeMode='center'></Image>
        </View>
      
        <View style={styles.add}>
        <MaterialIcons name="add-circle" size={40} color="black"></MaterialIcons>
        </View>
        <Text style={styles.name}>Joel Zisholtz</Text>
        <View></View>
  </View>

<View>
  <Title style={styles.title}></Title>
  
  
</View>

      <TouchableOpacity raised onPress={signOutUser} style={styles.signOutButton}>
      <Text style={styles.signOutButtonText}>Sign Out</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    left: 10,
    position: 'absolute',
    width: '100%',
    top: 15,

  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    overflow: 'hidden',
    marginLeft: 15,
  },
  name: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 30,
    left: 190,
    height: 50,
    bottom: 30,
  },
  add: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 10,
    left: 125,
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutButton: {
    backgroundColor: "#005493",
    padding: 10,
    borderRadius: 5,
    width: 150,
    position: 'absolute',
    alignItems: 'center',
    top: 630,
    alignSelf: 'center',
  },
  signOutButtonText: {
    fontSize: 20,
    color: '#fff',
  },
})