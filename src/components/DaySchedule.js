import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import DefaultHourTemplate from './DefaultHourTemplate';
import Header from "./Header";
import { connect } from 'react-redux';

class DaySchedule extends Component {
    currentDay = null;
    toRender = [];

    componentWillMount(): void {
        if(!this.currentDay){
            this.currentDay = "2019-05-19T00:00:00.000Z"
        }
    }

    render() {
        const { topStyle } = styles;

        return (
            <ScrollView>
                <View style={{backgroundColor: 'white'}}>
                    <Header userText={'User'} dayText={'Day'} weekText={'Week'} monText={'Month'}
                            searchText={'Search'} addText={'Add'}/>
                    <View style={topStyle}/>
                    <DefaultHourTemplate hourText={'12 AM'}/>
                    <DefaultHourTemplate hourText={'  1 AM'}/>
                    <DefaultHourTemplate hourText={'  2 AM'}/>
                    <DefaultHourTemplate hourText={'  3 AM'}/>
                    <DefaultHourTemplate hourText={'  4 AM'}/>
                    <DefaultHourTemplate hourText={'  5 AM'}/>
                    <DefaultHourTemplate hourText={'  6 AM'}/>
                    <DefaultHourTemplate hourText={'  7 AM'}/>
                    <DefaultHourTemplate hourText={'  8 AM'}/>
                    <DefaultHourTemplate hourText={'  9 AM'}/>
                    <DefaultHourTemplate hourText={'10 AM'}/>
                    <DefaultHourTemplate hourText={'11 AM'}/>
                    <DefaultHourTemplate hourText={'12 PM'}/>
                    <DefaultHourTemplate hourText={'  1 PM'}/>
                    <DefaultHourTemplate hourText={'  2 PM'}/>
                    <DefaultHourTemplate hourText={'  3 PM'}/>
                    <DefaultHourTemplate hourText={'  4 PM'}/>
                    <DefaultHourTemplate hourText={'  5 PM'}/>
                    <DefaultHourTemplate hourText={'  6 PM'}/>
                    <DefaultHourTemplate hourText={'  7 PM'}/>
                    <DefaultHourTemplate hourText={'  8 PM'}/>
                    <DefaultHourTemplate hourText={'  9 PM'}/>
                    <DefaultHourTemplate hourText={'10 PM'}/>
                    <DefaultHourTemplate hourText={'11 PM'}/>
                    <DefaultHourTemplate hourText={'12 PM'}/>
                    {/*<DefaultHourTemplate hourText={''}/>*/}
                </View>
            </ScrollView>);
    }
}

const styles = {
    topStyle: {
        backgroundColor:'white',
        position:'absolute',
        height: 10,
        width: '100%'
    }
};

const mapStateToPros = state => {
    console.log(state);
    return { events : state.events};
};

export default connect(mapStateToPros)(DaySchedule);
