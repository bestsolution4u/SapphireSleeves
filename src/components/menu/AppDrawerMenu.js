import React from "react";
import {View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';

const AppDrawerMenu = props => {
    return (
        <TouchableOpacity activeOpacity={1} style={styles.container}>
            <TouchableOpacity activeOpacity={1} style={styles.drawer} disabled={false}>
                <ScrollView>

                </ScrollView>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    drawer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },
});

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawerMenu);
