import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardId = ({ person }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ textAlign: "center", fontSize: 25 }}>ID: {person.id}</Text>
    </View>
  );
};

export default CardId;

const styles = StyleSheet.create({});
