import { View } from "react-native";
import React from "react";
import HistoryStyle from "../../styles/HistoryStyle";
import TopScreenBar from "../../components/app/TopScreenBar";
import HistoryList from "../../components/app/HistoryList";

const History = () => {
  return (
    <View style={HistoryStyle.con}>
      <TopScreenBar title={"My History"} isBack={false} />
      <HistoryList />
    </View>
  );
};

export default History;
