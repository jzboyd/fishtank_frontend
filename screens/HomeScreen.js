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
        <Card>  
        {/* <Image source={require('../images/maintenance.png')} /> */}
    <Card.Title>MAINTENANCE</Card.Title>
    <Card.Divider/>
  </Card>
  </TouchableOpacity>
 

  <Card>
    <Card.Title>INSTALLATION</Card.Title>
    <Card.Divider/>
  </Card>
  <Card>
    <Card.Title>DECORATION</Card.Title>
    <Card.Divider/>
  </Card>
  <Card>
    <Card.Title>SERVICE</Card.Title>
    <Card.Divider/>
  </Card>
        <Button
          title="Go to Schedule"
          onPress={() => navigation.navigate('Schedule')}
        />
      </View>
    );
  }


export default HomeScreen

const styles = StyleSheet.create({})
