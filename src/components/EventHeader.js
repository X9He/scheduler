import React from 'react';
import {Text, Button, View } from 'react-native';
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";
import {Actions} from "react-native-router-flux";
// import Icon from 'react-native-vector-icons/FontAwesome';

const EventHeader = (props) =>{
    const {mainStyle } = styles;

    const goToDay = () => {
        Actions.DaySchedule();
    };

    return (
        <View style={mainStyle}>
            <Button fontSize={20} color={'#6d775c'} onPress={goToDay} title={props.cancelText}/>
            <Text style={{fontWeight:'bold', fontSize:20, color: '#474c3d', marginRight:20, top:-7}}>
                New Event
            </Text>
            <Button fontSize={20} color={'#6d775c'} onPress={props.addEventToRedux} title={props.addText}/>
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

export default EventHeader;
