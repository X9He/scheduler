import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import MainPage from "./src/components/MainPage";


class App extends Component {
    componentWillMount () {
        console.log('root component mounted')
    }

    render () {
        return (
            <View>
                <MainPage/>
            </View>
        );
    }
}

AppRegistry.registerComponent('schedulerApp', () => App);
