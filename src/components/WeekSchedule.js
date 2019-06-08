import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Header from "./Header";
import WeekSubheader from "./WeekSubheader"
import { connect } from 'react-redux';
import Event from "./Event";

class WeekSchedule extends Component {
    render() {
        const {WeekScheduleMainBody} = styles;
        return (
            <View stlye={WeekScheduleMainBody}>
                <Header userText={'User'} dayText={'Day'} weekText={'Week'} monText={'Month'}
                        searchText={'Search'} addText={'Add'}/>
                <WeekSubheader/>
                <ScrollView stlye={WeekScheduleMainBody}>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    WeekScheduleMainBody: {
        flex: 1,
        backgroundColor: 'white'
    }
};



export default (WeekSchedule);
