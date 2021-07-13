import React, {Component} from 'react';
import {Button, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import Auth0 from 'react-native-auth0';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      code: '',
      codeRequestSent: false,
      LoginIn: false,
      isLoggedIn: false,
      accessToken: '',
      idToken: '',
    };

    this.loginUser = this.loginUser.bind(this);
    this.getLoginCode = this.getLoginCode.bind(this);
  }
  componentDidMount() {
    this.auth0 = new Auth0({
      domain: 'dev-5ondjyoc.us.auth0.com',
      clientId: 'IpMqSZgmtxMjlp65KgyAS3DNv9wuXzPh',
    });
  }

  /* Functions */

  getLoginCode() {
    this.setState({LoginIn: true});

    this.auth0.auth
      .passwordlessWithSMS({
        phoneNumber: this.state.phone,
      })
      .then(() => {
        this.setState({codeRequestSent: true});
      })
      .catch(console.error);
  }

  loginUser() {
    this.auth0.auth
      .loginWithSMS({
        phoneNumber: this.state.phone,
        code: this.state.code,
      })
      .then(response => {
        console.log(response);
        this.setState({
          accessToken: response.accessToken,
          idToken: response.idToken,
          isLoggedIn: true,
        });
      })
      .catch(console.error);
  }

/*   logOut(){
      alert('Logout')
      this.auth0.auth.({
        returnTo:'https://google.com.co',
        clientId:'IpMqSZgmtxMjlp65KgyAS3DNv9wuXzPh'
      })
  } */

  render() {
    const {codeRequestSent, LoginIn, code, isLoggedIn, accessToken, idToken} =
      this.state;

    return (
      <View>
        {!codeRequestSent ? (
          <>
            <TextInput
              placeholder="Enter Phone"
              onChangeText={text => this.setState({phone: text})}
              
              
            />
            <Button
              title={LoginIn ? 'Processing...' : 'Get Code'}
              onPress={this.getLoginCode}
            />
          </>
        ) : (
          <>
            <TextInput
              placeholder="Enter Code"
              value={code}
              onChangeText={text => this.setState({code: text})}
              keyboardType="numeric"
            />
            <Button title="Login" onPress={this.loginUser} />
            <View style={styles.modalContainer}> 
              <Modal transparent={false} visible={isLoggedIn} >
                <View>
                  <View>
                    <Text> Login Successful 👍🏼🎉</Text>
                    <Text> Here are your details:</Text>
                    <Text> Access Token: {' ' + accessToken}</Text>
                    <Text>
                      Id Token:
                      {' ' + idToken.length > 25
                        ? `${idToken.substring(0, 25)}...`
                        : idToken}
                    </Text>
                    <Button title="Logout" onPress={this.logOut} />
                  </View>
                </View>
              </Modal>
            </View>
          </>
        )}
      </View>
    );
  }
}


const styles = StyleSheet.create({
    modalContainer:{
        flex: 1, 
        height: 900,
        backgroundColor:'white'
    }
})

export default Auth;
