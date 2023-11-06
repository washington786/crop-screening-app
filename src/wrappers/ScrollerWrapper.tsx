import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../globals/Colors'

type s={
    children: any
}
const ScrollerWrapper = (props: s) => {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      {props.children}
    </ScrollView>
  )
}

export default ScrollerWrapper

const styles = StyleSheet.create({
    content:{
        flexGrow:1,
        backgroundColor:colors.white
    },

})