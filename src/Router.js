import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
const RouterComponent = () => {

return (

<Router style={{ paddingTop: 65 }}>


<Scene key="login" component={LoginForm} title="Please Login" initial  />



<Scene 
onRight={() => Actions.employeecreate()}
rightTitle="Add"
key="employeelist" component={EmployeeList} title="Employee List"  />

<Scene key="employeecreate" component={EmployeeCreate} title="Employee Create" />
<Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />

</Router>
	);

};

export default RouterComponent;