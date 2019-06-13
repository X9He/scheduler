import React from 'react';
import {Text, View } from 'react-native';

const WeekSubheader = (props) =>{
    const {viewStyleRo, sunStyle,satStyle, weekdayStyle} = styles;
    return(
        <View style={viewStyleRo}>
            <Text style={sunStyle}>
                Sun
            </Text>
            <Text style={weekdayStyle}>
                Mon
            </Text>
            <Text style={weekdayStyle}>
                Tue
            </Text>
            <Text style={weekdayStyle}>
                Wed
            </Text>
            <Text style={weekdayStyle}>
                Thu
            </Text>
            <Text style={weekdayStyle}>
                Fri
            </Text>
            <Text style={satStyle}>
                Sat
            </Text>
        </View>
    );
}

const styles = {
    sunStyle: {
        fontSize: 13,
        marginLeft: 15,
        color:'#B0BF8B'
    },
    satStyle:{
        fontSize: 13,
        marginRight: 15,
        color:'#B0BF8B'
    },
    weekdayStyle:{
        fontsize:9,
        color:'#545E43'
    },
    viewStyleRo: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexDirection: 'row',
        height: 25,
        // paddingTop: 40,
        shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // elevation: 2,
        // position: 'relative'
    }
};

export default WeekSubheader;