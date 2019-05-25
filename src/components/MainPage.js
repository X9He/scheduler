import React, { Component } from 'react';
import {View} from "react-native";
import Header from "./Header";
import DaySchedule from "./DaySchedule";

class MainPage extends Component {
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

export default MainPage;
