import React, {useState} from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import CustomLable from './src/components/CustomLable';
import { StyleSheet } from 'react-native';

function App() {

  interface Student{       // 1.) Interface to define Student structure
    Name: string;
    Age: number;
    Course: string;
    study: () => void;
  }

  var Student_1 : Student = {         // 1.) Object to hold Student data
    Name: 'John Doe',
    Age: 21,
    Course: 'Computer Science',
    study: function() {
      console.log(this.Name + ' is studying ' + this.Course);
    }
  };

  function printData(std: Student) {        // 2.) Function to print Student data
    console.log(' Student Name: ' + std.Name);
    console.log(' Student Age: ' + std.Age);
    console.log(' Student Course: ' + std.Course);
  }

  class Calculator{
    number1: number = 0;
    number2: number = 0;

    constructor(n1: number, n2: number){
      this.number1 = n1;
      this.number2 = n2;
    }

    add(){
      return this.number1 + this.number2;
    }

    sub(){
      return this.number1 - this.number2;
    }

    multiply(){
      return this.number1 * this.number2;
    }
  }

  // var cal = {
  //   number1:0,
  //   number2:0,
  //   add: function() {
  //     return this.number1 + this.number2;
  //   },
  //   sub: function() {
  //     return this.number1 - this.number2;
  //   },
  //   multiply: function() {
  //     return this.number1 * this.number2;
  //   }
  // };

  function addNumber(){
    var cal = new Calculator(7,7);
    // cal.number1 = 10;
    // cal.number2 = 20;
    var result = cal.add();
    Alert.alert('Addition Result', 'The addition of ' + cal.number1 + ' and ' + cal.number2 + ' is: ' + result);
    
    var cal1 = new Calculator(10,20);
    // cal1.number1 = 10;
    // cal1.number2 = 20;
    var result1 = cal1.add();
    Alert.alert('Addition Result', 'The addition of ' + cal1.number1 + ' and ' + cal1.number2 + ' is: ' + result1);
  }

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

  //var textValue = '';

  const [textValue, setTextValue] = useState(''); // State variable to hold TextInput value

  function displayValue(){
    console.log(' Text Input Value : ' + textValue);
    Alert.alert('Input Value', textValue);
  }

  function onTextChange(v: string){
    setTextValue(v);

  }

  function makesStudentStudy(){
    Student_1.study();
  }

  

  //Used Object with attributes alignItems to center the content horizontally & justifyContent to center vertically
 const sty = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

  return (
      <View style={sty.container}>
        <CustomLable>Welcome !</CustomLable>
        <CustomText fsize={25} a={'Hello'} b={'World'}/>
        <TextInput style={{ height: 40, borderColor: 'black', color: 'blue', borderWidth: 2, width: 200, marginTop: 20, marginBottom: 20, borderRadius: 10, backgroundColor: 'gray', paddingLeft: 10 }}
        
        placeholder='User Name'
        placeholderTextColor={'white'}
        onChangeText={onTextChange}
        />

         {/* <TextInput style={{ height: 40, borderColor: 'black', color: 'blue', borderWidth: 2, width: 200, marginTop: 5, marginBottom: 20, borderRadius: 10, backgroundColor: 'gray', paddingLeft: 10 }}
        
        placeholder='Password'
        placeholderTextColor={'white'}
        
        secureTextEntry={true}
        /> */}

        <Button title='Submit' onPress={displayValue} />

        <Component1 style={{marginBottom: 20, marginTop: 20}}/>

        <Button title='Increment X' onPress={changeX} />

       
        <Component2 style={{marginBottom: 20, marginTop: 20}} {...Student_1}/>


        <Button title='Addition' onPress={addNumber} />

        <Text style={{ fontSize: 20, color: 'blue', fontWeight: '700', marginTop: 20 }}>
          Y Value: {y}
        </Text>

        <Button title='Increment Y' onPress={changeY} />
        
 
        <Text style={{ fontSize: 20, color: 'red', fontWeight: '700', marginTop: 20 }}>
          Count Value: {count}
        </Text>
        <Button title='Change Count' onPress={changeCount} />

        <Component3 style={{marginBottom: 20, marginTop: 20}}/>

        <Button title='Show Student Info' onPress={() => printData(Student_1)} />  

          <View style={{ backgroundColor: 'blue', flexDirection: 'row', height: 230, width: 370, alignSelf: 'center', marginTop: 20, borderRadius: 20 }}>
            <View style={{ backgroundColor: 'red',flex: 1, height: 150, width: 100, elevation:15, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'yellow', elevation:10, height: 100, width: 80, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderStyle: 'solid', borderBottomColor: 'black', borderWidth: 3  }}>
                <Text style={{ fontWeight: '800', textAlign: 'center'}}>Nested Views</Text>
              </View>
            </View>
          </View>
        
      </View>
  );    // 3.) Button to print Student data

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

function Component2(props: { style: object, Name: string, Age: number, Course: string, study: () => void }){

  console.log(' Component 2 Rendered ');
  return (
    <View style={props.style}>
      <Text>{props.Name} is {props.Age} years old and studying {props.Course}.</Text> 
      {/* Displaying object properties */}
    </View>
  );
}

function Component3(props: { style: object }){

  console.log(' Component 3 Rendered ');
  return (
    <View style={props.style}>
      <Text>Component 3</Text>
    </View>
  );
}

export default App;
