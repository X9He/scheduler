import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
import DaySchedule from './src/components/DaySchedule'

class App extends Component {
    componentWillMount () {
        console.log('root component mounted')
    }

    render () {
        return (
            <View>
            <Header userText={'User'} dayText={'Day'} weekText={'Week'} monText={'Month'}
                    searchText={'Search'} addText={'Add'}/>
            <DaySchedule/>
            </View>
        );
    }
}


AppRegistry.registerComponent('schedulerApp', () => App);
