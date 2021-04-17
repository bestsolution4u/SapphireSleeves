import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    imgAvatar: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginTop: 20
    },
    name: {
        color: '#222B45',
        fontSize: 22,
        fontWeight: '700',
        marginTop: 10
    },
    coinContainer: {
        flexDirection: 'row',
        backgroundColor: '#00B283',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        alignItems: 'center'
    },
    coinText: {
        color: 'white',
        marginRight: 10,
        fontSize: 14
    },
    buttonContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20
    },
    button: {
        flex: 1,
        height: 45,
        borderRadius: 6,
        backgroundColor: '#F7F2FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonImage: {
        width: 16,
        height: 24,
        marginRight: 10
    },
    buttonText: {
        color: '#212B4B',
        fontSize: 15
    }
});
