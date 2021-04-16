import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FlashMessage from 'react-native-flash-message';

const AuthStack = createStackNavigator({});

const MainStack = createStackNavigator({});

const Navigation = createSwitchNavigator({
    Auth: {screen: AuthStack},
    Main: {screen: MainStack}
}, {initialRouteName: 'Auth'});

export const AppContainer = createAppContainer(Navigation);

export const AppNavigation = () => {
    return (
        <React.Fragment>
            <AppContainer />
            <FlashMessage position="top" />
        </React.Fragment>
    );
};
