import React, { Component } from 'react';
import { Text , View , TouchableOpacity , Linking } from 'react-native';


const Button = ({onPress, children}) => {
 


 return (
 	<TouchableOpacity style={styles.buttonStyle} onPress={onPress}  >
<Text style={styles.textStyle}> {children} </Text>
 	</TouchableOpacity>

 	);

}

const styles = {

	textStyle: {
		alignSelf: 'center',
		fontWeight: '600',
		fontSize: 16,
		color: '#007aff',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
flex: 1,
alignSelf: 'stretch',
backgroundColor: '#fff',
borderRadius: 5,
borderWidth: 1,
borderColor: '#007aff',
marginLeft: 5,
marginRight: 5

	}
};

export { Button };