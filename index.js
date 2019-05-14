import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
import DaySchedule from './src/components/DaySchedule'

const App = () => {
    return (
        <View>
            <Header headerText={'schedulerApp'}/>
            <DaySchedule/>
        </View>
    )
};




AppRegistry.registerComponent('schedulerApp', () => App);
