import React, {useState} from "react";
import {Image, ImageBackground, TouchableOpacity, View, Text, ScrollView, FlatList} from "react-native"
import {connect} from 'react-redux';
import {styles} from './style';
import {AppStyles} from "../../../constants/appStyles";
import {default as IonIcon} from "react-native-vector-icons/Ionicons";
import {default as SimpleLineIcon} from "react-native-vector-icons/SimpleLineIcons";
import {default as AntDesignIcon} from "react-native-vector-icons/AntDesign";
import {width} from "../../../utils/scaling";


const BustineDetailScreen = props => {
    const [category, setCategory] = useState('Gioco');

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

    return (
        <ScrollView>
            <View style={[AppStyles.container, {alignItems: 'center'}]}>
                <ImageBackground
                    style={styles.headerImage}
                    source={{uri: "http://sapphiresleeves.redglove.eu/wp-content/uploads/2018/09/header_sito.jpg"}}>
                    <View style={[styles.headerImage, {backgroundColor: 'rgba(0, 0, 0, 0.2)'}]}>
                        <TouchableOpacity style={styles.backIcon} onPress={() => {props.navigation.goBack()}}>
                            <IonIcon color='white' name='arrow-back' size={25}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Image
                    source={{uri: 'http://sapphiresleeves.redglove.eu/wp-content/uploads/2018/09/header_sito.jpg'}}
                    style={[styles.avatar, {left: (width - 110) / 2}]}/>
                <Text style={styles.title}>Loch Ness</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </Text>
                <View style={{width: 1, height: 20}} />
                {
                    games.map((value, index) => (
                        <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
                            <ImageBackground
                                style={styles.itemImage}
                                source={{uri: value.image.url}} />
                            <View style={{flex: 1}}>
                                <Text style={styles.itemTitle}>Vudulhu</Text>
                                <Text style={styles.itemDesc}>Descrizione bustina su due righe da inserire qui</Text>
                                <View style={{flexDirection: 'row', marginTop: 6, alignItems: 'center'}}>
                                    <Text style={styles.itemScore}>0/20</Text>
                                    <Text style={styles.itemStatus}>in possesso</Text>
                                    <TouchableOpacity>
                                        <AntDesignIcon name='plussquareo' size={20} color='#212B4B'/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BustineDetailScreen);
