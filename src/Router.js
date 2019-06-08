import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
import DaySchedule from "./components/DaySchedule";
import AddEvent from "./components/AddEvent";
import SignupPage from "./components/SignupPage";
import RepeatPage from "./components/RepeatPage";
import SearchPage from "./components/SearchPage";
import AlertPage from "./components/AlertPage";
import WeekSchedule from "./components/WeekSchedule";
import MonthSchedule from "./components/MonthSchedule";
import SwipeableHeader from "./components/SwipeableHeader";


class RouterComponent extends Component {

    render () {
        return (
            <Router headerMode="none">
                <Scene key="root">
                    {/*<Scene key="WeekSubheader" component={SwipeableHeader} initial/>*/}
                    <Scene key="LoginPage" component={LoginPage} />
                    <Scene key="DaySchedule" component={DaySchedule} initial/>
                    <Scene key="WeekSchedule" component={WeekSchedule}/>
                    <Scene key="MonthSchedule" component={MonthSchedule}/>
                    <Scene key="AddEvent" component={AddEvent}/>
                    <Scene key="SignupPage" component={SignupPage}/>
                    <Scene key="SearchPage" component={SearchPage}/>
                    <Scene key="RepeatPage" component={RepeatPage}/>
                    <Scene key="AlertPage" component={AlertPage}/>
                </Scene>
            </Router>
        );
    }
};


export default RouterComponent;
