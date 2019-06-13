import React, {Component} from 'react';
import {View} from 'react-native';
import DefaultHourTemplate from './DefaultHourTemplate';
import {connect} from 'react-redux';
import Event from "../Event";

class DaySchedule extends Component {
    constructor(props) {
        super(props);
    }

    eventStyle = {
        position: 'absolute',
        height: 60,
        width: '84%',
        top: 7,
        left: 55,
        backgroundColor: 'red',
        zIndex: 20,
        opacity: 1
    };


    componentWillMount(): void {
        console.log("length of events is ", this.props.events.length);
        console.log("session cur date is ", this.props.session.cur_date);
    }

    // generateEvents = () => {
    //     this.setState({
    //         events: this.props.events.filter((item) => {
    //             let curBeginTime = new Date(item.beginTime);
    //             console.log(item);
    //             return curBeginTime.getDate() === this.props.session.cur_date.getDate() &&
    //                 curBeginTime.getMonth() === this.props.session.cur_date.getMonth() &&
    //                 curBeginTime.getFullYear() === this.props.session.cur_date.getFullYear()
    //         })
    //             .map((item) => {
    //                 let curStyle = {};
    //                 curStyle.position = 'absolute';
    //                 curStyle.width = '80%';
    //                 curStyle.left = 63;
    //                 curStyle.backgroundColor = item.eventColor;
    //                 curStyle.zIndex = 20;
    //
    //
    //                 let midnight = new Date(item.beginTime);
    //                 midnight.setHours(0, 0, 0, 0);
    //                 let beginTime = new Date(item.beginTime);
    //                 let endTime = new Date(item.endTime);
    //
    //
    //                 curStyle.height = (endTime - beginTime) / 1000 / 60;
    //                 curStyle.top = (beginTime - midnight) / 1000 / 60 + 7;
    //                 return (
    //                     <Event eventStyle={curStyle} title={item.title}/>
    //                 )
    //             })
    //     })
    //
    // };

    render() {
        const {dayScheduleMainBody, lastElement} = styles;

        // this.generateEvents();

        return (
            <View style={dayScheduleMainBody}>
                {this.props.events.filter((item) => {
                    let curBeginTime = new Date(item.beginTime);
                    console.log(item);
                    return curBeginTime.getDate() === this.props.session.cur_date.getDate() &&
                        curBeginTime.getMonth() === this.props.session.cur_date.getMonth() &&
                        curBeginTime.getFullYear() === this.props.session.cur_date.getFullYear()
                }).map((item) => {
                    let curStyle = {};
                    curStyle.position = 'absolute';
                    curStyle.width = '80%';
                    curStyle.left = 63;
                    curStyle.backgroundColor = item.eventColor;
                    curStyle.zIndex = 20;


                    let midnight = new Date(item.beginTime);
                    midnight.setHours(0, 0, 0, 0);
                    let beginTime = new Date(item.beginTime);
                    let endTime = new Date(item.endTime);


                    curStyle.height = (endTime - beginTime) / 1000 / 60;
                    curStyle.top = (beginTime - midnight) / 1000 / 60 + 7;
                    return (
                        <Event eventStyle={curStyle} title={item.title}/>
                    )
                })}
                <View style={dayScheduleMainBody}>
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
                    <DefaultHourTemplate hourText={'12 AM'}/>
                    <View style={lastElement}/>
                </View>
            </View>
        );
    }
}

const styles = {
    eventParentStyle: {
        backgroundColor: 'white',
        position: 'absolute'
    },
    dayScheduleMainBody: {
        backgroundColor: 'white',
        position: 'relative'
    },
    lastElement: {
        backgroundColor: 'white',
        paddingBottom: 150
    }
};

const mapStateToPros = state => {
    console.log('mapstatetoprops', state);
    return {events: state.events, session: state.session};
};

export default connect(mapStateToPros)(DaySchedule);
