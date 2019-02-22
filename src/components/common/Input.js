import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';


const Input = ({label, onChangeText, value, placeholder, secureTextEntry}) => {

return(
<View >
<Text style={{paddingLeft:2, fontSize:18,color:'#000'}}>{label}</Text>
<TextInput 
secureTextEntry={secureTextEntry} 
placeholder={placeholder}
onChangeText={onChangeText}

  style={{height: 40,width:340,paddingLeft:2, fontSize:18}}

 />

</View>
	);

};


const syles = {

inputStyle: {
	color: '#000',
	paddingRight: 5,
	paddingLeft: 5,
	fontSize: 18,
	lineHeight: 23,
	flex: 2
},
labelStyle: {
fontSize: 18,
paddingLeft: 20,
flex: 1
},
containerStyle: {
	flex: 1,
	height: 40,
	alignItems: 'center',
	flexDirection: 'row'
}

};


export { Input };

