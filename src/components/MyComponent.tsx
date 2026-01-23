import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

const MyComponent = () => {
  return (
    <View>
      <Text style={{color: 'red',
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 200
          }}>
      Hello world</Text>
      <Text style={{fontSize: 25,
          color: 'blue',
          marginBottom: 15
          }}>Welcome to
      React Native</Text>
    <Button title="Click Me" onPress={() => Alert.alert('Button Clicked')}/>
    </View>
  )
}

export default MyComponent