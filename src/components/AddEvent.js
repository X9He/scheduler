import React, {Component} from 'react';
import {DatePickerIOS, ScrollView, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import EventHeader from "./EventHeader";
import {connect} from 'react-redux';
import Toast from 'react-native-easy-toast';
import {Actions} from "react-native-router-flux";


class AddEvent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            titleT:'',
            locationT:'',
            noteT:'',
            allDay:false,
            chosenSDate: AddEvent.roundHour(this.props.session.cur_date),
            chosenEDate: AddEvent.roundHour(this.props.session.cur_date),
            startDate: null,
            endDate: null,
            start:false,
            end: false,
            setS:false,
            Repeat: this.props.R,
            Alert: this.props.A
        };

        this.setSDate = this.setSDate.bind(this);
        this.setEDate = this.setEDate.bind(this);
    }

    addEventToRedux = () => {
        if(this.state.titleT !== '') {
            this.props.addEventToState({
                title: this.state.titleT,
                beginTime: this.state.chosenSDate.toJSON(),
                endTime: this.state.chosenEDate.toJSON(),
                eventType: 1,
                eventColor: "#F4AFAB",
                requireNotification: true
            });
            Actions.DaySchedule();
        } else {
            this.refs.toast.show('Title must not be empty!', 1000);
        }
    };

    componentWillMount(): void {
        this.setState({startDate: new moment(this.state.chosenSDate).format('MMMM D, YYYY   h:mm a')});
        this.setState({endDate: new moment(this.state.chosenEDate).format('MMMM D, YYYY   h:mm a')});
    }

    static roundHour = (date) => {
        date.setHours(date.getHours() + Math.round(date.getMinutes()/60));
        date.setMinutes(0);
        return date;
    };

    static roundFiveMinutes(date) {
        let coeff = 1000 * 60 * 5;
        return new Date(Math.round(date.getTime() / coeff) * coeff);
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
        const { titleStyle, selectStyle1, selectStyle2 } = styles;

        const selectRepeat = () => {
            this.setState({Repeat: this.props.choiceR},function() {
                Actions.RepeatPage({Repeat: this.props.choiceR ,Alert: this.state.Alert});
            });
        };

        const selectAlert = () => {
            this.setState({Alert: this.props.choiceA},function() {
                Actions.AlertPage({Alert: this.props.choiceA,Repeat: this.state.Repeat});
            });
        };

        return (
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <View>
                    <Toast ref="toast"/>
                    <EventHeader addEventToRedux={this.addEventToRedux} cancelText={'Cancel'} addText={'Add'}/>
                    <View style={titleStyle}>
                        <TextInput
                            style={{height: 40, backgroundColor: '#f0f7e8', marginTop: 15}}
                            placeholder=" Title"
                            onChangeText={(input) => { this.setState({ titleT: input})}}
                            editable={true} maxLength={40}
                        />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f0f7e8', marginTop:3}}
                            placeholder=" Location"
                            onChangeText={(input) => { this.setState({ locationT: input})}}
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

                    <TouchableOpacity onPress={selectRepeat}>
                        <View style={selectStyle2}>
                            <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                                Repeat
                            </Text>
                            <Text
                                style={{fontSize: 15, color:'#acafa7',marginRight:5}}>
                                {this.props.choiceR} >
                            </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={selectAlert}>
                        <View style={selectStyle2}>
                            <Text style={{fontSize: 15, color:'#474c3d',marginLeft:5}}>
                                Alert
                            </Text>
                            <Text
                                style={{fontSize: 15, color:'#acafa7',marginRight:5}}>
                                {this.props.choiceA} >
                            </Text>
                        </View>
                    </TouchableOpacity>

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
};

const mapDispatchToProps = dispatch => {
    return {
        addEventToState: (event) => {
            dispatch({
                type: 'ADD_EVENT',
                event: event
            })
        }
    };
};

const mapStateToProps = state => {
    console.log('mapstatetoprops', state);
    return {session: state.session};
};


export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
