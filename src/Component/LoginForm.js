/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  TextInput,
  Image,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
} from 'react-native';
import {login} from '../Actions/login';
import logo from '../images/logo.png';
// import Icon from 'react-native-vector-icons/MaterialIcons'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: '',
      password: '',
      SlideInLeft: new Animated.Value(0),
      slideUpValue: new Animated.Value(0),
      fadeValue: new Animated.Value(0),
    };
    Animated.timing(this.state.SlideInLeft, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.slideUpValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  userLogin(e) {
    this.props.onLogin(this.state.username, this.state.password);
    e.preventDefault();
  }

  handleLogin = () => {
    alert('Login successFul');
  };

  render() {
    // let alt = this.state.route === 'Login' ? 'SignUp' : 'Login';
    let {slideUpValue, fadeValue, SlideInLeft} = this.state;
    return (
      <Animated.View
        // style={styles.container}
        style={{
          transform: [
            {
              translateX: SlideInLeft.interpolate({
                inputRange: [0, 1],
                outputRange: [-600, 0],
              }),
            },
          ],
          flex: 1,
          backgroundColor: '#57bf57',
        }}>
        <Image style={styles.logoImage} source={logo} />
        <View style={styles.textView}>
          <Text style={styles.textLogin}>Login</Text>
          <Text style={styles.textSignup}>Signup</Text>
        </View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: fadeValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-600, 0],
                }),
              },
            ],
            marginHorizontal: 20,
            marginVertical: 20,
            paddingHorizontal: 30,
            paddingVertical: 20,
            shadowOffset: {width: 3, height: 3},
            shadowColor: 'black',
            backgroundColor: 'white',
            shadowOpacity: 0.2,
            elevation: 3,
          }}>
          <TextInput
            style={styles.inputPhone}
            keyboardType="phone-pad"
            placeholder="Phone number"
            value={this.state.phonenumber}
            onChangeText={text => this.setState({phonenumber: text})}
          />
          <TextInput
            style={styles.inputPhone}
            placeholder="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
          />
        </Animated.View>
        <TouchableWithoutFeedback>
          <Text style={styles.textForgotpass}>Forgot password?</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.handleLogin}>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: slideUpValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [600, 0],
                  }),
                },
              ],
              backgroundColor: '#57bf57',
              fontSize: 25,
              marginHorizontal: 80,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              paddingVertical: 8,
              borderRadius: 50,
            }}>
            <Text style={styles.buttonLogin}>Login</Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <View style={styles.buttonBackground} />
      </Animated.View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  // return: {
  //   isLoggedIn: state.auth.isLoggedIn,
  // },
  login: state.login,
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => {
      dispatch(login(username, password));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

const styles = StyleSheet.create({
  logoImage: {
    alignSelf: 'center',
    marginTop: 40,
    resizeMode: 'contain',
    height: 200,
    borderRadius: 30,
  },
  textView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
  },
  textSignup: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    opacity: 0.5,
  },
  inputPhone: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 15,
    borderWidth: 0.3,
    opacity: 0.5,
    borderRadius: 30,
    color: 'black',
    fontSize: 16,
  },
  buttonLogin: {
    backgroundColor: '#57bf57',
    fontSize: 25,
    marginHorizontal: 80,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 8,
    borderRadius: 50,
  },
  textForgotpass: {
    fontSize: 18,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 100,
    textDecorationLine: 'underline',
    opacity: 0.6,
  },
  buttonBackground: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: -300,
    borderTopStartRadius: 300,
    position: 'relative',
    zIndex: -1,
  },
});
