import React from "react";
import {connect} from 'react-redux';
import {styles} from './style';
import {MainDrawerNavigator} from "../../../navigations/mainDrawerNavigation";


const MainScreen = props => {
    return (
        <MainDrawerNavigator />
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
