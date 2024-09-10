import { StyleSheet } from "react-native";
import { Color, Fonts } from "../utils";
import { horizontalScale, moderateScale, verticalScale } from "../utils/Matrics";

const WidgetsStyle = StyleSheet.create({
    cardWrapStyle: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: moderateScale(10),
        borderRadius: moderateScale(7),
        marginVertical: verticalScale(10),
        width: '46%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: verticalScale(24)
    },
    widgetsNameStyle: {
        fontSize: moderateScale(13),
        fontFamily: Fonts.Montserrat_Regular,
        color: Color.primaryColor,
        paddingTop: verticalScale(5)
    },

    iconStyle: {
        width: moderateScale(50),
        height: moderateScale(50),
    },

});

export default WidgetsStyle;