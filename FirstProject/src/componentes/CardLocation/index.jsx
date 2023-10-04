import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardSchool from "../CardSchool";

const CardLocation = ({ person }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ textAlign: "center", fontSize: 25 }}>
        Location: {person.location}
      </Text>
      <Text style={{ textAlign: "center", fontSize: 25 }}>
        Country: {person.country}
      </Text>
      <CardSchool />
    </View>
  );
};

export default CardLocation;

const styles = StyleSheet.create({});
