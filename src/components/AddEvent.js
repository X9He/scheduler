import React, { Component } from 'react';
import {DatePickerIOS, Text, View, TextInput, Image, ScrollView, Switch, Button} from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import EventHeader from "./EventHeader";
import {Actions} from "react-native-router-flux";


class AddEvent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            titleT:'',
            locationT:'',
            noteT:'',
            startDate:new moment().format('MMMM D, YYYY   h:mm a'),
            endDate:new moment().format('MMMM D, YYYY   h:mm a'),
            allDay:false,
            chosenSDate: new Date(),
            chosenEDate: new Date(),
            start:false,
            end: false,
            setS:false,
            repeat: 'Never',
            alert: 'None'
        };

        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        if (this.state.setS == true){
            this.setState({chosenSDate: newDate});
            this.setState({startDate: new moment(newDate).format('MMMM D, YYYY   h:mm a')});
        } else {
            this.setState({chosenEDate: newDate});
            this.setState({endDate: new moment(newDate).format('MMMM D, YYYY   h:mm a')});
        }
    }

    showStart = () => {
        if (this.state.start == true) {
            this.setState({setS: true});
            this.setState({ start: false });
        } else {
            this.setState({ start: true });
            this.setState({setS: true});
        }
    };
    showEnd = () => {
        if (this.state.end == true) {
            this.setState({setS: false});
            this.setState({ end: false });
        } else {
            this.setState({ end: true });
            this.setState({setS: false});
        }
    };


    render() {
        let title
        let location
        const { titleStyle, selectStyle1, selectStyle2 } = styles;

        const selectRepeat = () => {
            Actions.RepeatPage();
        };

        const selectAlert = () => {
            Actions.AlertPage();
        };

        return (
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <View>
                    <EventHeader cancelText={'Cancel'} addText={'Add'}/>
                    <View style={titleStyle}>
                        <TextInput
                            style={{height: 40, backgroundColor: '#f0f7e8', marginTop: 15}}
                            placeholder=" Title"
                            onChangeText={(titleT) => this.setState({titleT})} value={this.state.titleT}
                            editable={true} maxLength={40}
                        />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f0f7e8', marginTop:3}}
                            placeholder=" Location"
                            editable={true}
                            maxLength={40}
                            onChangeText={(locationT) => this.setState({locationT})} value={this.state.locationT}
                        />
                    </View>


                    <View style={selectStyle1}>
                        <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                            All-day
                        </Text>
                        <Switch style={{marginRight:5}}
                                value={this.state.allDay}
                                onValueChange ={(allDay)=>this.setState({allDay})}/>
                    </View>

                    <View style={selectStyle2}>
                        <Text
                            style={{fontSize: 15, color: '#474c3d', marginLeft:5}}>
                            Starts
                        </Text>
                        <Text
                            style={{fontSize: 15, color: '#474c3d', marginRight:5}}
                            onPress={this.showStart}>
                            {this.state.startDate}
                        </Text>
                    </View>
                    {this.state.start ? (
                         <DatePickerIOS
                            date={this.state.chosenSDate}
                            onDateChange={this.setDate}
                        />
                    ) : null}


                    <View style={selectStyle2}>
                        <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                            Ends
                        </Text>
                        <Text
                            style={{fontSize: 15, color: '#474c3d', marginRight:5}}
                            onPress={this.showEnd}>
                            {this.state.endDate}
                        </Text>
                    </View>
                    {this.state.end ? (
                        <DatePickerIOS
                            date={this.state.chosenEDate}
                            onDateChange={this.setDate}
                        />
                    ) : null}


                    <View style={selectStyle2}>
                        <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                            Repeat
                        </Text>
                        <Text
                            style={{fontSize: 15, color:'#acafa7',marginRight:5}}
                            onPress={selectRepeat}>
                            {this.state.repeat} >
                        </Text>
                    </View>


                    <View style={selectStyle2} onPress={selectAlert}>
                        <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                            Alert
                        </Text>
                        <Text
                            style={{fontSize: 15, color:'#acafa7',marginRight:5}}
                            onPress={selectAlert}>
                            {this.state.alert} >
                        </Text>
                    </View>

                    <View style={titleStyle}>
                        <TextInput
                            style={{height: 150, backgroundColor: '#f0f7e8', marginTop: 50}}
                            placeholder=" Notes"
                            multiline = {true}
                            numberOfLines = {5}
                            onChangeText={(noteT) => this.setState({noteT})} value={this.state.noteT}
                            editable={true} maxLength={250}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    titleStyle:{
        background: 'white',
        margin: 8,
        marginBottom:30
    },
    selectStyle1: {
        backgroundColor: '#f0f7e8',
        justifyContent: 'space-between',
        margin:8,
        marginBottom:3,
        height:40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    selectStyle2: {
        backgroundColor: '#f0f7e8',
        justifyContent: 'space-between',
        marginLeft:8,
        marginRight:8,
        height:40,
        marginBottom:3,
        alignItems: 'center',
        flexDirection: 'row'
    }
}

export default AddEvent;