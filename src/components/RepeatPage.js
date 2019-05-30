import React, { Component } from 'react';
import { View, TouchableOpacity,Text,Image, ScrollView, Switch, Button} from 'react-native';
import {Actions} from "react-native-router-flux";

class RepeatPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            return: '< New Event',
            repeat: 'Repeat',
            // selected:'',
            never: 'Never',
            everyDay: 'Every Day',
            everyWeek: 'Every Week',
            every2Week: 'Every 2 Weeks',
            everyMonth: 'Every Month',
            choice:1 // 0->never, 1->everyday, 2->every week, 3->every 2 weeks, 4->everyMonth
        }
        this.goSelect = this.goSelect.bind(this);
    }

    goSelect(num){
        this.setState({choice: num});
        // Actions.prevScene();
    };

    render() {
        const goNewEvent = () => {
            Actions.AddEvent();
        };

        const { mainStyle,headerStyle,frequencyStyle,textStyle,choiceStyle } = styles;
        return (
            <View style={mainStyle}>
                <View style={headerStyle}>
                    <Button color={'#6d775c'}
                        onPress={goNewEvent}
                        title={this.state.return} />
                    <Text style={{fontWeight:'bold', fontSize:20, color: '#474c3d', marginLeft:40, top:-7}}>
                        {this.state.repeat}
                    </Text>
                </View>

                <TouchableOpacity style={{marginTop:15}} onPress={() => this.goSelect(1)}>
                    <View style={frequencyStyle}>
                        <Text style={textStyle}>
                            {this.state.never}
                        </Text>
                        {this.state.choice===1 ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect(2)}>
                    <View style={frequencyStyle}>
                        <Text style={textStyle}>
                            {this.state.everyDay}
                        </Text>
                        {this.state.choice===2 ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect(3)}>
                    <View style={frequencyStyle}>
                        <Text style={textStyle}>
                            {this.state.everyWeek}
                        </Text>
                        {this.state.choice===3 ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect(4)}>
                    <View style={frequencyStyle}>
                        <Text style={textStyle}>
                            {this.state.every2Week}
                        </Text>
                        {this.state.choice===4 ? (
                            <Text style={choiceStyle}>
                                😆
                            </Text>
                        ) : null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:-8}} onPress={() => this.goSelect(5)}>
                    <View style={frequencyStyle}>
                        <Text style={textStyle}>
                            {this.state.everyMonth}
                        </Text>
                        {this.state.choice===5 ? (
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
    frequencyStyle: {
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

export default RepeatPage;