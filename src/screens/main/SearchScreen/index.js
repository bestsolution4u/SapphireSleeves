import React from "react";
import {StatusBar, View, Text, Image, TouchableOpacity, FlatList, ImageBackground, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';
import {AppStyles} from "../../../constants/appStyles";
import SearchBar from "react-native-dynamic-search-bar";
import {default as IonIcon} from 'react-native-vector-icons/Ionicons';
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";
import {width} from "../../../utils/scaling";


const SearchScreen = props => {

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

    const renderSearchbox = () => {
        return (
            <View style={styles.searchContainer}>
                <Text style={styles.searchTitle}>Ciao, Avatar</Text>
                <Text style={styles.searchMessage}>Cerca il gioco che ti interessa</Text>
                <SearchBar
                    style={styles.searchBox}
                    fontColor="white"
                    iconColor="white"
                    cancelIconColor="white"
                    backgroundColor="#6A39DB"
                    placeholder="Ricerca"
                    darkMode={true}
                    onChangeText={(text) => {
                    }}
                    onSearchPress={() => console.log("Search Icon is pressed")}
                    onClearPress={() => {
                    }}
                    onPress={() => alert("onPress")}
                />
            </View>
        );
    };

    const renderSearchResult = () => {
        return (
            <View style={{marginVertical: 10}}>
                <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                    <Text style={{fontSize: 17, color: '#222B45', fontWeight: '600'}}>Risultato Ricerca</Text>
                    <View style={{flex: 1}}/>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, color: '#8F9BB3'}}>Visualizza tutti</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={games}
                    renderItem={renderSearchResultItem}
                    keyExtractor={(item, index) => index}/>
            </View>
        );
    };

    const renderSearchResultItem = ({item, index}) => {
        return (
            <TouchableOpacity style={{
                width: 270,
                height: 215,
                backgroundColor: 'white',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 10,
                marginVertical: 20,
                marginRight: 20,
                marginLeft: index === 0 ? 20 : 0
            }} onPress={() => {props.onGameDetail();}}>
                <ImageBackground
                    style={{width: '100%', height: 145}}
                    imageStyle={{borderTopLeftRadius: 12, borderTopRightRadius: 12}}
                    source={{uri: item.image.url}}>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        padding: 10,
                        backgroundColor: rgbaColor(16, 38, 21, 0.17),
                        borderRadius: 10
                    }}>
                        <IonIcon color='white' name='bookmark-outline' size={20}/>
                    </TouchableOpacity>
                </ImageBackground>
                <Text style={{
                    marginHorizontal: 16,
                    marginVertical: 8,
                    fontWeight: '600',
                    color: '#222B45',
                    fontSize: 15
                }}>Loch Ness</Text>
                <View style={{marginHorizontal: 16, flexDirection: 'row'}}>
                    <IonIcon name='cart' size={20} color='#212B4B'/>
                    <Text style={{fontSize: 13, color: '#8F9BB3', marginHorizontal: 4}}>Acquista</Text>
                    <View style={{flex: 1}}/>
                    <Text style={{color: '#000000', fontSize: 15, fontWeight: '600'}}>€ 44.05</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderSuggestions = () => {
        return (
            <View>
                <View style={{flexDirection: 'row', marginHorizontal: 20, marginVertical: 20}}>
                    <Text style={{fontSize: 17, color: '#222B45', fontWeight: '600'}}>Giochi Suggeriti Per Te</Text>
                    <View style={{flex: 1}}/>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, color: '#8F9BB3'}}>Visualizza tutti</Text>
                    </TouchableOpacity>
                </View>
                {
                    games.map((value, index) => (
                        <TouchableOpacity style={{
                            width: width - 40,
                            marginHorizontal: 20,
                            height: 120,
                            backgroundColor: 'white',
                            borderRadius: 12,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 5},
                            shadowOpacity: 0.1,
                            shadowRadius: 20,
                            elevation: 6,
                            marginBottom: index < games.length - 1 ? 20 : 120,
                            flexDirection: 'row'
                        }} onPress={() => {props.onGameDetail()}}>
                            <ImageBackground
                                style={{width: 120, height: 120, marginRight: 20}}
                                imageStyle={{borderTopLeftRadius: 12, borderBottomLeftRadius: 12}}
                                source={{uri: value.image.url}} />
                                <View style={{flex: 1, paddingRight: 20}}>
                                    <Text style={{fontSize: 15, color: '#222B45', marginTop: 10}}>Il Mio Safari</Text>
                                    <Text style={{fontSize: 13, color: '#8F9BB3', marginTop: 10}}>Descrizione de il gioco Il Mio Safari, qui su due righe</Text>
                                    <View style={{flexDirection: 'row', marginTop: 10}}>
                                        <IonIcon name='cart' size={20} color='#212B4B'/>
                                        <Text style={{fontSize: 13, color: '#8F9BB3', marginHorizontal: 4}}>Acquista</Text>
                                        <View style={{flex: 1}}/>
                                        <Text style={{color: '#000000', fontSize: 15, fontWeight: '600'}}>€ 44.05</Text>
                                    </View>
                                </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    };

    return (
        <View style={AppStyles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
            <View style={AppStyles.header}>
                <Text style={styles.txtTitle}>Cerca Giochi</Text>
                <Image
                    source={{uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg'}}
                    style={styles.imgAvatar}/>
            </View>
            <ScrollView>
                {renderSearchbox()}
                {renderSearchResult()}
                {renderSuggestions()}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
