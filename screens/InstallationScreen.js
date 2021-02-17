import React from 'react'
import { Button, StyleSheet, Text, View, Image, Linking, SafeAreaView } from 'react-native';
import { Card, ListItem, Header, Icon } from 'react-native-elements';

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
   
]

    
const InstallationScreen = () => {
    return (
        <View>
            <Text style={{ 
          alignSelf: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color: '#005493',
          marginTop: 10,
          marginBottom: 10,
          }}>Select Installation Options</Text>
          
          
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

export default InstallationScreen

const styles = StyleSheet.create({})
