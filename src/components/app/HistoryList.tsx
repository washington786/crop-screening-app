import { FlatList, StyleSheet } from "react-native";
import React from "react";
import HistoryItem from "./HistoryItem";
import { useNavigation } from "@react-navigation/native";

const HistoryList = () => {
  const data = [
    {
      uri: "https://picsum.photos/700",
      date: new Date(Date.now()),
      id: 1,
    },
  ];
  const navigation = useNavigation();

  function transitToHistoryDetails() {
    navigation.navigate("details");
  }
  return (
    <FlatList
      data={data}
      renderItem={(item) => {
        return (
          <HistoryItem
            onClick={transitToHistoryDetails}
            title={item.item.date.toLocaleDateString("en-SA", {
              month: "2-digit",
              year: "2-digit",
              minute: "2-digit",
              hour: "2-digit",
              hourCycle: "h24",
              dateStyle: "full",
            })}
            uri={item.item.uri}
          />
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default HistoryList;

const styles = StyleSheet.create({});
