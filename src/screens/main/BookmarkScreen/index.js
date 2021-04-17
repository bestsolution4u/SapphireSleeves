import React, {useState, useEffect} from "react";
import {StatusBar, View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';
import {AppStyles} from "../../../constants/appStyles";
import {default as IonIcon} from 'react-native-vector-icons/Ionicons';
import {width} from "../../../utils/scaling";

const BookmarkScreen = props => {
    const [category, setCategory] = useState('Giochi');

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
        }
    ];

    const bustines = [
        {
            "name": "Vudulhu",
            "image": {"url": "http://sapphiresleeves.redglove.eu/wp-content/uploads/2018/09/header_sito.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "http://sapphiresleeves.redglove.eu/wp-content/uploads/2018/09/header_sito.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "http://sapphiresleeves.redglove.eu/wp-content/uploads/2018/09/header_sito.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "http://sapphiresleeves.redglove.eu/wp-content/uploads/2018/09/header_sito.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "http://sapphiresleeves.redglove.eu/wp-content/uploads/2018/09/header_sito.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "http://sapphiresleeves.redglove.eu/wp-content/uploads/2018/09/header_sito.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "http://sapphiresleeves.redglove.eu/wp-content/uploads/2018/09/header_sito.jpg"},
        },
        {
            "name": "Vudulhu",
            "image": {"url": "http://sapphiresleeves.redglove.eu/wp-content/uploads/2018/09/header_sito.jpg"},
        }
    ];

    const renderGiochi = () => {
        return (
            <View style={{paddingHorizontal: 20, width: '100%'}}>
                <View
                    style={[AppStyles.row, {justifyContent: 'space-between', alignItems: 'center', marginBottom: 15}]}>
                    <Text style={{fontSize: 15, color: '#222B45'}}>Cerca Gioco</Text>
                    <IonIcon name="search" color="#8F9BB3" size={22}/>
                </View>
                <View style={{width: '100%', height: 1, backgroundColor: '#EDF1F7'}}/>
                <TouchableOpacity style={[AppStyles.row, {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 15}]}>
                    <Text style={{fontSize: 15, color: '#222B45'}}>Giochi da Proteggere</Text>
                    <View style={{width: 16, height: 16, backgroundColor: 'black', borderRadius: 16}}/>
                </TouchableOpacity>
                <View style={{width: '100%', height: 1, backgroundColor: '#EDF1F7'}}/>
                <TouchableOpacity style={[AppStyles.row, {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 15}]}>
                    <Text style={{fontSize: 15, color: '#222B45'}}>Giochi Non Protetti</Text>
                    <View style={{
                        width: 16,
                        height: 16,
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderColor: '#939393',
                        borderRadius: 16}}/>
                </TouchableOpacity>
                <Text style={{color: '#222B45', fontSize: 17, fontWeight: '600', marginVertical: 10}}>Lista</Text>
                <FlatList
                    data={games}
                    numColumns={4}
                    renderItem={renderGameItem}
                    ItemSeparatorComponent={() => {
                        return (<View style={{width: 1, height: 10}}/>);
                    }} />
                <TouchableOpacity>
                    <Text style={{fontSize: 15, textAlign: 'center', marginTop: 20, marginVertical: 105}}>Visualizza tutti</Text>
                </TouchableOpacity>
            </View>
            );
    };

    const renderGameItem = ({item, index}) => {
        return (
            <TouchableOpacity style={{
                width: (width - 70) / 4,
                aspectRatio: 1,
                borderRadius: 6,
                marginLeft: index % 4 === 0 ? 0 : 10
            }} onPress={() => props.onGameDetail()}>
                <ImageBackground
                    style={{width: '100%', aspectRatio: 1}}
                    imageStyle={{borderRadius: 6}}
                    source={{uri: item.image.url}}/>
            </TouchableOpacity>
        );
    };

    const renderBustine = () => {
        return (
            <View style={{paddingHorizontal: 20, width: '100%'}}>
                <View
                    style={[AppStyles.row, {justifyContent: 'space-between', alignItems: 'center', marginBottom: 15}]}>
                    <Text style={{fontSize: 15, color: '#222B45'}}>Cerca Bustina</Text>
                    <IonIcon name="search" color="#8F9BB3" size={22}/>
                </View>
                <View style={{width: '100%', height: 1, backgroundColor: '#EDF1F7'}}/>
                <TouchableOpacity style={[AppStyles.row, {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 15}]}>
                    <Text style={{fontSize: 15, color: '#222B45'}}>Bustine in Possesso</Text>
                    <View style={{width: 16, height: 16, backgroundColor: 'black', borderRadius: 16}}/>
                </TouchableOpacity>
                <View style={{width: '100%', height: 1, backgroundColor: '#EDF1F7'}}/>
                <TouchableOpacity style={[AppStyles.row, {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 15}]}>
                    <Text style={{fontSize: 15, color: '#222B45'}}>Bustine Mancanti</Text>
                    <View style={{
                        width: 16,
                        height: 16,
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderColor: '#939393',
                        borderRadius: 16}}/>
                </TouchableOpacity>
                <Text style={{color: '#222B45', fontSize: 17, fontWeight: '600', marginVertical: 10}}>Lista</Text>
                <FlatList
                    data={bustines}
                    numColumns={4}
                    renderItem={renderBustineItem}
                    ItemSeparatorComponent={() => {
                        return (<View style={{width: 1, height: 10}}/>);
                    }} />
                <TouchableOpacity>
                    <Text style={{fontSize: 15, textAlign: 'center', marginTop: 20, marginVertical: 105}}>Visualizza tutti</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderBustineItem = ({item, index}) => {
        return (
            <TouchableOpacity style={{
                width: (width - 70) / 4,
                aspectRatio: 1,
                borderRadius: 6,
                marginLeft: index % 4 === 0 ? 0 : 10
            }} onPress={() => props.onBustineDetail()}>
                <ImageBackground
                    style={{width: '100%', aspectRatio: 1}}
                    imageStyle={{borderRadius: 6}}
                    source={{uri: item.image.url}}/>
            </TouchableOpacity>
        );
    };

    return (
        <View style={AppStyles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Image
                        source={{uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg'}}
                        style={styles.imgAvatar}/>
                    <Text style={styles.name}>Avatar Nome</Text>
                    <View style={styles.coinContainer}>
                        <Text style={styles.coinText}>500 monetine</Text>
                        <IonIcon name='cart' size={20} color='white'/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => setCategory('Giochi')}>
                            <View style={[AppStyles.row, {alignItems: 'center'}]}>
                                <Image style={styles.buttonImage} source={require('../../../assets/images/usability.png')}/>
                                <Text style={styles.buttonText}>Giochi</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {marginLeft: 20}]} onPress={() => setCategory('Bustine')}>
                            <View style={[AppStyles.row, {alignItems: 'center'}]}>
                                <Image style={[styles.buttonImage, {width: 20, height: 16}]}
                                       source={require('../../../assets/images/folder_open.png')}/>
                                <Text style={styles.buttonText}>Bustine</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: 1, height: 30}}/>
                    {
                        category === 'Giochi' ? renderGiochi() : renderBustine()
                    }
                </View>
            </ScrollView>
        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkScreen);
