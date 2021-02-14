import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SplashScreen = () => {
    return (
        <View>
            <Image
          source={require("../images/FishLogo.png")}
          style={{ width: 200, height: 200 }}
        />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})
