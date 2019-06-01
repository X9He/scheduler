import React, { Component } from 'react';
import {DatePickerIOS, Text, View, TextInput, Image, ScrollView, Switch, Button, TouchableOpacity} from 'react-native';
import {Actions} from "react-native-router-flux";

class AlertPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            return: '< New Event',
            setAlert:'Alert',
            atTime: 'At time of event',
            none: 'None',
            five:'5 minutes before',
            fifteen: '15 minutes before',
            thirty: '30 minutes before',
            oneHour: '1 hour before',
            twoHour: '2 hours before',
            oneDay: '1 day before',
            twoDay: '2 days before',
            oneWeek: '1 week before',
            choiceA: this.props.Alert
        }
        this.goSelect = this.goSelect.bind(this);
    }

    goSelect(alert){
        this.setState({choiceA: alert}, function() {
            Actions.AddEvent({choiceA: this.state.choiceA, R:this.props.Repeat});
        });
        //     Actions.AddEvent();
    };


    render() {
        const goNewEvent = () => {
            Actions.AddEvent();
        };

        const { mainStyle,headerStyle,timeStyle,textStyle,choiceStyle } = styles;
        return (
            <View style={mainStyle}>
                <View style={headerStyle}>
                    <Button color={'#6d775c'}
                            onPress={goNewEvent}
                            title={this.state.return} />
                    <Text style={{fontWeight:'bold', fontSize:20, color: '#474c3d', marginLeft:50, top:-7}}>
                        {this.state.setAlert}
                    </Text>
                </View>

                <TouchableOpacity style={{marginTop:15}} onPress={() => this.goSelect('None')}>
                    <View style={timeStyle}>
                        <Text style={textStyle}>
                            {this.state.none}
                        </Text>
                        {this.state.choiceA==='None' ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:15}} onPress={() => this.goSelect('At time of event')}>
                    <View style={timeStyle}>
                        <Text style={textStyle}>
                            {this.state.atTime}
                        </Text>
                        {this.state.choiceA==='At time of event' ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect('5 minutes before')}>
                    <View style={timeStyle}>
                        <Text style={textStyle}>
                            {this.state.five}
                        </Text>
                        {this.state.choiceA==='5 minutes before' ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect('15 minutes before')}>
                    <View style={timeStyle}>
                        <Text style={textStyle}>
                            {this.state.fifteen}
                        </Text>
                        {this.state.choiceA==='15 minutes before' ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect('20 minutes before')}>
                    <View style={timeStyle}>
                        <Text style={textStyle}>
                            {this.state.thirty}
                        </Text>
                        {this.state.choiceA==='20 minutes before' ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect('1 hour before')}>
                    <View style={timeStyle}>
                        <Text style={textStyle}>
                            {this.state.oneHour}
                        </Text>
                        {this.state.choiceA==='1 hour before' ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect('2 hours before')}>
                    <View style={timeStyle}>
                        <Text style={textStyle}>
                            {this.state.twoHour}
                        </Text>
                        {this.state.choiceA==='2 hours before' ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect('1 day before')}>
                    <View style={timeStyle}>
                        <Text style={textStyle}>
                            {this.state.oneDay}
                        </Text>
                        {this.state.choiceA==='1 day1 before' ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect('2 days before')}>
                    <View style={timeStyle}>
                        <Text style={textStyle}>
                            {this.state.twoDay}
                        </Text>
                        {this.state.choiceA==='2 days before' ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect('1 week before')}>
                    <View style={timeStyle}>
                        <Text style={textStyle}>
                            {this.state.oneWeek}
                        </Text>
                        {this.state.choiceA==='1 week before' ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = {
    mainStyle:{
        flex:1,
        backgroundColor:'white'
    },
    headerStyle: {
        backgroundColor: 'white',
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
    timeStyle: {
        backgroundColor: '#f0f7e8',
        justifyContent: 'space-between',
        margin:8,
        marginBottom:3,
        height:40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 15,
        color:'#474c3d',
        marginLeft:5
    },
    choiceStyle:{
        color:'#474c3d',
        marginRight:5
    }
}

export default AlertPage;