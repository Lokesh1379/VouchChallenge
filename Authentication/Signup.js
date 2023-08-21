import { useRef, useState } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat";
import { db, firebaseConfig } from "../config";
import { ref, set } from "firebase/database";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import OTPComponent from "./Otp";
export default function SignUpComponent({ navigation }) {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [username, setUsername] = useState("");
  const [referrel, setReferrel] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  const [code, setCode] = useState(null);
  const sendVerificationCode = () => {
    if (!phoneNumber) {
      Alert.alert("Please Enter Your Phone Number");
      return;
    } else {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();

      const IndNumber = "+91" + phoneNumber;

      phoneProvider
        .verifyPhoneNumber(IndNumber, recaptchaVerifier.current)
        .then((vid) => {
          setVerificationId(vid);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  const getCode = (code) => {
    setCode(code);
  };

  const ConfirmCode = () => {
    const title = username;
    const credentials = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credentials)
      .then(() => {
        navigation.navigate("Home", { userName: username });
        setCode("");
      })
      .catch((error) => {
        alert(error);
      });

    set(ref(db, "posts/" + title), {
      title: username,
      FirtsName: firstname,
      LastName: lastname,
      Email: email,
      Phone: phoneNumber,
    });
    setUsername("");
    userData = {};
  };

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        {verificationId ? (
          <OTPComponent
            confirmCode={ConfirmCode}
            getCode={getCode}
            phone={phoneNumber}
            resend={sendVerificationCode}
          />
        ) : (
          <View style={styles.mainContainer}>
            <View>
              <Text style={styles.text}>FirstName</Text>
              <TextInput
                style={styles.input}
                onChangeText={setfirstName}
                value={firstname}
                placeholder="Enter your firstname"
                keyboardType="ascii-capable"
              />
              <Text style={styles.text}>LastName</Text>
              <TextInput
                style={styles.input}
                onChangeText={setlastName}
                value={lastname}
                placeholder="Enter your lastname"
                keyboardType="ascii-capable"
              />
              <Text style={styles.text}>Username</Text>
              <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="Enter a unique username(max 20 char)"
                keyboardType="ascii-capable"
              />
              <Text style={styles.text}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={setemail}
                value={email}
                placeholder="Enter your email id"
                keyboardType="email-address"
              />
              <Text style={styles.text}>Phone Number</Text>
              <TextInput
                style={styles.input}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                placeholder="ex: 9898989898"
                keyboardType="number-pad"
              />
              <Text style={styles.text}>Referel Code</Text>
              <TextInput
                style={styles.input}
                onChangeText={setReferrel}
                value={referrel}
                placeholder="ex: NEWUSER"
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.sendContainer}>
              <Text style={styles.sendButton} onPress={sendVerificationCode}>
                Get OTP
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    top: "5%",
    marginBottom: "15%",
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  scrollView: {
    grid: 1,
  },

  text: {
    marginLeft: 12,
  },
  sendContainer: {
    width: "100%",
    height: "fit-content",
    flex: 1,
    marginTop: "5%",
    alignItems: "center",
  },
  sendButton: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
    width: "70%",
    backgroundColor: "indigo",
    borderRadius: 30,
  },
});
