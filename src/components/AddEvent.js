import React, { Component } from 'react';
import {Text, View, TextInput, Image, ScrollView, Switch} from 'react-native';
import DatePicker from 'react-native-datepicker'


class AddEvent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            titleT:'',
            locationT:'',
            noteT:'',
            startData:'2019-05-21 00:20 AM',
            endData:'2019-05-21 00:20 AM',
            allDay:false
        };
    }

    render() {
        let title
        let location
        const { titleStyle, selectStyle1, selectStyle2 } = styles;
        return (
            <ScrollView>
                <View>
                    <View style={titleStyle}>
                        <TextInput
                            style={{height: 40, backgroundColor: '#f0f7e8', marginTop: 10}}
                            placeholder=" Title"
                            onChangeText={(titleT) => this.setState({titleT})} value={this.state.titleT}
                            editable={true} maxLength={40}
                        />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f0f7e8', marginTop:3}}
                            placeholder=" Location"
                            onChangeText={(locationT) => this.setState({locationT})} value={this.state.locationT}
                            editable={true} maxLength={40}
                        />


                    </View>
                    <View style={selectStyle1}>
                        <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                            All-day
                        </Text>
                        <Switch style={{marginRight:5}}
                                onValueChange={(allDay) => this.setState({allDay})} value={this.setState.allDay}/>
                    </View>


                    <View style={selectStyle2}>
                        <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                            Starts
                        </Text>
                        <DatePicker
                            style={{width: 200, marginRight:5}}
                            date={this.state.startDate}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD h:mm a"
                            // minDate="2016-05-01"
                            // maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({startDate: date})}}
                        />
                    </View>


                    <View style={selectStyle2}>
                        <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                            Ends
                        </Text>
                        <DatePicker
                            style={{width: 200, marginRight:5}}
                            date={this.state.endDate}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD h:mm a"
                            // minDate="2016-05-01"
                            // maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({endDate: date})}}
                        />
                    </View>


                    <View style={selectStyle2}>
                        <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                            Repeat
                        </Text>
                        <Text style={{fontSize: 15, color:'#acafa7',marginRight:5}}>
                            Never >
                        </Text>
                    </View>


                    <View style={selectStyle2}>
                        <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                            Alert
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
        margin: 5,
        marginBottom:30
    },
    selectStyle1: {
        backgroundColor: '#f0f7e8',
        justifyContent: 'space-between',
        margin:5,
        marginBottom:3,
        height:40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    selectStyle2: {
        backgroundColor: '#f0f7e8',
        justifyContent: 'space-between',
        marginLeft:5,
        marginRight:5,
        height:40,
        marginBottom:3,
        alignItems: 'center',
        flexDirection: 'row'
    }
}

export default AddEvent;