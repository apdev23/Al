import { StyleSheet } from "react-native";
import { Color, Fonts } from "../utils";
import { horizontalScale, moderateScale, verticalScale } from "../utils/Matrics";

const HomeScreenStyle = StyleSheet.create({
    headerTitle: {
        fontSize: moderateScale(17),
        fontFamily: Fonts.Montserrat_Bold,
        color: Color.secondaryColor
    },
    container: {
        paddingHorizontal: horizontalScale(20),
        paddingTop: verticalScale(25)
    },
    widgetsBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default HomeScreenStyle;