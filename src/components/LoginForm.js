import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';

class LoginForm extends Component {
	

onEmailChange(text){
	//now call the actionCreator in actions index.js
this.props.emailChanged(text);
}
onPasswordChanged(text){
	//now call the actionCreator in actions index.js
	this.props.passwordChanged(text);	

}

onButtonPress() {
	const {email, password} = this.props;
	this.props.loginUser({email, password});
}
renderButton(){
	if(this.props.loading)
	{
		return <Spinner size="large" />;
	}
	return (
<Button onPress={this.onButtonPress.bind(this)} >LogIn</Button>
		);
}



	render(){
		return(
<Card>
<CardSection>
<Input
onChangeText={this.onEmailChange.bind(this)}
label="Email"
placeholder="email@gmail.com"
value={this.props.email}
 />

</CardSection>

<CardSection>
<Input
value={this.props.password}
onChangeText={this.onPasswordChanged.bind(this)}
secureTextEntry
label="Password"
placeholder="******"
 />
</CardSection>
<Text style={styles.errorAuthentication}>{this.props.error}</Text>

<CardSection>
{this.renderButton()}
</CardSection>

</Card>
			);
	}
}



 const mapStateToProps =  ({auth}) => {
const { email, password, error, loading } = auth;
return {
	email, password, error, loading };
	  };

const styles = {
	errorAuthentication: {
		fontSize: 20,
		color: 'red',
		alignSelf: 'center'
	}
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);



