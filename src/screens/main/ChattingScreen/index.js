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
import {default as IonIcon} from "react-native-vector-icons/Ionicons";

const ChattingScreen = props => {
    return (
        <View style={AppStyles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
            <View style={[AppStyles.header, {paddingHorizontal: 20}]}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <AntDesignIcon name='arrowleft' color='#212B4B' size={20}/>
                </TouchableOpacity>
                <Image source={{uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"}} style={styles.avatar}/>
                <Text style={styles.name}>Red Glove</Text>
                <View style={{flex: 1}} />
                <TouchableOpacity>
                    <IonIcon name='ellipsis-horizontal-outline' color='#8F9BB3' size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChattingScreen);
