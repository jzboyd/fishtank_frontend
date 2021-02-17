import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Card, ListItem, Header, Input} from 'react-native-elements';


import HomeScreen  from "./screens/HomeScreen";
import ScheduleScreen  from "./screens/ScheduleScreen";
import MessageScreen  from "./screens/MessageScreen";
import ProfileScreen  from "./screens/ProfileScreen";
import MaintenanceScreen from './screens/MaintenanceScreen';
import DecorationScreen from './screens/DecorationScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import InstallationScreen from './screens/InstallationScreen';
import ServiceScreen from './screens/ServiceScreen';







function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}



function LogoTitle() {
  return (
    <Image
      style={{ 
        width: 45, 
        height: 45,
        marginBottom: 12,
       }}
      source={require('./images/FishLogo.png')}
    />
  );
}




const HomeStack = createStackNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} 
      options={{ 
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <MaterialIcons style={{
            marginLeft: 10,
          }} 
          name="location-pin" size={35} color="#005493" />
        ), 
      }}
      />
      <HomeStack.Screen name="Maintenance" component={MaintenanceScreen} />
      <HomeStack.Screen name="Decoration" component={DecorationScreen} />
      <HomeStack.Screen name="Installation" component={InstallationScreen} />
      <HomeStack.Screen name="Service" component={ServiceScreen} />
    </HomeStack.Navigator>
  );
}

const ScheduleStack = createStackNavigator();

function ScheduleStackScreen() {
  return (
    <ScheduleStack.Navigator>
      <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
      <ScheduleStack.Screen name="Details" component={DetailsScreen} />
    </ScheduleStack.Navigator>
  );
}

const MessageStack = createStackNavigator();

function MessageStackScreen() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name="Message" component={MessageScreen} />
      <MessageStack.Screen name="Details" component={DetailsScreen} />
    </MessageStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Login" component={LoginScreen} />
    </ProfileStack.Navigator>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
 <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#005493",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="fishbowl" size={33} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Schedule"
        component={ScheduleStackScreen}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="calendar-month" size={33} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Message"
        component={MessageStackScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="message1" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="account-circle" size={33} color={color} />
          ),
        }}
      />
  
    </Tab.Navigator> 
  );
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }}/>
    </Stack.Navigator>
    
      {/* <MyTabs />   */}
    </NavigationContainer>
  );
}

