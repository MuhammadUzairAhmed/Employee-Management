import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

	 componentWillMount() {
	 	const config = 
	{
     apiKey: 'AIzaSyAe45P2xc8q09gpEV6oA6s4U9YjnaTf9vc',
    authDomain: 'manager-6cde7.firebaseapp.com',
    databaseURL: 'https://manager-6cde7.firebaseio.com',
    projectId: 'manager-6cde7',
    storageBucket: 'manager-6cde7.appspot.com',
    messagingSenderId: '408722531799'
                          };

                          
firebase.initializeApp(config);
	

	}
 render() {
   const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

return (
  <Provider store={store}>
    <Router />
  </Provider>
);
}
}

export default App;