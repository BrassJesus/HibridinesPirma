//import React,{useState} from 'react';
//import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import React, {Component} from 'react';

class App extends Component {
  
constructor() {
  super();
  this.state = {
    pressed1: false, 
    pressed2: false,
    pressed3: false,
    pressed4: false,
    color1:"#FFFFFF",
    color2:"#FFFFFF",
    color3:"#FFFFFF",
    color4:"#FFFFFF",
  }
}


updateColor1 = () =>{
  switch (this.state.pressed1){ 
    case true:
    this.setState({
      pressed1: false,
      color1:"#FFFFFF"
    })
    break;
    default:
      this.setState({
        pressed1: true,
        color1:"#FF0000"
      })
    break;
}
}

updateColor2 = () =>{
  switch (this.state.pressed2){ 
    case true:
    this.setState({
      pressed2: false,
      color2:"#FFFFFF"
    })
    break;
    default:
      this.setState({
        pressed2: true,
        color2:"#FF0000"
      })
    break;
}
}

updateColor3 = () =>{
  switch (this.state.pressed3){ 
    case true:
    this.setState({
      pressed3: false,
      color3:"#FFFFFF"
    })
    break;
    default:
      this.setState({
        pressed3: true,
        color3:"#FF0000"
      })
    break;
}
}
updateColor4 = () =>{
  switch (this.state.pressed4){ 
    case true:
    this.setState({
      pressed4: false,
      color4:"#FFFFFF"
    })
    break;
    default:
      this.setState({
        pressed4: true,
        color4:"#FF0000"
      })
    break;
}
}


  render(){
  return (
    <View style={styles.container}>
      <View style={styles.white}>
        <Button
          id = '1'
          style={styles.button}
          title="Button1"
          onPress={this.updateColor1}
        >
        </Button>
        <Button
          id = '2'
          style={styles.button}
          title="Button2"
          onPress={this.updateColor2}
        >
        </Button>
        <Button
          id = '3'
          style={styles.button}
          title="Button3"
          onPress={this.updateColor3}
        >
        </Button>
        <Button
          id = '4'
          style={styles.button}
          title="Button4"
          onPress={this.updateColor4}
        >
        </Button>
      </View>
      <View style={styles.black}>
        <Text style={[styles.textsquare, {backgroundColor: this.state.color1}]}>Box1</Text>
        <Text style={[styles.textsquare, {backgroundColor: this.state.color2}]}>Box2</Text>
        <Text style={[styles.textsquare, {backgroundColor: this.state.color3}]}>Box3</Text>
        <Text style={[styles.textsquare, {backgroundColor: this.state.color4}]}>Box4</Text>
      </View>
    </View>
  );
} 
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    //justifyContent: 'left',
  },
  white:{
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    //flexDirection: 'row',
  },
  black:{
    flex:1,
    backgroundColor: 'black',
    //flexDirection: 'row',
  },
  button:{
    padding: 10,
    marginTop: 40,
    marginLeft: 10,
    alignItems: 'center',
    
    backgroundColor: 'blue',
  },
  textsquare:{
    backgroundColor: 'white',
    fontSize: 25,
    margin: 25,
    padding: 50,
    marginLeft: 15,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
});

export default App;
