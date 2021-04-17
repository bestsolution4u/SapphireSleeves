import {StyleSheet} from 'react-native';
import {width} from "../../../utils/scaling";

export const styles = StyleSheet.create({
    txtTitle: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        top: 12,
        fontSize: 20,
        color: 'black'
    },
    imgAvatar: {
        width: 34,
        height: 34,
        borderRadius: 40 / 2,
        position: 'absolute',
        right: 20,
        top: 8
    },
    searchContainer: {
        width: width - 40,
        height: 150,
        marginHorizontal: 20,
        borderRadius: 16,
        backgroundColor: '#884DFF',
        marginVertical: 10,
        padding: 20
    },
    searchTitle: {
        fontSize: 17,
        color: 'white',
        marginBottom: 8
    },
    searchMessage: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 15,
        marginBottom: 12
    },
    searchBox: {
        width: '100%',
        height: 50,
        backgroundColor: '#6A39DB',
        borderRadius: 16
    },
});
