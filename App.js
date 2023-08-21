import React from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import HomeComponent from "./App/Home";
import SignUpComponent from "./Authentication/Signup";
import WelcomeComponent from "./App/welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OTPComponent from "./Authentication/Otp";
const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const Stack = createNativeStackNavigator();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Vouch Challenge">
              <Stack.Screen
                name="Vouch Challenge"
                component={WelcomeComponent}
              />
              <Stack.Screen name="Signup" component={SignUpComponent} />
              <Stack.Screen name="Home" component={HomeComponent} />
              <Stack.Screen name="OTP Verification" component={OTPComponent} />
            </Stack.Navigator>
          </NavigationContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default App;
