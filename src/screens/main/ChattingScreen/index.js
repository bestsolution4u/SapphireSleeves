import React, {useState} from "react";
import {
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Image,
    Animated,
    TextInput, FlatList, ImageBackground
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './style';
import {AppStyles} from "../../../constants/appStyles";
import {default as AntDesignIcon} from "react-native-vector-icons/AntDesign";
import {default as IonIcon} from "react-native-vector-icons/Ionicons";
import {default as EntypoIcon} from "react-native-vector-icons/Entypo";
import {default as FoundationIcon} from "react-native-vector-icons/Foundation";
import {ATTACH_TYPE} from "../../../constants/appConsts";
import EmojiSelector from "../../../libraries/emoji/emojiSelector";
import {width} from "../../../utils/scaling";
import MessageItem from "../../../models/messageItem";

const ChattingScreen = props => {

    const [addItem, setItem] = useState(false);
    const [animate, setAnimate] = useState(0);
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([
        new MessageItem("You", "Me", "", "image"),
        new MessageItem("You", "Me", "Ciao suggerimento", "text"),
        new MessageItem("Me", "You", "Salve, le faremo sapere", "text"),
    ]);
    const [files, setFiles] = useState([]);
    const [attachType, setAttachType] = useState(ATTACH_TYPE.PHOTO);
    const [fadeAnim] = useState(new Animated.Value(0));

    const photos = [0, 1, 2, 3, 4, 5, 6, 7];

    const firstAnimation = () => {
        setItem(true);
        setAnimate(1);
        Animated.spring(
            fadeAnim,
            {
                toValue: 1,
                friction: 5
            }
        ).start();
    };

    const closeAnimation = () => {
        setItem(false);
        setAnimate(1);
        Animated.spring(
            fadeAnim,
            {
                toValue: 0,
                friction: 7
            }
        ).start();
    };

    const menu_moveY = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0]
    });

    const renderAttachTypeItem = type => {
        const bgColor = type === attachType ? '#0095FF' : 'white';
        const borderColor = type === attachType ? 'white' : '#C5CEE0';
        const iconColor = type === attachType ? 'white' : '#C5CEE0';
        return (
            <View style={styles.attachTypeItemContainer}>
                <TouchableOpacity
                    style={[styles.attachTypeItemIcon, {backgroundColor: bgColor, borderColor: borderColor}]}
                    onPress={() => setAttachType(type)}>
                    {type === ATTACH_TYPE.EMOJI && <EntypoIcon name='emoji-happy' color={iconColor} size={16}/>}
                    {type === ATTACH_TYPE.PHOTO && <FoundationIcon name='photo' color={iconColor} size={16}/>}
                    {type === ATTACH_TYPE.VIDEO && <EntypoIcon name='video' color={iconColor} size={16}/>}
                    {type === ATTACH_TYPE.LINK && <EntypoIcon name='link' color={iconColor} size={16}/>}
                    {type === ATTACH_TYPE.FILE && <AntDesignIcon name='filetext1' color={iconColor} size={16}/>}
                    {type === ATTACH_TYPE.NOTE && <AntDesignIcon name='profile' color={iconColor} size={16}/>}
                </TouchableOpacity>
                <Text style={styles.attachTypeItemText}>{type}</Text>
            </View>
        );
    };

    const renderAttachContent = () => {
        switch (attachType) {
            case ATTACH_TYPE.EMOJI:
                return renderEmojiAttach();
            case ATTACH_TYPE.PHOTO:
                return renderPhotoAttach();
            case ATTACH_TYPE.VIDEO:
                return renderVideoAttach();
            case ATTACH_TYPE.LINK:
                return renderLinkAttach();
            case ATTACH_TYPE.FILE:
                return renderFileAttach();
            case ATTACH_TYPE.NOTE:
                return renderNoteAttach();
            default:
                return renderEmojiAttach();
        }
    };

    const renderEmojiAttach = () => {
        return (
            <EmojiSelector
                onEmojiSelected={emoji => setMessage(message + emoji)}
                showTabs={true}
                columns={8}
                style={{height: 200}}
                showHistory={true}
                showSearchBar={false}
                showSectionTitles={false}
            />
        );
    };

    const renderPhotoAttach = () => {
        return (
            <FlatList
                data={photos}
                numColumns={4}
                renderItem={renderPhotoAttachItem}
                ItemSeparatorComponent={() => {
                    return (<View style={{width: 1, height: 10}}/>);
                }}/>
        );
    };

    const renderPhotoAttachItem = ({item, index}) => {
        if (index === 0) return (
            <TouchableOpacity style={{
                width: (width - 70) / 4,
                aspectRatio: 1,
                borderRadius: 12,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#EDF1F7',
                borderStyle: 'dashed',
                marginLeft: index % 4 === 0 ? 0 : 10,
                alignItems: 'center',
                justifyContent: 'center'
            }} onPress={() => {
            }}>
                <IonIcon name='camera-outline' size={36} color='#8F9BB3'/>
            </TouchableOpacity>
        );
        else return (
            <TouchableOpacity style={{
                width: (width - 70) / 4,
                aspectRatio: 1,
                borderRadius: 12,
                backgroundColor: '#C5CEE0',
                marginLeft: index % 4 === 0 ? 0 : 10
            }} onPress={() => {
            }}>
                <View style={{width: '100%', aspectRatio: 1}}/>
            </TouchableOpacity>
        );
    };

    const renderVideoAttach = () => {
        return (
            <FlatList
                data={photos}
                numColumns={4}
                renderItem={renderVideoAttachItem}
                ItemSeparatorComponent={() => {
                    return (<View style={{width: 1, height: 10}}/>);
                }}/>
        );
    };

    const renderVideoAttachItem = ({item, index}) => {
        if (index === 0) return (
            <TouchableOpacity style={{
                width: (width - 70) / 4,
                aspectRatio: 1,
                borderRadius: 12,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#EDF1F7',
                borderStyle: 'dashed',
                marginLeft: index % 4 === 0 ? 0 : 10,
                alignItems: 'center',
                justifyContent: 'center'
            }} onPress={() => {
            }}>
                <IonIcon name='videocam-outline' size={36} color='#8F9BB3'/>
            </TouchableOpacity>
        );
        else return (
            <TouchableOpacity style={{
                width: (width - 70) / 4,
                aspectRatio: 1,
                borderRadius: 12,
                backgroundColor: '#C5CEE0',
                marginLeft: index % 4 === 0 ? 0 : 10
            }} onPress={() => {
            }}>
                <View style={{width: '100%', aspectRatio: 1}}/>
            </TouchableOpacity>
        );
    };

    const renderLinkAttach = () => {
        return (<View></View>);
    };

    const renderFileAttach = () => {
        return (<View></View>);
    };

    const renderNoteAttach = () => {
        return (<View></View>);
    };

    const sendMessage = () => {
        setMessage("");
    };

    const renderInput = () => {
        return (
            <KeyboardAvoidingView enabled>
                <Animated.View style={{backgroundColor: 'transparent', transform: [{translateY: menu_moveY}]}}>
                    <View style={styles.inputContainer}>
                        {addItem ?
                            <TouchableOpacity onPress={() => closeAnimation()}>
                                <AntDesignIcon name="close" size={20} color='#0095FF'/>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => firstAnimation()}>
                                <EntypoIcon name="attachment" size={20} color='#0095FF'/>
                            </TouchableOpacity>
                        }
                        <TextInput
                            placeholder='Type your message...'
                            placeholderTextColor='#8F9BB3'
                            value={message}
                            onChangeText={(val) => setMessage(val)}
                            style={styles.inputText}/>
                        <TouchableOpacity onPress={() => sendMessage()}>
                            <IonIcon name="send" size={20} color='#0095FF'/>
                        </TouchableOpacity>
                    </View>
                    {addItem &&
                    <View style={styles.attachContainer}>
                        <View style={styles.attachContentContainer}>
                            {renderAttachContent()}
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}
                                    style={styles.attachTypeContainer}>
                            {renderAttachTypeItem(ATTACH_TYPE.EMOJI)}
                            {renderAttachTypeItem(ATTACH_TYPE.PHOTO)}
                            {renderAttachTypeItem(ATTACH_TYPE.VIDEO)}
                            {renderAttachTypeItem(ATTACH_TYPE.LINK)}
                            {renderAttachTypeItem(ATTACH_TYPE.FILE)}
                            {renderAttachTypeItem(ATTACH_TYPE.NOTE)}
                        </ScrollView>
                    </View>
                    }
                </Animated.View>
            </KeyboardAvoidingView>
        );
    };

    const renderMessageItem = (messageItem) => {
        if (messageItem.sender === 'Me') return renderMyMessageItem(messageItem);
        else return renderYourMessageItem(messageItem);
    };

    const renderMyMessageItem = (item) => {
        return (
            <View style={styles.myMessageTextContainer}>
                <Text style={styles.myMessageText}>{item.message}</Text>
            </View>
        );
    };

    const renderYourMessageItem = (item) => {
        if (item.type === "image") return renderYourImageMessageItem(item);
        else return renderYourTextMessageItem(item);
    };

    const renderYourTextMessageItem = (item) => {
        return (
            <View style={styles.yourMessageTextContainer}>
                <Text style={styles.yourMessageText}>{item.message}</Text>
            </View>
        );
    };

    const renderYourImageMessageItem = (item) => {
        return (
            <View style={styles.yourMessageImageContainer}>
            </View>
        );
    };

    return (
        <View style={AppStyles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
            <View style={[AppStyles.header, {paddingHorizontal: 20}]}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <AntDesignIcon name='arrowleft' color='#212B4B' size={20}/>
                </TouchableOpacity>
                <Image source={{uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"}}
                       style={styles.avatar}/>
                <Text style={styles.name}>Red Glove</Text>
                <View style={{flex: 1}}/>
                <TouchableOpacity>
                    <IonIcon name='ellipsis-horizontal-outline' color='#8F9BB3' size={20}/>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
                <ScrollView style={{paddingVertical: 20}}>
                    {
                        chatHistory.map((value, index) => renderMessageItem(value))
                    }
                </ScrollView>
                {renderInput()}
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
