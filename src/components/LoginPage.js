import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import SignupPage from './SignupPage';
import {Actions} from "react-native-router-flux";

class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loginText: "Log in",
            passwordText: '',
            endText : '',
            email: '' };
    }
    render(){
        let userID
        let password
        const { infoStyle, signupStyle } = styles;
        const goToSignup = () => {
            Actions.SignupPage();
        };
        return (
            <View>
                <View style={infoStyle}>
                    <Image
                        style={{width:100 , height: 100, marginLeft:140, marginBottom: 40}}
                        source={require('../img/icon.png')}
                    />
                    <Text style={{fontWeight: 'bold',fontSize: 45, marginLeft:15,color:'#474c3d'}}>
                        Log in
                    </Text>
                    <Text style={{fontWeight: 'bold',marginLeft:15, marginTop:15, color:'#474c3d'}}>
                        USERID:
                    </Text>
                    <TextInput
                        style={{height: 50, backgroundColor: '#e2edcb', margin: 15}}
                        placeholder=" e,g: xxxx@gamil.com"
                        onChangeText={(email) => this.setState({email})} value={this.state.email}
                        editable={true} maxLength={40}
                    />
                    <Text style={{fontWeight: 'bold',marginLeft:15, color:'#474c3d'}}>
                        PASSWORD:
                    </Text>

                    <TextInput
                        style={{height: 50, backgroundColor: '#e2edcb', margin:15}}
                        secureTextEntry={true}
                        placeholder=" Input your password :)"
                        onChangeText={(passwordText) => this.setState({passwordText})}
                        editable={true} maxLength={16} minLength={8}
                    />
                    <Image
                        style={{width:35 , height: 35, marginLeft:170, marginTop: 40}}
                        source={require('../img/go.png')}
                    />
                </View>

                <View style={signupStyle}>
                    <Text style={{marginLeft:87, color:'#474c3d', marginTop:90}}>
                        Don't have a account?
                    </Text>
                    <Text style={{color: '#9ea886', marginLeft:3, marginTop:90}}
                          onPress={goToSignup}>
                        Sign up:)
                    </Text>
                </View>
            </View>

        );
    }
}

const styles = {
    infoStyle:{
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        top: 145,
        elevation:10,
        position: 'relative'
    },
    signupStyle:{
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        elevation:10,
        marginTop:150,
        position: 'relative'
    }
}

export default LoginPage;
