import React from "react";
import { View, StyleSheet, Text } from "react-native";

const WelcomeComponent = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome To Vouch Challenge</Text>
        <View>
          <Text
            style={styles.button}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "indigo",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    margin: 15,
    color: "white",
    backgroundColor: "indigo",
    borderRadius: 5,
  },
});

export default WelcomeComponent;
