import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from "../screens/main/HomeScreen";
import AppDrawerMenu from "../components/menu/AppDrawerMenu";
import {createStackNavigator} from "react-navigation-stack";
import MainScreen from "../screens/main/MainScreen";
import GameDetailScreen from "../screens/main/GameDetailScreen";
import BustineDetailScreen from "../screens/main/BustineDetailScreen";
import ChattingScreen from "../screens/main/ChattingScreen";

const HomeStack = createStackNavigator({
    HomeTabs: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
            headerTitle: null,
        },
    },
    GameDetail: {
        screen: GameDetailScreen,
        navigationOptions: {
            headerShown: false,
            headerTitle: null,
        },
    },
    BustineDetail: {
        screen: BustineDetailScreen,
        navigationOptions: {
            headerShown: false,
            headerTitle: null,
        },
    },
    Chatting: {
        screen: ChattingScreen,
        navigationOptions: {
            headerShown: false,
            headerTitle: null,
        },
    }
}, {initialRouteName: 'HomeTabs'});

const MainDrawerNavigation = createDrawerNavigator({
    Home: {screen: HomeStack}
}, {
    initialRouteName: 'Home',
    drawerWidth: 275,
    drawerPosition: 'left',
    drawerType: "push-screen",
    contentComponent: AppDrawerMenu,
});

const MainContainer = createAppContainer(MainDrawerNavigation);

export const MainDrawerNavigator = () => {
    return (
        <MainContainer />
    );
};
