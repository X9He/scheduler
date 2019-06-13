import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Header from "../Header";
import SwipeableHeader from './SwipeableHeader';
import DaySchedule from './DaySchedule';
import {connect} from "react-redux";

class DayScheduleContainer extends Component {
    currentDay = null;

    componentWillMount(): void {
        if(!this.currentDay){
            this.currentDay = this.props.session.cur_date.toJSON()
        }
    }


    render() {
        const { dayScheduleMainBody } = styles;

        return (
            <View style={dayScheduleMainBody}>
                <Header userText={'User'} dayText={'Day'} weekText={'Week'} monText={'Month'}
                        searchText={'Search'} addText={'Add'}/>
                <SwipeableHeader/>
                <ScrollView style={dayScheduleMainBody}>
                    <DaySchedule/>
                </ScrollView>
            </View>
            );
    }
}

const styles = {
    eventParentStyle: {
        backgroundColor:'white',
        position:'absolute'
    },
    dayScheduleMainBody: {
        backgroundColor:'white',
        position:'relative'
    }
};

const mapStateToPros = state => {
    console.log('mapstatetoprops', state);
    return { session : state.session};
};

export default connect(mapStateToPros)(DayScheduleContainer);
