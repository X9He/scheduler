import React from 'react';
import {Button, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) =>{
    const {viewStyleRo, viewStyleLe, viewStyleRi } = styles;

    return (
        <View style={viewStyleRo}>
            <View style={viewStyleLe}>
                <Button onPress={console.log('pressed')} title={props.userText}/>
                <Button onPress={console.log('pressed')} title={props.dayText}/>
                <Button color={'#83868c'} onPress={console.log('pressed')} title={props.weekText}/>
                <Button color={'#83868c'} onPress={console.log('pressed')} title={props.monText}/>
            </View>
            <View style={viewStyleRi}>
                <Button onPress={console.log('pressed')} title={props.searchText}/>
                <Button onPress={console.log('pressed')} title={props.addText}/>
            </View>
        </View>);
};


const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyleRo: {
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
    },
    viewStyleLe: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        flexDirection: 'row',
        position: 'relative'
    },
    viewStyleRi: {
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        flexDirection: 'row',
        position: 'relative'
    }
};

export default Header;
