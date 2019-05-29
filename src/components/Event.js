import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Event extends Component {

    render() {
        const { eventDefault, eventTextStyle } = styles;
        return (
            <View style={[this.props.eventStyle, eventDefault]}>
                <Text style={eventTextStyle}>{this.props.title}</Text>
            </View>);
    }
}


const styles = {
    eventDefault:{
        borderRadius: 2,
        opacity: 0.8
    },
    eventTextStyle: {
        position:'absolute',
        left: 8,
        top: 8
    }
};
export default Event;
