import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import CustomLable from './src/components/CustomLable';

function App() {

  console.log(' App component Rendered ');

  function click(x: number, y:number) {
      console.log("Additiom :" + (x+y));   // Print the passed value to the console
      console.log("x * y  :" + (x*y));
  }



  return (
      <View style={{ alignItems: 'center'}}>
        <CustomLable>Welcome !</CustomLable>
        <CustomText fsize={25} a={'Hello'} b={'World'}/>
        <TextInput style={{ height: 40, borderColor: 'black', color: 'blue', borderWidth: 2, width: 200, marginTop: 20, marginBottom: 20, borderRadius: 10, backgroundColor: 'gray', paddingLeft: 10 }}
        
        placeholder='User Name'
        placeholderTextColor={'white'}/>

         <TextInput style={{ height: 40, borderColor: 'black', color: 'blue', borderWidth: 2, width: 200, marginTop: 5, marginBottom: 20, borderRadius: 10, backgroundColor: 'gray', paddingLeft: 10 }}
        
        placeholder='Password'
        placeholderTextColor={'white'}
        
        secureTextEntry={true}
        />

        <Button title='Click me' onPress={() => {
          click(10,5);
        }} />

        <Component1/>
        <Component2/>
      </View>
  );

 type CustomTextProps = {
    fsize: number;
    a: string;
    b: string;
  }; 

function CustomText(props: CustomTextProps) {
  return (
    <Text style={{ fontSize: props.fsize, color: 'green', fontWeight: '600' }}>
      {props.a} {props.b}
    </Text>
  );
}

}

function Component1(){

  console.log(' Component 1 Rendered ');
  return (
    <View>
      <Text>Component 1</Text>
    </View>
  );
}

function Component2(){

  console.log(' Component 2 Rendered ');
  return (
    <View>
      <Text>Component 2</Text>
    </View>
  );
}

export default App;
