import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginHorizontal: 20
    },
    name: {
        fontSize: 15,
        color: '#222B45'
    },
    inputContainer: {
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        marginBottom: 10,
        flexDirection: 'row'
    },
    inputText: {
        color: '#222B45',
        marginHorizontal: 20,
        textAlignVertical: 'center',
        fontSize: 15,
        flex: 1
    },
    attachContainer: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    attachTypeContainer: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#EDF1F7',
        paddingHorizontal: 20,
    },
    attachTypeItemContainer: {
        alignItems: 'center',
        marginRight: 30
    },
    attachTypeItemIcon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#C5CEE0',
        borderRadius: 8
    },
    attachTypeItemText: {
        color: '#C5CEE0',
        fontSize: 12,
        marginTop: 4
    },
    attachContentContainer: {
        padding: 20
    },
    myMessageTextContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 6,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: 10,
        marginRight: 10
    },
    myMessageText: {
        flexShrink: 1,
        color: '#222B45',
        fontSize: 15
    },
    yourMessageTextContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#0095FF',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginLeft: 10
    },
    yourMessageText: {
        flexShrink: 1,
        color: 'white',
        fontSize: 15
    },
    yourMessageImageContainer: {
        padding: 20,
        width: 220,
        height: 170,
        backgroundColor: '#C5CEE0',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 16,
        marginBottom: 10,
        marginLeft: 10
    }
});
