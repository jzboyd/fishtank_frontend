import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Header} from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Professional Fish Tank Services</Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('Maintenance')}>
        <Card style={styles}>  
        {/* <Image source={require('../images/maintenance.png')} /> */}
    <Card.Title>MAINTENANCE</Card.Title>
    <Card.Divider/>
  </Card>
  </TouchableOpacity>
 
  <TouchableOpacity onPress={() => navigation.navigate('Maintenance')}>
        <Card>  
        {/* <Image source={require('../images/maintenance.png')} /> */}
    <Card.Title>INSTALLATION</Card.Title>
    <Card.Divider/>
  </Card>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Maintenance')}>
        <Card>  
        {/* <Image source={require('../images/maintenance.png')} /> */}
    <Card.Title>DECORATE</Card.Title>
    <Card.Divider/>
  </Card>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Maintenance')}>
        <Card>  
        {/* <Image source={require('../images/maintenance.png')} /> */}
    <Card.Title>SERVICE</Card.Title>
    <Card.Divider/>
  </Card>
  </TouchableOpacity>

  
        <Button
          title="Go to Schedule"
          onPress={() => navigation.navigate('Schedule')}
        />
      </View>
    );
  }


export default HomeScreen

const styles = StyleSheet.create({})
