import { StyleSheet } from "react-native";
import { Color, Fonts } from "../utils";
import { moderateScale } from "../utils/Matrics";

const DeviceDetailsStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    text: {
        fontSize: moderateScale(16),
        color: Color.textblack,
        fontFamily: Fonts.Montserra_Medium,
        marginVertical: 10,
    },
});

export default DeviceDetailsStyle;