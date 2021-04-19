import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    title: {
        color: '#222B45',
        fontWeight: '700',
        fontSize: 26,
        marginLeft: 60
    },
    plusButton: {
        padding: 8,
        marginRight: 6
    },
    subtitleContainer: {
        marginVertical: 30
    },
    subtitleText: {
        fontSize: 22,
        fontWeight: '500',
        color: 'black',
        marginLeft: 20,
        marginBottom: 5
    },
    subtitleUnderline: {
        marginLeft: 20,
        width: 60,
        height: 1,
        backgroundColor: '#884DFF'
    },
    subtitleDivider: {
        width: '100%',
        height: 1,
        backgroundColor: '#EDF1F7'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },
    itemContainer: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        width: '100%'
    },
    itemNameContainer: {
        marginHorizontal: 10,
        flex: 1
    },
    itemName: {
        fontSize: 15,
        color: '#222B45'
    },
    itemMessage: {
        fontSize: 13,
        color: '#8F9BB3',
        marginTop: 4
    },
    itemTimeContainer: {
        marginRight: 10,
        alignItems: 'flex-end'
    },
    itemTime: {
        fontSize: 13,
        color: '#8F9BB3',
        marginTop: 2
    }
});
