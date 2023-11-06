import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../globals/Colors'

type wrap={
    children: any
}

const AuthWrapper = (props: wrap) => {
  return (
    <View style={styles.con}>
      {props.children}
    </View>
  )
}

export default AuthWrapper

const styles = StyleSheet.create({
    con:{
        flex: 1,
        backgroundColor: colors.g_op7,
        position: "relative"
    }
})