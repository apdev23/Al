import { StyleSheet } from "react-native";
import { Color, Fonts } from "../utils";
import { horizontalScale, moderateScale, verticalScale } from "../utils/Matrics";

const CardStyle = StyleSheet.create({
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
        padding: moderateScale(15),
        borderRadius: moderateScale(7),
        marginVertical: verticalScale(20)
    },
    doctorNameStyle: {
        fontSize: moderateScale(15),
        fontFamily: Fonts.Montserra_Medium,
        color: Color.primaryColor
    },
    countStyle: {
        fontSize: moderateScale(70),
        fontFamily: Fonts.Montserra_Medium,
        color: Color.primaryColor,
        paddingLeft: horizontalScale(10)
    },
    countBoxStyle: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    iconStyle: {
        width: moderateScale(50),
        height: moderateScale(50),
    }
});

export default CardStyle;