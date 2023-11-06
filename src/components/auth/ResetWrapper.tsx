import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type wrap={
    children:any
}
const ResetWrapper = (props:wrap) => {
  return (
    <View style={styles.con}>
      {props.children}
    </View>
  )
}

export default ResetWrapper

const styles = StyleSheet.create({
    con:{
        marginHorizontal:10,
        alignItems:"center",
        justifyContent:"center"
    }
})