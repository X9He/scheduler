import React from 'react';
import {Text, Button, View } from 'react-native';
import {Actions} from "react-native-router-flux";
// import Icon from 'react-native-vector-icons/FontAwesome';

const DayScheduleHeader = (props) =>{
    const {mainStyle } = styles;

    const goToDay = () => {
        Actions.DaySchedule();
    };

    return (
        <View style={mainStyle}>
            <Button title={'props.cancelText'}/>
            <Button title={props.addText}/>
        </View>);
};


const styles = {
    mainStyle:{
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexDirection: 'row',
        height: 90,
        paddingTop: 45,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

export default DayScheduleHeader;
