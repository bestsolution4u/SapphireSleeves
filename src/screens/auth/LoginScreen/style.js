import {StyleSheet} from 'react-native';
import {verticalScale} from "../../../utils/scaling";

export const styles = StyleSheet.create({
    txtWelcome: {
        fontWeight: "400",
        fontSize: verticalScale(22),
        lineHeight: 26,
        color: '#8F9BB3'
    },
    txtLogin: {
        fontWeight: "700",
        fontSize: verticalScale(20),
        lineHeight: 32,
        color: '#000000',
        marginBottom: verticalScale(60)
    },

});
