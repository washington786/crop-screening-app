import { StyleSheet, View } from "react-native";
import React from "react";
import AccountStyle from "../../styles/AccountStyle";
import TopScreenBar from "../../components/app/TopScreenBar";
import ScrollerWrapper from "../../wrappers/ScrollerWrapper";
import { Card, Text } from "react-native-paper";
import colors from "../../globals/Colors";
import roboto_font from "../../globals/Fonts";
import DetailsContainer from "../../components/app/DetailsContainer";

import Icons from "react-native-vector-icons/Feather";

import { Paragraph } from "react-native-paper";

const HistoryDetails = () => {
  return (
    <View style={AccountStyle.con}>
      <TopScreenBar title={"Crop Scan Details"} isBack={true} />
      <ScrollerWrapper>
        <Card mode="contained" style={styles.con}>
          <Card.Cover source={{ uri: `https://picsum.photos/700` }} />
        </Card>
        <DetailsContainer>
          <View style={styles.row}>
            <Text>Prediction</Text>
            <View style={styles.dt}>
              <Icons name="calendar" size={20} color={colors.g_op4} />
              <Text>date</Text>
            </View>
          </View>
          <View>
            <Paragraph style={styles.p}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eaque totam dignissimos ratione saepe fugiat adipisci
              officia. Sit, fugit provident!
            </Paragraph>
          </View>
        </DetailsContainer>
        <DetailsContainer>
          <View>
            <Text>Damage</Text>
            <Paragraph style={styles.p}>Status: Affected</Paragraph>
            <Paragraph style={styles.p}>Type: Wind</Paragraph>
          </View>
          <View style={styles.rec}>
            <Text>Recommendation</Text>
            <Paragraph style={styles.p}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae dolorum assumenda rem excepturi! Quas libero ea
              repellat qui accusamus sunt, est modi facere expedita aperiam
              doloremque deserunt, aspernatur quidem harum.
            </Paragraph>
          </View>
        </DetailsContainer>
      </ScrollerWrapper>
    </View>
  );
};

export default HistoryDetails;

const styles = StyleSheet.create({
  con: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: colors.grey2,
    borderRadius: 5,
  },
  date: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
    gap: 6,
  },
  dateText: {
    fontFamily: roboto_font.regular,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dt: {
    backgroundColor: colors.white,
    borderRadius: 6,
    padding: 5,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  p: {
    fontFamily: roboto_font.light,
    color: colors.grey7,
    textAlign: "justify",
  },
  rec:{
    marginVertical: 5
  }
});
