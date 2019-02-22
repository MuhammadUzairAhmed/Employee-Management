/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text , View } from 'react-native';


class Header extends Component<{}> {
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>
          {this.props.headerText}
        </Text>
        </View>
    );
  }
}

const styles = {
  viewStyle: {
backgroundColor: 'white',
justifyContent: 'center',
alignItems: 'center',
paddingTop: 15,
height: 60,
shadowColor: '#000',
shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.7,
  elevation: 2,
  position: 'relative'
  },
  textStyle : {
    fontSize: 20,
  color: 'black'
  }
};


export { Header };