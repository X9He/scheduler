import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'
import DaySchedule from './src/components/DaySchedule'
import LoginPage from './src/components/LoginPage'
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";

class App extends Component {
    componentWillMount () {
        console.log('root component mounted')
    }

    render () {
        return (
            <View>
                {/*<Header userText={'User'} dayText={'Day'} weekText={'Week'} monText={'Month'}*/}
                {/*    searchText={'Search'} addText={'Add'}/>*/}
                <LoginPage/>
            </View>
        );
    }
}


AppRegistry.registerComponent('schedulerApp', () => App);
