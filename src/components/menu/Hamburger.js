import React from "react";
import {View, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import {connect} from 'react-redux';

const Hamburger = props => {
    const {navigation} = props;
    return (
        <TouchableOpacity style={styles.touchableHighlight} onPress={navigation ? () => navigation.dispatch(DrawerActions.openDrawer()) : () => { }}>
            <Image style={styles.image} source={require('../../assets/images/hamburger.png')} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchableHighlight: {
        position: 'absolute',
        top: 18,
        left: 20,
        zIndex: 1
    },
    image: {
        width: 22,
        height: 13
    },
});

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
