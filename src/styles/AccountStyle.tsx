import { StyleSheet } from "react-native";
import { Color, Fonts } from "../utils";
import { horizontalScale, moderateScale, verticalScale } from "../utils/Matrics";

const AccountStyle = StyleSheet.create({

    container: {
        flex: 1,
        padding: horizontalScale(20),
        backgroundColor: '#f5f5f5',
    },
    imageUploadButton: {
        backgroundColor: Color.primaryColor,
        padding: horizontalScale(15),
        borderRadius: moderateScale(5),
        alignItems: 'center',
        marginVertical: verticalScale(20),
    },
    imageUploadText: {
        color: '#fff',
        fontSize: moderateScale(16),
        fontWeight: '600',
    },

    profileContainer: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: moderateScale(75),
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(20),
        alignSelf: 'center',
        borderColor: '#000',
        borderWidth: 1
    },
    profileImage: {
        width: horizontalScale(100),
        height: horizontalScale(100),
        borderRadius: moderateScale(75),
    },
    placeholderText: {
        color: '#000',
        fontSize: moderateScale(16),
    },

});

export default AccountStyle;