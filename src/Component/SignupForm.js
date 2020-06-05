import React, {Component} from 'react';
import signup from '../Actions/login';
import {Text, View} from 'react-native';

export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phonenumber: '',
      password: '',
      address: '',
      email: '',
      avatar: '',
    };
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default SignupForm;
