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
    
    <View style={{ marginTop: 60 }}>
    <Text 
        style={{ 
          alignSelf: 'center',
          fontSize: 25,
          fontWeight: 'bold',
          color: '#005493',
          marginBottom: 3,
          }}>My Fish Tank Needs..</Text>
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
          color: 'black'}}>MAINTENANCE</Text>
        <Image 
          source={require('../images/FishLogo.png')}
          resizeMode='cover'
          style={styles.cardImg} 
          />
  </TouchableOpacity>
  
  </View>

  <View style={styles.card}>
  
        <TouchableOpacity 
        onPress={() => navigation.navigate('Maintenance')}>
        <Text style={{ 
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 3,
          color: 'black'}}>DECORATION</Text>
        <Image 
          source={require('../images/FishLogo.png')}
          
          style={styles.cardImg} 
          />
  </TouchableOpacity>

  </View>


  <View style={styles.card}>
    
        <TouchableOpacity 
        onPress={() => navigation.navigate('Maintenance')}>
        <Text style={{ 
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 3,
          color: 'black'}}>INSTALLATION</Text>
        <Image 
          source={require('../images/FishLogo.png')}
          resizeMode='cover'
          style={styles.cardImg} 
          />
  </TouchableOpacity>

  </View>


 
        
  <View style={styles.card}>
    
    <TouchableOpacity 
    onPress={() => navigation.navigate('Maintenance')}>
    <Text style={{ 
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'}}>SERVICE</Text>
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
      autoplayTimeout={7}
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
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    alignSelf: 'center',
    marginTop: 30,
  },
 
  card: {
    height: 200,
    width: 200,
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
