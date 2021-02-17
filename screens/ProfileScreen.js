import React from 'react'
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { ListItem, Avatar, Icon } from "react-native-elements";
import { auth, db } from '../firebase';

const list =[
  {
      title: 'Account',
  },
  {
    title: 'Change Password',
  },
  {
    title: 'Payment',
  },
  {
    title: 'Promos',
  },
  {
    title: 'Notifications',
  },
  {

    title: 'Support',
  }
]



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
        <View>
          
        </View>
  </View>
  <View style={styles.listInfo}>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View> 

<View>
      <TouchableOpacity raised onPress={signOutUser} style={styles.signOutButton}>
      <Text style={styles.signOutButtonText}>Log Out</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
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
    alignSelf: 'center',
    marginBottom: 15,
    
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  add: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 50,
    left: 240,
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listInfo:  {
    marginTop: 200,

  },
  signOutButton: {
    backgroundColor: "#005493",
    padding: 10,
    borderRadius: 5,
    width: 150,
    position: 'absolute',
    alignItems: 'center',
    top: 160,
    alignSelf: 'center',
  },
  signOutButtonText: {
    fontSize: 20,
    color: '#fff',
  },
})