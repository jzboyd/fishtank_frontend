import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';





function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function ScheduleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Schedule screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function MessageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Message screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
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
      <ProfileStack.Screen name="Details" component={DetailsScreen} />
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
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="fishbowl" size={33} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="calendar-month" size={33} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="message1" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
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

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}














































// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused
//             ? <MaterialCommunityIcons name="fishbowl" size={33} color="#005493" />
//             : <MaterialCommunityIcons name="fishbowl" size={33} color="#888" />;

//           } else if (route.name === 'Schedule') {
//             return <MaterialCommunityIcons name="calendar-month" size={33} color="#005493" />;
//           } else if (route.name === 'Message') {
//             return <AntDesign name="message1" size={30} color="#005493" />;
//           } else if (route.name === 'Profile') {
//             return <MaterialIcons name="account-circle" size={33} color="#005493" />;
        
          
//         }},
//       })}
//       tabBarOptions={{
//         activeTintColor: "#005493",
//         inactiveTintColor: '#888',
//       }}
//     >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Schedule" component={ScheduleScreen} />
//         <Tab.Screen name="Message" component={MessageScreen} options={{ tabBarBadge: 3 }} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



















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