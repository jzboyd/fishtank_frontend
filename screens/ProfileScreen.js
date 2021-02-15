import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { ListItem, Avatar } from "react-native-elements";
import { auth, db } from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ProfileScreen = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
        navigation.replace('Login')
    })
 }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignSelf: 'center'}}>
        <View style={styles.profileImage}>
          <Image 
          source={require('../images/FishLogo.png')}
          style={styles.image}
          resizeMode='center'></Image>
        
     
      

     </View>
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
  signOutButton: {
    backgroundColor: "#005493",
    padding: 20,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  signOutButtonText: {
    fontSize: 20,
    color: '#fff',
  },
})