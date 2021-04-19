import React from "react";
import {StatusBar, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';
import {AppStyles} from "../../../constants/appStyles";

const InboxScreen = props => {
    return (
        <View style={AppStyles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(InboxScreen);
