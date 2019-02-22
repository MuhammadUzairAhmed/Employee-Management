import React, { Component } from 'react';
import { Text, View,  Modal, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


const Confirm = ({children, onAccept, onDecline, visible}) => {

const { cardSectionStyle, textStyle,containerStyle  } = styles;

return (
<Modal
animationType={'slide'}
onRequestClose={() => this.closeModal()}
transparent
visible={visible}
>
<View style={containerStyle}>
<CardSection style={cardSectionStyle}>
<Text style={textStyle}>{children}</Text>
</CardSection>
<CardSection>
<Button onPress={onAccept}>Yes</Button>
<Button onPress={onDecline}>No</Button>
</CardSection>
</View>
</Modal>

	);
};

const styles = {

cardSectionStyle: {
	justifyContent: 'center',

},
textStyle: {
flex: 1,
fontSize:18,
textAlign: 'center',
lineHeight :40 	
},
containerStyle: {
backgroundColor: 'rgba(0,0,0,0.75)',
position: 'relative',
justifyContent: 'center',
flex: 1
}


};

export { Confirm };
