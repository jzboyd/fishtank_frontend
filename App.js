import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function ScheduleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Schedule!</Text>
    </View>
  );
}

function MessageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages!</Text>
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            return <MaterialCommunityIcons name="fishbowl" size={33} color="#005493" />;
          } else if (route.name === 'Schedule') {
            return <MaterialCommunityIcons name="calendar-month" size={33} color="#005493" />;
          } else if (route.name === 'Message') {
            return <AntDesign name="message1" size={30} color="#005493" />;
          } else if (route.name === 'Profile') {
            return <MaterialIcons name="account-circle" size={33} color="#005493" />;
        
          
        }},
      })}
      tabBarOptions={{
        activeTintColor: "#005493",
        inactiveTintColor: '#888',
      }}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Message" component={MessageScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



























// import 'react-native-gesture-handler';

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import Login from './screens/Login';
// import { createStackNavigator } from '@react-navigation/stack';
// import Signup from './screens/Signup';
// import Home from './screens/Home';

// const Stack = createStackNavigator();

// const globalScreenOptions = {
//   headerStyle: { backgroundColor: '#005493'},
//   headerTitleStyle: { color: 'white'},
//   headerTintColor: 'white', //icon color
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={globalScreenOptions}>
//       {/* <Stack.Screen options={{ title: "Log In"}} name='Login' component={Login} />
//       <Stack.Screen options={{ title: "Sign Up", }} name='Signup' component={Signup} /> */}
//       <Stack.Screen options={{ title: "FISH TANK", }} name='Home' component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });