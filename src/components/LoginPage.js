import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity} from 'react-native';

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
        return (
            <View>
                <View style={infoStyle}>
                    {/*<Image*/}
                    {/*    style={{width:200 , height: 80, marginLeft:90, marginBottom: 30}}*/}
                    {/*    source={require('../img/IconLogo.jpg')}*/}
                    {/*/>*/}
                    <Text style={{fontWeight: 'bold',fontSize: 45, marginLeft:15,color:'#474c3d'}}>
                        Log in
                    </Text>
                    <Text style={{fontWeight: 'bold',marginLeft:15, marginTop:15, color:'#474c3d'}}>
                        USERID:
                    </Text>
                    <TextInput
                        style={{height: 50, backgroundColor: '#e2edcb', margin: 15}}
                        placeholder=" e,g:xxxx@gamil.com"
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
                        editable={true} maxLength={16}
                    />
                    <Image
                        style={{width:30 , height: 30, marginLeft:170, marginTop: 40}}
                        source={require('../img/go.png')}
                    />
                </View>

                <View style={signupStyle}>
                    <Text style={{marginLeft:87, color:'#474c3d', marginTop:70}}>
                        Don't have a account?
                    </Text>
                    <Text style={{color: '#9ea886', marginLeft:3, marginTop:70}}
                          onPress={() => LinkingIOS.openURL('https://www.google.ca/webhp?hl=ja')}>
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
        top: 230,
        elevation:10,
        position: 'relative'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        top: 230,
        margin:150,
        position: 'relative'
    },
    signupStyle:{
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        elevation:10,
        marginTop:250,
        position: 'relative'
    }
}

export default LoginPage;