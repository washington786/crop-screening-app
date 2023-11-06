import { StyleSheet } from 'react-native'
import roboto_font from '../globals/Fonts';

const LoginStyles = StyleSheet.create({
    forgotBtnTxt:{
        marginVertical:8,
        textTransform: "capitalize",
        fontFamily: roboto_font.medium
    },
    inputs:{
        marginVertical: 5
    }
});

export default LoginStyles;