import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
	onButtonPress(){
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}
	render(){
		return(
<Card>
<CardSection>
<Input label="Name" placeholder="jane" value={this.props.name}
onChangeText={ value => this.props.employeeUpdate({prop: 'name', value: value })}
 />

</CardSection>

<CardSection>
<Input 
onChangeText={ value => this.props.employeeUpdate({prop: 'phone', value: value })}
label="Phone Number" placeholder="555-555-555" value={this.props.phone} />
</CardSection>

<CardSection >
<Picker style={{ flex: 1 }} 
selectedValue={this.props.shift}
onValueChange={value => this.props.employeeUpdate({prop: 'shift', value: value })}
>
<Picker.Item label="Monday" value="Monday" />
<Picker.Item label="Tuesday" value="Tuesday" />
<Picker.Item label="Wednesday" value="Wednesday" />
<Picker.Item label="Thursday" value="Thursday" />
<Picker.Item label="Friday" value="Friday" />
<Picker.Item label="Saturday" value="Saturday" />
<Picker.Item label="Sunday" value="Sunday" />

</Picker>
</CardSection>

<CardSection>
<Button onPress={this.onButtonPress.bind(this)}>Create</Button>
</CardSection>
</Card>			);
	}
}

const mapStateToProps = (state) => {
const { name, phone, shift} = state.employeeForm;
return { name, phone, shift};

};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);