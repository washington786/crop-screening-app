import { StyleSheet, View } from "react-native";
import React from "react";

import {SliderBox} from 'react-native-image-slider-box'

import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width;

const DashboardCarousel = () => {
  const images: Array<Object> = [
    {
      uri: "https://images.unsplash.com/photo-1511735643442-503bb3bd348a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      uri: "https://images.unsplash.com/photo-1527330772182-997f9850cab9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      uri: "https://images.unsplash.com/photo-1533576228315-348d91b938f8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      uri: "https://images.unsplash.com/photo-1592515163942-8e70c7cc1c61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <View style={styles.sliderCon}>
      <SliderBox
        images={images}
        dotColor={"green"}
        ImageComponentStyle={{ borderRadius: 0 }}
        autoplay={true}
        circleLoop
        parentWidth={width*0.97}
      />
    </View>
  );
};

export default DashboardCarousel;

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: 300,
    objectFit: "cover",
    resizeMode: "contain",
  },
  sliderCon: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
});
