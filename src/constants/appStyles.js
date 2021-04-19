import {StyleSheet} from 'react-native';

export const AppStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    }
});
