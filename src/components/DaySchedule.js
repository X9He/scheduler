import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import DefaultHourTemplate from './DefaultHourTemplate';
import Header from "./Header";
import { connect } from 'react-redux';
import Event from "./Event";

class DaySchedule extends Component {
    currentDay = null;
    toRender = [];
    events = [];
    eventStyle = {
        position:'absolute',
        height: 60,
        width: '84%',
        top: 7,
        left: 55,
        backgroundColor:'red',
        zIndex: 20,
        opacity: 1
    };


    componentWillMount(): void {
        if(!this.currentDay){
            this.currentDay = "2019-05-19T00:00:00.000Z"
        }
        console.log("length of events is ", this.props.events.length);
        this.props.events.forEach((item) => {
            // let midnight = new Date(item.beginTime);
            // midnight.setHours(0,0,0,0);
            // let currentDay = new Date(item.beginTime);
            // console.log(midnight.toJSON());
            // console.log(currentDay.toJSON());
            // let diff = currentDay - midnight;
            //
            // console.log('printing diff', diff/1000/60)
        })
    }

    generateEvents(): void {
        this.events = this.props.events.map((item) =>{
            let curStyle = {};
            curStyle.position = 'absolute';
            curStyle.width = '80%';
            curStyle.left = 63;
            curStyle.backgroundColor = item.eventColor;
            curStyle.zIndex = 20;


            let midnight = new Date(item.beginTime);
            midnight.setHours(0,0,0,0);
            let beginTime = new Date(item.beginTime);
            let endTime = new Date(item.endTime);


            curStyle.height = (endTime - beginTime)/1000/60;
            curStyle.top = (beginTime - midnight)/1000/60 + 7;
            return (
                <Event eventStyle={curStyle} title={item.title}/>
            )
        });

    }

    render() {
        const { dayScheduleMainBody } = styles;

        this.generateEvents();

        return (
            <View stlye={dayScheduleMainBody}>
                <Header userText={'User'} dayText={'Day'} weekText={'Week'} monText={'Month'}
                        searchText={'Search'} addText={'Add'}/>
                <ScrollView stlye={dayScheduleMainBody}>
                    {this.events}
                    {/*<Event eventStyle={this.eventStyle} title={'Temporary place holder'}/>*/}
                    <View stlye={dayScheduleMainBody}>
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
                        <DefaultHourTemplate hourText={''}/>
                    </View>
                </ScrollView>
            </View>
            );
    }
}

const styles = {
    eventParentStyle: {
        position:'absolute'
    },
    dayScheduleMainBody: {
        position:'relative'
    }
};

const mapStateToPros = state => {
    console.log('mapstatetoprops', state);
    return { events : state.events};
};

export default connect(mapStateToPros)(DaySchedule);
