import React, { Component } from 'react';
import { Text, View, TextInput, Image} from 'react-native';
import {Actions} from "react-native-router-flux";

class SignupPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nameTetx:'',
            email: '',
            password: '',
            confirmation: '',
            foucsPW:false
        };
    }


    render(){
        let email
        let password
        let name
        const { mainStyle } = styles;
        const goToLogin = () => {
            Actions.LoginPage();
        };
        return (
            <View style={mainStyle}>
                <Text style={{fontWeight: 'bold',fontSize: 45,color:'#474c3d', marginTop: 90}}>
                    Sign Up
                </Text>

                <Text style={{fontWeight: 'bold',fontSize: 20, marginTop:20, color:'#474c3d'}}>
                    Name:
                </Text>
                <TextInput
                    style={{height: 50, backgroundColor: '#e2edcb', marginTop: 5}}
                    placeholder=" Input your name ;)"
                    onChangeText={(name) => this.setState({name})} value={this.state.name}
                    editable={true} maxLength={40}
                />

                <Text style={{fontWeight: 'bold',fontSize: 20, marginTop:13, color:'#474c3d'}}>
                    Email:
                </Text>
                <TextInput
                    style={{height: 50, backgroundColor: '#e2edcb', marginTop: 5}}
                    placeholder=" Input your email ;)"
                    onChangeText={(email) => this.setState({email})} value={this.state.email}
                    editable={true} maxLength={40}
                />

                <Text style={{fontWeight: 'bold',fontSize: 20, marginTop:13, color:'#474c3d'}}>
                    Password:
                </Text>
                <Text style={{fontWeight: 'bold',fontSize: 12, marginTop:2, color:'#474c3d'}}>
                    Your password should be between 8-16 alphanumeric include at least 1 number & 1 capital letter.
                </Text>
                <TextInput
                    style={{height: 50, backgroundColor: '#e2edcb', marginTop: 5}}
                    secureTextEntry={true}
                    placeholder=" Set your password :) "
                    onChangeText={(password) => this.setState({password})} value={this.state.password}
                    editable={true} maxLength={16} minLength={8}
                />
                <Text style={{fontWeight: 'bold',fontSize: 20, marginTop:13, color:'#474c3d'}}>
                    Confirmation:
                </Text>
                <TextInput
                    style={{height: 50, backgroundColor: '#e2edcb', marginTop: 5}}
                    secureTextEntry={true}
                    placeholder=" Confirm your password ;)"
                    onChangeText={(confirmation) => this.setState({confirmation})} value={this.state.confirmation}
                    editable={true} maxLength={16} minLength={8}
                    onEndEditing={(confirmation) => this.setState({confirmation})} value={this.state.confirmation}
                />

                <Image
                    style={{width:35, height: 35, marginLeft: 155, marginTop:70}}
                    source={require('../img/go.png')}
                />
                <Text onPress={goToLogin} style={{fontWeight: 'bold',fontSize: 15, marginTop:50, marginLeft:93, color:'#474c3d'}}>
                   Already got a account?
                </Text>
            </View>
        );
    }
}

const styles = {
    mainStyle:{
        background: '#f0f4de',
        margin: 15
    }
}

export default SignupPage;
