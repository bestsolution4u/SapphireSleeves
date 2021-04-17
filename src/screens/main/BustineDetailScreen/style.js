import {StyleSheet} from 'react-native';
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";
import {width} from "../../../utils/scaling";

export const styles = StyleSheet.create({
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        position: 'absolute',
        top: 180,
        zIndex: 100,
        borderWidth: 2,
        borderColor: 'white'
    },
    headerImage: {
        width: '100%',
        height: 235
    },
    backIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: '700',
        marginTop: 70,
        color: '#222B45'
    },
    description: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        color: '#8F9BB3',
        paddingHorizontal: 30
    },
    itemContainer: {
        width: width - 40,
        marginHorizontal: 20,
        height: 90,
        backgroundColor: 'white',
        marginBottom: 20,
        flexDirection: 'row'
    },
    itemImage: {
        width: 120,
        height: 90,
        marginRight: 20
    },
    itemTitle: {
        fontSize: 15,
        color: '#222B45',
        fontWeight: '600'
    },
    itemDesc: {
        fontSize: 13,
        color: '#8F9BB3',
        marginTop: 8
    },
    itemScore: {
        color: '#933EFF',
        fontSize: 15,
        fontWeight: '600'
    },
    itemStatus: {
        fontSize: 10,
        color: '#8F9BB3',
        marginHorizontal: 10
    }
});
