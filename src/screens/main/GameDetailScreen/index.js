import React, {useState} from "react";
import {Image, ImageBackground, TouchableOpacity, View, Text, ScrollView, FlatList} from "react-native"
import {connect} from 'react-redux';
import {styles} from './style';
import {AppStyles} from "../../../constants/appStyles";
import {default as IonIcon} from "react-native-vector-icons/Ionicons";
import {default as SimpleLineIcon} from "react-native-vector-icons/SimpleLineIcons";
import {default as AntDesignIcon} from "react-native-vector-icons/AntDesign";
import {width} from "../../../utils/scaling";


const GameDetailScreen = props => {
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
                    source={{uri: "https://cdna.artstation.com/p/assets/images/images/008/065/080/large/ferdinando-batistini-vudulhu.jpg"}}>
                    <View style={[styles.headerImage, {backgroundColor: 'rgba(0, 0, 0, 0.2)'}]}>
                        <TouchableOpacity style={styles.backIcon} onPress={() => {props.navigation.goBack()}}>
                            <IonIcon color='white' name='arrow-back' size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bookmarkIcon}>
                            <IonIcon color='white' name='bookmark-outline' size={22}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Image
                    source={{uri: 'https://cdna.artstation.com/p/assets/images/images/008/065/080/large/ferdinando-batistini-vudulhu.jpg'}}
                    style={[styles.avatar, {left: (width - 110) / 2}]}/>
                <Text style={styles.title}>Sapphire Bustina Verde</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </Text>
                <View style={styles.followerContainer}>
                    <Text style={styles.followerText}>&#60;4</Text>
                    <SimpleLineIcon style={{marginHorizontal: 10}} name='people' color='#212B4B' size={20} />
                    <Text style={styles.followerText}>+3</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={[styles.categoryButton, {backgroundColor: category === 'Gioco' ? '#24B544' : '#F4F4F4'}]} onPress={() => {setCategory('Gioco')}}>
                        <View style={styles.categoryCheckbox}>
                            {
                                category === 'Gioco' && <IonIcon name='checkmark' size={25} color='#212B4B' />
                            }
                        </View>
                        <Text style={[styles.categoryText, {color: category === 'Gioco' ? 'white' : '#8F9BB3'}]}>Proteggi{'\n'}Gioco</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoryButton, {backgroundColor: category === 'Proteggere' ? '#24B544' : '#F4F4F4', marginLeft: 20}]}  onPress={() => {setCategory('Proteggere')}}>
                        <View style={styles.categoryCheckbox}>
                            {
                                category === 'Proteggere' && <IonIcon name='checkmark' size={25} color='#212B4B' />
                            }
                        </View>
                        <Text style={[styles.categoryText, {color: category === 'Proteggere' ? 'white' : '#8F9BB3'}]}>Non{'\n'}Proteggere</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: 1, height: 20}} />
                {
                    games.map((value, index) => (
                        <TouchableOpacity style={styles.itemContainer} onPress={() => {props.navigation.navigate('BustineDetail')}}>
                            <ImageBackground
                                style={styles.itemImage}
                                source={{uri: value.image.url}} />
                            <View style={{flex: 1}}>
                                <Text style={styles.itemTitle}>Bustine Platinum</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameDetailScreen);
