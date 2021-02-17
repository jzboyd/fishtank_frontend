import React from 'react';
import { Button, StyleSheet, Text, View, Image, Linking, SafeAreaView } from 'react-native';
import { Card, ListItem, Header} from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { startClock } from 'react-native-reanimated';
import Swiper from 'react-native-swiper';



const HomeScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.locationContainer}>
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
    
    <View style={{ marginTop: 70 }}>
    <Text 
        style={{ 
          alignSelf: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color: '#005493',
          marginBottom: 1,
          }}>My Fish Tank Needs...</Text>
          </View>

          

        
        <View style={styles.cardContainer}>
       
         <View style={styles.card}>
        
        <TouchableOpacity 
        onPress={() => navigation.navigate('Maintenance')}>
        <Text  style={{ 
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 3,
          color: 'black'}}>Maintenance</Text>
        <Image 
          source={require('../images/FishLogo.png')}
          resizeMode='cover'
          style={styles.cardImg} 
          />
  </TouchableOpacity>
  
  </View>

  <View style={styles.card}>
  
        <TouchableOpacity 
        onPress={() => navigation.navigate('Decoration')}>
        <Text style={{ 
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 3,
          color: 'black'}}>Decoration</Text>
        <Image 
          source={require('../images/FishLogo.png')}
          
          style={styles.cardImg} 
          />
  </TouchableOpacity>

  </View>


  <View style={styles.card}>
    
        <TouchableOpacity 
        onPress={() => navigation.navigate('Installation')}>
        <Text style={{ 
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 3,
          color: 'black'}}>Installation</Text>
        <Image 
          source={require('../images/FishLogo.png')}
          resizeMode='cover'
          style={styles.cardImg} 
          />
  </TouchableOpacity>

  </View>
        
  <View style={styles.card}>
    
    <TouchableOpacity 
    onPress={() => navigation.navigate('Service')}>
    <Text style={{ 
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 3,
      color: 'black'}}>Service</Text>
    <Image 
      source={require('../images/FishLogo.png')}
      resizeMode='cover'
      style={styles.cardImg} 
      />
</TouchableOpacity>

</View>

      </View>

     <View style={styles.sliderContainer}>
      <Swiper 
      height={200}
      autoplay
      autoplayTimeout={6}
      showsPagination={false}
      >
        <View style={styles.slide}>
        <TouchableOpacity onPress={() => { Linking.openURL('https://petsmart.com')}}>
          <Image 
          source={require('../images/petsmart.jpg')}
          resizeMode='cover'
          style={styles.sliderImage} 
          />
          </TouchableOpacity>
          </View>

          <View style={styles.slide}>
        <TouchableOpacity onPress={() => { Linking.openURL('https://petco.com')}}>
          <Image 
          source={require('../images/petco.jpg')}
          resizeMode='cover'
          style={styles.sliderImage} 
          />
          </TouchableOpacity>
          </View>

          <View style={styles.slide}>
        <TouchableOpacity onPress={() => { Linking.openURL('https://chewy.com')}}>
          <Image 
          source={require('../images/chewy.jpg')}
          resizeMode='cover'
          style={styles.sliderImage} 
          />
          </TouchableOpacity>
          </View>
          
      </Swiper>
     </View>

      </SafeAreaView>
    );
  }


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  locationContainer: {
    alignSelf: 'center',
    paddingTop: 10,
    width: '95%',
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    alignSelf: 'center',
    marginTop: 25,
  },
 
  card: {
    height: 200,
    width: 200,
    shadowColor: "#000",
shadowOffset: {
	width: 4,
	height: 4,
},
shadowOpacity: 0.4,
shadowRadius: 3,

elevation: 5,
  },
  cardImg: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  sliderContainer: {
    height: 200,
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,

  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    
  },

})
