import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import DefaultHourTemplate from './DefaultHourTemplate'

class DaySchedule extends Component {
    render() {
        const { topStyle } = styles;
        return (
            <ScrollView>
            <View>
                <View style={topStyle}/>
                <DefaultHourTemplate hourText={' 12 AM'}/>
                <DefaultHourTemplate hourText={'   1 AM'}/>
                <DefaultHourTemplate hourText={'   2 AM'}/>
                <DefaultHourTemplate hourText={'   3 AM'}/>
                <DefaultHourTemplate hourText={'   4 AM'}/>
                <DefaultHourTemplate hourText={'   5 AM'}/>
                <DefaultHourTemplate hourText={'   6 AM'}/>
                <DefaultHourTemplate hourText={'   7 AM'}/>
                <DefaultHourTemplate hourText={'   8 AM'}/>
                <DefaultHourTemplate hourText={'   9 AM'}/>
                <DefaultHourTemplate hourText={' 10 AM'}/>
                <DefaultHourTemplate hourText={' 11 AM'}/>
                <DefaultHourTemplate hourText={' 12 PM'}/>
                <DefaultHourTemplate hourText={'   1 PM'}/>
                <DefaultHourTemplate hourText={'   2 PM'}/>
                <DefaultHourTemplate hourText={'   3 PM'}/>
                <DefaultHourTemplate hourText={'   4 PM'}/>
                <DefaultHourTemplate hourText={'   5 PM'}/>
                <DefaultHourTemplate hourText={'   6 PM'}/>
                <DefaultHourTemplate hourText={'   7 PM'}/>
                <DefaultHourTemplate hourText={'   8 PM'}/>
                <DefaultHourTemplate hourText={'   9 PM'}/>
                <DefaultHourTemplate hourText={' 10 PM'}/>
                <DefaultHourTemplate hourText={' 11 PM'}/>
                <DefaultHourTemplate hourText={' 12 PM'}/>
                <DefaultHourTemplate hourText={''}/>
            </View>
            </ScrollView>);
    }
}

const styles = {
    topStyle: {
        height: 10,
        width: '100%'
    }
};

export default DaySchedule;
