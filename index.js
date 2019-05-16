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
            <Header headerText={'schedulerApp'}/>
            <DaySchedule/>
            </View>
        );
    }
}


AppRegistry.registerComponent('schedulerApp', () => App);
