import { StyleSheet } from "react-native";
import colors from "../globals/Colors";
import roboto_font from "../globals/Fonts";

const ButtonsStyles = StyleSheet.create({
    contained:{
        backgroundColor:colors.g_op7,
        borderRadius:5,
        paddingVertical:5,
        marginVertical:8
    },
    outlined:{
        borderRadius:5,
        paddingVertical:5,
        marginVertical:8
    },
    labelOutline:{
        textTransform:"uppercase",
        color:colors.grey6,
        fontSize:20,
        fontFamily: roboto_font.regular,
    },
    labelContained:{
        textTransform:"uppercase",
        color:colors.white,
        fontSize:18,
        fontFamily: roboto_font.regular,
    }
});
export default ButtonsStyles;
