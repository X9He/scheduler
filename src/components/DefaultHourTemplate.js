import React, { Component } from 'react';
import { Text, View } from 'react-native';

class DefaultHourTemplate extends Component {
    render() {
        const { viewStyle, timeTextStyle } = styles;
        return (
            <View style={viewStyle}>
                <View>
                    <Text style={timeTextStyle}>{this.props.hourText}</Text>
                </View>
                <View
                style={{
                    borderTopColor: 'black',
                    borderTopWidth: 1,
                    width: '100%',
                    height: 60,
                    opacity: 0.3
                }}
                />
            </View>);
    }
}

const styles = {
    viewStyle: {
        flexDirection: 'row'
    },
    timeTextStyle:{
        marginTop: -7,
        left: 10,
        width: 60,
        end: 10
    }
};

export default DefaultHourTemplate;
