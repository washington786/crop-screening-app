import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import colors from "../../globals/Colors";

import Icons from "react-native-vector-icons/Feather";
import roboto_font from "../../globals/Fonts";

type item = {
  uri: String;
  title: String;
  onClick: () => void;
};

const HistoryItem = (props: item) => {
  return (
    <Card mode="contained" style={styles.con} onPress={props.onClick}>
      <Card.Cover source={{ uri: `${props.uri}` }}/>
      <Card.Content>
        <View style={styles.date}>
          <Icons name="calendar" size={20} color={colors.grey5} />
          <Text variant="labelSmall" style={styles.dateText}>
            {props.title}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  con: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: colors.grey2,
    borderRadius:5
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
});
