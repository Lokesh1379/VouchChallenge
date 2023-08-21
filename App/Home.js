import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import bgImage from "../assets/bgImage.png";
import bell from "../assets/all_notifications.png";
import wiu from "../assets/wis.png";
import Hb from "../assets/help_bot.png";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";
const HomeComponent = () => {
  const route = useRoute();
  const [number, onChangeNumber] = React.useState("");
  const user = route.params.userName;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Text style={{ fontSize: 50, color: "white" }}>
            {user ? user[0] : "V"}
          </Text>
        </View>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <View style={styles.quote}>
            <Text style={{ fontWeight: "bold", color: "indigo", fontSize: 25 }}>
              Your Protected Payments
            </Text>
            <Text style={{ color: "indigo" }}>
              we are excited for you to protect
            </Text>
            <Text style={{ color: "indigo" }}>your first payment!!</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Find people who are Vouched "
          keyboardType="numeric"
          textAlignVertical="right"
        />
        <FontAwesome
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.borderView}>
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            top: 10,
          }}
        >
          <Text
            style={{
              width: "15%",
              backgroundColor: "silver",
              height: "1%",
              borderWidth: 2,
              borderColor: "silver",
              borderRadius: 10,
            }}
          ></Text>
        </View>
        <View
          style={{
            width: "100%",
            grid: 1,
            alignItems: "center",
            position: "absolute",
            top: "10%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.menuContainer}>
              <View style={styles.menubuttons}>
                <Image source={bell} style={styles.menubtns} />
              </View>
              <Text>All </Text>
              <Text>Notifications</Text>
            </View>
            <View style={styles.menuContainer}>
              <View style={styles.menubuttons}>
                <Image source={wiu} style={styles.menubtns} />
              </View>
              <Text>Who is</Text>
              <Text>Using</Text>
            </View>

            <View style={styles.menu}>
              <View style={styles.menubuttons}>
                <Image source={Hb} style={styles.menubtns} />
              </View>
              <Text>Help Bot</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text onPress={() => Alert.alert("hello")} style={styles.button}>
            + NEWPAYMENT
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    grid: 1,
    height: 200,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  menuContainer: {
    grid: 1,
    alignItems: "center",
    width: 80,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginLeft: 45,
  },
  inputContainer: {
    height: 50,
    margin: 15,
    borderWidth: 1,
    padding: 15,
    borderRadius: 30,
    borderColor: "grey",
    marginLeft: 10,
  },
  searchIcon: {
    position: "absolute",
    left: 30,
    top: 16,
    fontSize: 15,
  },
  borderView: {
    width: "100%",
    height: "65%",
    borderWidth: 2,
    borderColor: "silver",
    borderRadius: 30,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    grid: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 50,
  },
  button: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: "70%",
    backgroundColor: "indigo",
    padding: 15,
    borderRadius: 30,
  },
  profile: {
    width: 60,
    height: 60,
    backgroundColor: "lavender",
    position: "absolute",
    top: "10%",
    right: "4%",
    borderRadius: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  quote: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  menu: {
    grid: 1,
    alignItems: "center",
    width: 80,
  },
  menubuttons: {
    backgroundColor: "indigo",
    width: 50,
    borderRadius: 50,
  },
  menubtns: {
    width: 30,
    height: 30,
    margin: 10,
  },
});

export default HomeComponent;
