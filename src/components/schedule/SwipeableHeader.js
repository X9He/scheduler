import React, { Component } from 'react';
import {Text, View, TouchableOpacity, Dimensions, Alert, } from 'react-native';
import Swiper from 'react-native-swiper'
import DayScheduleHeader from "./DayScheduleHeader";
// import CalendarStrip from 'react-native-slideable-calendar-strip';
import CalendarStrip from './CalendarStrip';
import {connect} from "react-redux";

const width = Dimensions.get('window').width;

class SwipeableHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date()
        }
    }
    render() {
        const {mainStyle} = styles;

        return (
            <View style={mainStyle}>
                <View style={{marginTop: -100}}>
                    <CalendarStrip
                        selectedDate={this.state.selectedDate}
                        onPressDate={(date) => {
                            this.setState({ selectedDate: date });
                        }}
                        onPressGoToday={(today) => {
                            this.setState({ selectedDate: today });
                        }}
                        onSwipeDown={() => {
                            alert('onSwipeDown');
                        }}
                        markedDate={['2018-05-04', '2018-05-15', '2018-06-04', '2018-05-01',]}
                    />
                    <View style={{
                        width,
                        marginTop: 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    mainStyle: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexDirection: 'row',
        height: 105,
        paddingTop: 15,
        borderTopWidth: 0,
        borderColor: '#ddd',
        position: 'relative'
    }
};

const mapStateToPros = state => {
    console.log('mapstatetoprops', state);
    return { session : state.session};
};


const mapDispatchToProps = dispatch => {
    return {
        changeCurDate: (new_date) => dispatch({type: 'SET_CUR_SES_DATE', date: new_date})
    }
};

export default connect(mapStateToPros, mapDispatchToProps)(SwipeableHeader);
