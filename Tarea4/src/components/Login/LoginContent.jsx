import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import StyledEmailInput from "../StyledEmailInput";
import StyledPassInput from "../StyledPassInput";
import StyledButton from "../StyledButton";
import StyledLogoButton from "../StyledLogoButton";
import { REDIRECT_STYLES } from "../../constants/RedirectStyles";

export default function LoginContent() {
  return (
    <View style={styles.container}>
      <StyledEmailInput />
      <StyledPassInput />
      <StyledButton />
      <View style={styles.containerTextLine}>
        <Text style={styles.textLine}>Or login with</Text>
      </View>
      <View style={styles.containerButtons}>
        <StyledLogoButton text={"Google"} />
        <StyledLogoButton text={"Facebook"} />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={REDIRECT_STYLES.redirect}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "100%",
    paddingHorizontal: 25,
    paddingTop: 40,
    gap: 30,
  },
  containerTextLine: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    alignItems: "center",
  },
  textLine: {
    top: -10,
    position: "absolute",
    marginHorizontal: "auto",
    zIndex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
