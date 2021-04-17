import React from "react";
import {StatusBar, View} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';
import {AppStyles} from "../../../constants/appStyles";
import Hamburger from "../../../components/menu/Hamburger";
import {AnimatedTabBarNavigator, TabElementDisplayOptions} from '../../../libraries/tabbar/index';
import GameListScreen from "../GameListScreen";
import {default as IonIcon} from 'react-native-vector-icons/Ionicons';
import {default as MaterialIcon} from 'react-native-vector-icons/MaterialIcons';
import SearchScreen from "../SearchScreen";
import BookmarkScreen from "../BookmarkScreen";
import InboxScreen from "../InboxScreen";
import {NavigationContainer} from "@react-navigation/native";

const Tabs = AnimatedTabBarNavigator();

const HomeScreen = props => {
    return (
        <NavigationContainer>
            <View style={AppStyles.container}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <Hamburger navigation={props.navigation}/>
                <Tabs.Navigator
                    initialRouteName="GameListScreen"
                    tabBarOptions={{
                        inactiveTintColor: '#E4E9F2',
                        activeBackgroundColor: 'transparent'
                    }}
                    appearance={{
                        floating: true,
                        shadow: true,
                        whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
                        topPadding: 5,
                        bottomPadding: 5
                    }}>
                    <Tabs.Screen
                        name="GameListScreen"
                        children={() => <GameListScreen onGameDetail={() => props.navigation.navigate('GameDetail')}/>}
                        options={{
                            tabBarIcon: ({focused, color}) => (
                                <MaterialIcon
                                    name={"home"}
                                    size={34}
                                    color={color}
                                />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="SearchScreen"
                        children={() => <SearchScreen onGameDetail={() => props.navigation.navigate('GameDetail')}/>}
                        options={{
                            tabBarIcon: ({focused, color, size}) => (
                                <MaterialIcon
                                    name={"search"}
                                    size={32}
                                    color={color}
                                />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="BookmarkScreen"
                        children={() => <BookmarkScreen onGameDetail={() => props.navigation.navigate('GameDetail')} onBustineDetail={() => {props.navigation.navigate('BustineDetail')}}/>}
                        options={{
                            tabBarIcon: ({focused, color}) => (
                                <MaterialIcon
                                    name={"bookmark"}
                                    size={32}
                                    color={color}
                                />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="InboxScreen"
                        component={InboxScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => (
                                <IonIcon
                                    name={"md-chatbubble"}
                                    size={30}
                                    color={color}
                                />
                            ),
                        }}
                    />
                </Tabs.Navigator>
            </View>
        </NavigationContainer>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
