import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Header from "../Header";
import { connect } from 'react-redux';
import Event from "../Event";

class MonthSchedule extends Component {
    render() {
        const {MonthScheduleMainBody} = styles;
        return (
            <View stlye={MonthScheduleMainBody}>
                <Header userText={'User'} dayText={'Day'} weekText={'Week'} monText={'Month'}
                        searchText={'Search'} addText={'Add'}/>
                <ScrollView stlye={MonthScheduleMainBody}>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    MonthScheduleMainBody: {
        backgroundColor: 'white'
    }
};



export default (MonthSchedule);
