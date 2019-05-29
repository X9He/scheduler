import React, { Component } from 'react';
import {DatePickerIOS,Text, View, TextInput, Image, ScrollView, Switch, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import EventHeader from "./EventHeader";
import Toast, {DURATION} from 'react-native-easy-toast';


class AddEvent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            titleT:'',
            locationT:'',
            noteT:'',
            allDay:false,
            chosenSDate: AddEvent.roundHour(new Date()),
            chosenEDate: AddEvent.roundHour(new Date()),
            startDate: null,
            endDate: null,
            start:false,
            end: false,
            setS:false
        };

        this.setSDate = this.setSDate.bind(this);
        this.setEDate = this.setEDate.bind(this);
    }

    componentWillMount(): void {
        this.setState({startDate: new moment(this.state.chosenSDate).format('MMMM D, YYYY   h:mm a')});
        this.setState({endDate: new moment(this.state.chosenEDate).format('MMMM D, YYYY   h:mm a')});
    }

    static roundHour(date) {
        date.setHours(date.getHours() + Math.round(date.getMinutes()/60));
        date.setMinutes(0);
        return date;
    }


    static roundFiveMinutes(date) {
        let coeff = 1000 * 60 * 5;
        let rounded = new Date(Math.round(date.getTime() / coeff) * coeff)
        return rounded;
    }

    setSDate(newDate){
        let toSet = AddEvent.roundFiveMinutes(newDate);
        this.setState({chosenSDate: toSet});
        this.setState({startDate: new moment(toSet).format('MMMM D, YYYY   h:mm a')});
    }

    setEDate(newDate){
        let toSet = AddEvent.roundFiveMinutes(newDate);
        if (toSet < this.state.chosenSDate) {
            this.refs.toast.show('End time must not be less than begin time!', 1000, () => {
                this.setState({chosenEDate: this.state.chosenSDate});
                this.setState({endDate: new moment(this.state.chosenSDate).format('MMMM D, YYYY   h:mm a')});
            });
        } else {
            this.setState({chosenEDate: toSet});
            this.setState({endDate: new moment(toSet).format('MMMM D, YYYY   h:mm a')});
        }
    }

    showStart = () => {
        console.log('showStart started!');
        this.setState({
            start: !this.state.start
        });
        if (!this.state.start) {
            this.setState({
                end: false
            });
        }
    };
    showEnd = () => {
        this.setState({
            end: !this.state.end
        });
        if (!this.state.end) {
            this.setState({
                start: false
            });
        }
    };


    render() {
        let title
        let location
        const { titleStyle, selectStyle1, selectStyle2 } = styles;
        return (
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <View>
                    <Toast ref="toast"/>
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
                            onChangeText={(locationT) => this.setState({locationT})} value={this.state.locationT}
                            editable={true} maxLength={40}
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

                    {/*begin time datet picker*/}

                    <TouchableOpacity onPress={this.showStart}>
                        <View style={selectStyle2}>
                            <Text
                                style={{fontSize: 15, color: '#474c3d', marginLeft:5}}>
                                Starts
                            </Text>
                            <Text
                                style={{fontSize: 15, color: '#474c3d', marginRight:5}}>
                                {this.state.startDate}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {this.state.start ? (
                         <DatePickerIOS
                            date={this.state.chosenSDate}
                            onDateChange={this.setSDate}
                        />
                    ) : null}

                    {/*end time datet picker*/}
                    <TouchableOpacity onPress={this.showEnd}>
                        <View style={selectStyle2}>
                            <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                                Ends
                            </Text>
                            <Text
                                style={{fontSize: 15, color: '#474c3d', marginRight:5}}>
                                {this.state.endDate}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {this.state.end ? (
                        <DatePickerIOS
                            date={this.state.chosenEDate}
                            onDateChange={this.setEDate}
                        />
                    ) : null}


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
