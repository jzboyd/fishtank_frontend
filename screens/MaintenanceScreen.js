import React from 'react';
import { Button, StyleSheet, Text, View, Image, Linking, SafeAreaView } from 'react-native';
import { Card, ListItem, Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';




const list =[
    {
        title: 'Fish Tank Size',
    },
    {
      title: 'Fish Tank Type ',
    },
    {
      title: 'Water Type',
    },
    {
      title: 'Filter Type',
    },
    {
      title: 'Food Type',
    },
    {
      title: 'Replacement Parts',
    },
    {
      title: 'Cleaning',
    },
    {
      title: 'Water Test'
    }
]

    
const MaintenanceScreen = () => {
    return (
        <View>
            <Text style={{ 
          alignSelf: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color: '#005493',
          marginTop: 10,
          marginBottom: 10,
          }}>Select Maintenance Options</Text>
          
          
            <View>
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

</View>


        </View>
    )
}

export default MaintenanceScreen

const styles = StyleSheet.create({})
