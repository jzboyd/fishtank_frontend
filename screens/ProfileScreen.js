import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
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
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15 }}>
          <Avatar>
          <MaterialIcons name="person-add" size={24} color="black" />
          </Avatar>
        </View>
      </View>
      <Text>Profile screen</Text>

      <TouchableOpacity raised onPress={signOutUser} style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
  
      {/* <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      /> */}
    </SafeAreaView>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
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