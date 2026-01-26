import React from 'react';
import { Button, Text, View } from 'react-native';
import CustomLable from './src/components/CustomLable';

function App() {

  console.log(' Hello ');

  function click(x: number, y:number) {
      console.log("Additiom :" + (x+y));   // Print the passed value to the console
      console.log("x * y  :" + (x*y));
  }



  return (
      <View style={{ alignItems: 'center'}}>
        <CustomLable>Welcome !</CustomLable>
        <CustomText fsize={25} a={'Hello'} b={'World'}/>
        <Button title='Click me' onPress={() => {
          click(10,5);
        }} />
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
export default App;
