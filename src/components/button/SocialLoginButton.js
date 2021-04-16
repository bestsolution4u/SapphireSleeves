import React, {memo} from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
import {default as FontAwesomeIcon} from 'react-native-vector-icons/FontAwesome';
import {default as MaterialCommunityIcon} from 'react-native-vector-icons/MaterialCommunityIcons';

const SocialLoginButton = memo(({onPress, type}) => {
    let text = type === 'google' ? 'Continue with Google' : type === 'facebook' ? 'Continue with Facebook' : 'Continue with Email';
    let color = type === 'google' ? 'white' : type === 'facebook' ? '#2d4789' : '#bc6609';
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: color}]} onPress={onPress}>
            {
                type === 'google' &&
                <Image
                    style={{height: 25, width: 25}}
                    source={require('../../assets/images/google_icon.png')}
                />
            }
            {
                type === 'facebook' &&
                <FontAwesomeIcon name="facebook-official" size={25} color={'white'}/>
            }
            {
                type === 'email' &&
                <MaterialCommunityIcon name="email-outline" size={25} color={'white'}/>
            }
            <Text style={[styles.txtTitle, {color: type === 'google' ? 'black' : 'white'}]}>{text}</Text>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    container: {
        width: width - 60,
        borderRadius: 8,
        marginVertical: 5,
        paddingHorizontal: 15,
        paddingVertical: 12,
        flexDirection: 'row',
        borderColor: '#ddddde',
        borderWidth: 1,
        alignItems: 'center',
    },
    txtTitle: {
        fontSize: 14,
        marginLeft: 10
    }
});

export default SocialLoginButton;
