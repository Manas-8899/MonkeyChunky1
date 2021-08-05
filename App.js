import * as React from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'


export default class App extends React.Component {
constructor() {
  super()
  this.state = {text : "",disText : ""} 
  
}
  render() {
    return (
      <View style={styles.container}>
     <Header

     backgroundColor = {'blue'}
     centerComponent = {
       {text : 'Monkey Chunky',
       style :{color : 'black',
       fontSize :20}

       }
       }
     >
     </Header>




<TextInput style = {styles.inputbox}
onChangeText = {(text)=>{
  this.setState({text:text})
}}
value = {this.state.text}>

</TextInput>

<TouchableOpacity style = {styles.goButton}

onPress = {()=>{this.setState({disText : this.state.text})}}>
<Text>Go</Text>

</TouchableOpacity>
<Text>{this.state.disText}</Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
  
  },
  inputbox: {
marginTop : 200,
width : '40%',
height : 40,
alignSelf : 'center',
textAlign : 'center',
borderWidth : 2
  },

  goButton: {

width : '40%',
height : 30,
alignSelf : "center",
marginTop : 30,






  }
});
