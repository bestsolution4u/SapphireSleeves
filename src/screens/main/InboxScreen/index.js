import React from "react";
import {
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    TouchableHighlight,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';
import {AppStyles} from "../../../constants/appStyles";
import {default as AntDesignIcon} from "react-native-vector-icons/AntDesign";

const InboxScreen = props => {

    const messages = [
        {
            "name": "Test",
            "avatar": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
            "message": "Risposta testo",
            "time": "17:32 PM"
        },
        {
            "name": "Test2",
            "avatar": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
            "message": "Testo risposta",
            "time": "Ieri"
        },
        {
            "name": "Test3",
            "avatar": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
            "message": "Arrivederci",
            "time": "Lunedi"
        },
    ];

    const renderMessage = ({item}) => {
        return (
            <TouchableHighlight underlayColor={'#F7F2FF'} style={styles.itemContainer}
                                onPress={() => props.homeStackNav.navigate('Chatting')}>
                <View style={[AppStyles.row, {width: '100%'}]}>
                    <Image source={{uri: item.avatar}} style={styles.avatar}/>
                    <View style={styles.itemNameContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemMessage}>{item.message}</Text>
                    </View>
                    <View style={styles.itemTimeContainer}>
                        <AntDesignIcon name='star' color='#FFCF00' size={16}/>
                        <Text style={styles.itemTime}>{item.time}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    return (
        <View style={AppStyles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
            <View style={AppStyles.header}>
                <Text style={styles.title}>Area Suggerimenti</Text>
                <View style={{flex: 1}}/>
                <TouchableOpacity style={styles.plusButton}>
                    <AntDesignIcon name='plus' color='#884DFF' size={20}/>
                </TouchableOpacity>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>Storico</Text>
                <View style={styles.subtitleUnderline}/>
                <View style={styles.subtitleDivider}/>
            </View>
            <FlatList
                style={{width: '100%'}}
                data={messages}
                contentContainerStyle={{paddingBottom: 100}}
                renderItem={renderMessage}/>
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
