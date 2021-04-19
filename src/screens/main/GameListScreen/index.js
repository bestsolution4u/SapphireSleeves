import React from "react";
import {StatusBar, View, Text, Image, FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';
import {AppStyles} from "../../../constants/appStyles";

const GameListScreen = props => {
    const games = [
        {
            "name": "Vudulhu",
            "image": {"url": "https://cdna.artstation.com/p/assets/images/images/008/065/080/large/ferdinando-batistini-vudulhu.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "https://cdna.artstation.com/p/assets/images/images/008/065/080/large/ferdinando-batistini-vudulhu.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "https://cdna.artstation.com/p/assets/images/images/008/065/080/large/ferdinando-batistini-vudulhu.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "https://cdna.artstation.com/p/assets/images/images/008/065/080/large/ferdinando-batistini-vudulhu.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "https://cdna.artstation.com/p/assets/images/images/008/065/080/large/ferdinando-batistini-vudulhu.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "https://cdna.artstation.com/p/assets/images/images/008/065/080/large/ferdinando-batistini-vudulhu.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "https://cdna.artstation.com/p/assets/images/images/008/065/080/large/ferdinando-batistini-vudulhu.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "https://cdna.artstation.com/p/assets/images/images/008/065/080/large/ferdinando-batistini-vudulhu.jpg"},
        },
    ];

    const renderGame = ({item}) => {
        return (
            <TouchableOpacity style={{marginVertical: 5, borderRadius: 4}} onPress={() => props.homeStackNav.navigate('GameDetail')}>
                <ImageBackground
                    style={{width: '100%', height: 160}}
                    imageStyle={{borderRadius: 4}}
                    source={{uri: item.image.url}}>
                    <Text style={{color: 'white', top: 20, left: 20, fontSize: 24, zIndex: 1}}>{item.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    return (
        <View style={AppStyles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
            <View style={AppStyles.header}>
                <Text style={styles.txtTitle}>I Miei Giochi</Text>
                <Image
                    source={{uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg'}}
                    style={styles.imgAvatar}/>
            </View>
            <FlatList
                style={{width: '100%', paddingHorizontal: 25}}
                data={games}
                contentContainerStyle={{ paddingBottom: 100 }}
                renderItem={renderGame}
            />
        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameListScreen);
