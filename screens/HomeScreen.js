import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Header} from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { startClock } from 'react-native-reanimated';



const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <StatusBar style="dark" />
        <View style={styles.container}>
        <GooglePlacesAutocomplete
        
      placeholder='Enter Location'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
    </View>
    
        <View style={{ alignItems: 'center' }}>
        <Text>Professional Fish Tank Services</Text>
        </View>

        
        <View style={{ flex: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center'}}>
         
        <TouchableOpacity  onPress={() => navigation.navigate('Maintenance')}>
        <Card containerStyle={{ padding: 40, borderRadius: 10 }}>  
        {/* <Image source={require('../images/maintenance.png')} /> */}
    <Card.Title>MAINTENANCE</Card.Title>
    <Card.Divider/>
  </Card>
  </TouchableOpacity>

 
 
  <TouchableOpacity onPress={() => navigation.navigate('Maintenance')}>
        <Card containerStyle={{ padding: 40, borderRadius: 10 }}>  
        {/* <Image source={require('../images/maintenance.png')} /> */}
    <Card.Title>INSTALLATION</Card.Title>
    <Card.Divider/>
  </Card>
  </TouchableOpacity>



  <TouchableOpacity onPress={() => navigation.navigate('Maintenance')}>
        <Card containerStyle={{ padding: 40, borderRadius: 10 }}>  
        {/* <Image source={require('../images/maintenance.png')} /> */}
    <Card.Title>DECORATE</Card.Title>
    <Card.Divider/>
  </Card>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Maintenance')}>
  <Card containerStyle={{ padding: 40, borderRadius: 10 }}>  
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
     
      </View>
    );
  }


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    width: 400,
  },

})
