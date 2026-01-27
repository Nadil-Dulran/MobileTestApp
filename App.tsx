import React, {useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import CustomLable from './src/components/CustomLable';

function App() {

  console.log(' App component Rendered ');

  function click(x: number, y:number) {
      console.log("Additiom :" + (x+y));   // Print the passed value to the console
      console.log("x * y  :" + (x*y));
  }

  const [count, setCount] = useState(0);

  function changeCount(){
    setCount(count + 1);
  }

  // Normal variables - Var, Let, Const

  var x = 0; // Regular variable not a state variable(will not cause re-render)

  const [y, setY] = useState(0); // State variable (will cause re-render)

  function changeX(){
    x = x + 1;
    console.log(' X Value : ' + x);
  }

  function changeY(){
    setY(y + 1);
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

        <Button title='Increment X' onPress={changeX} />

        <Component1 style={{marginBottom: 20, marginTop: 20}}/>
        <Component2 style={{marginBottom: 20}}/>

        <Text style={{ fontSize: 20, color: 'blue', fontWeight: '700', marginTop: 20 }}>
          Y Value: {y}
        </Text>

        <Button title='Increment Y' onPress={changeY} />
        
 
        <Text style={{ fontSize: 20, color: 'red', fontWeight: '700', marginTop: 20 }}>
          Count Value: {count}
        </Text>
        <Button title='Change Count' onPress={changeCount}
         />

        
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

function Component1(props: { style: object }){

  console.log(' Component 1 Rendered ');
  return (
    <View style={props.style}>
      <Text>Component 1</Text>
    </View>
  );
}

function Component2(props: { style: object }){

  console.log(' Component 2 Rendered ');
  return (
    <View style={props.style}>
      <Text>Component 2</Text>
    </View>
  );
}

export default App;
