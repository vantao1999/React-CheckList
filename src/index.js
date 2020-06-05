import React, {Component} from 'react';
import {Provider} from 'react-redux';
import LoginForm from './Component/LoginForm';
import store from './store';

export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
