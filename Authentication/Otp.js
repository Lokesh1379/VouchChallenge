import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
const OTPComponent = ({ getCode, phone, confirmCode, resend }) => {
  const [code, setCode] = useState(null);
  getCode(code);

  return (
    <>
      <View style={{ marginTop: "10%" }}>
        <View style={styles.container}>
          <Text>OTP sent TO</Text>
          <Text style={{ fontWeight: "bold" }}> +91 {phone} </Text>
        </View>
        <View>
          <View
            style={{
              grid: 1,
              width: "100%",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Enter OTP"
              onChangeText={setCode}
              keyboardType="number-pad"
              maxLength={6}
              style={styles.textInput}
            />
          </View>
          <View style={styles.container}>
            <Text>Didn't get the OTP? </Text>
            <Text
              style={{
                color: "red",
                fontWeight: "bold",
              }}
              onPress={resend}
            >
              RESEND OTP
            </Text>
          </View>
          <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
            <Text style={styles.v_button}>Verify & Procced</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  v_button: {
    textAlign: "center",
    padding: "5%",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "indigo",
    width: "70%",
    borderRadius: 30,
    position: "absolute",
    bottom: "0%",
  },
  sendCode: {
    padding: 15,
    borderRadius: 30,
    grid: 1,
    alignItems: "center",
    marginTop: "70%",
  },

  textInput: {
    paddingTop: 40,
    paddingBottom: 5,
    paddingHorizontal: 20,
    fontSize: 24,
    borderBottomColor: "silver",
    borderBottomWidth: 2,
    marginBottom: 20,
    textAlign: "center",
    width: "40%",
  },
  container: {
    grid: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default OTPComponent;
