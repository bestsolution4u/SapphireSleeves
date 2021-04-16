import React from "react";
import {View, StatusBar, Text} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';
import {AppStyles} from "../../../constants/appStyles";
import SocialLoginButton from "../../../components/button/SocialLoginButton";

const LoginScreen = props => {
    return (
        <View style={AppStyles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <View style={AppStyles.centeredContainer}>
                <Text style={styles.txtWelcome}>Benvenuto</Text>
                <Text style={styles.txtLogin}>Effettua il Login</Text>
                <SocialLoginButton type={"google"} onPress={() => {
                    props.navigation.navigate('Main');
                }} />
                <SocialLoginButton type={"facebook"} onPress={() => {
                    props.navigation.navigate('Main');
                }} />
                <SocialLoginButton type={"email"} onPress={() => {
                    props.navigation.navigate('Main');
                }} />
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
