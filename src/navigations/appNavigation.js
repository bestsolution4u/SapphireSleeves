import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FlashMessage from 'react-native-flash-message';
import LoginScreen from "../screens/auth/LoginScreen";
import MainScreen from "../screens/main/MainScreen";
import GameDetailScreen from "../screens/main/GameDetailScreen";

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
            headerTitle: null,
        },
    }
}, {initialRouteName: 'Login'});



const Navigation = createSwitchNavigator({
    Auth: {screen: AuthStack},
    Main: {screen: MainScreen}
}, {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
        cardStyle: { backgroundColor: '#FFFFFF' },
    }
});

const AppContainer = createAppContainer(Navigation);

export const AppNavigation = () => {
    return (
        <React.Fragment>
            <AppContainer/>
            <FlashMessage position="top"/>
        </React.Fragment>
    );
};
