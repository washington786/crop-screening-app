import { Platform, StatusBar, StyleSheet } from 'react-native'
import colors from '../globals/Colors';

const isAndroid = Platform.OS ==="android";

const SafeAreaStyle = StyleSheet.create({
    con:{
        flex:1,
        backgroundColor: colors.g_op7,
        // paddingTop: isAndroid ? StatusBar.currentHeight: 0
    }
})

export default SafeAreaStyle