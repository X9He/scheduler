import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage'
import DaySchedule from "./components/DaySchedule";
import AddEvent from "./components/AddEvent";
import SignupPage from "./components/SignupPage";


class RouterComponent extends Component {

    render () {
        return (
            <Router headerMode="none">
                <Scene key="root">
                    <Scene key="LoginPage" component={LoginPage} />
                    <Scene key="DaySchedule" component={DaySchedule} initial/>
                    <Scene key="AddEvent" component={AddEvent}/>
                    <Scene key="SignupPage" component={SignupPage}/>
                </Scene>
            </Router>
        );
    }
};


export default RouterComponent;
