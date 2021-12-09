import * as React from "react";
import * as Google from "expo-auth-session/providers/google";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "702110810989-bubh8tvengnovbvs2ig7lufsdp1m5cnd.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      console.log(response);
      navigation.navigate("Home", { auth: response.authentication });
    }
  }, [response]);

  return (
    <Button
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    >
      Login
    </Button>
  );
}
