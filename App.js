import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, Header } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { PokemonFinder } from "./PokemonFinder";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="PokemonFinder"
          component={PokemonFinder}
          options={{ title: "Encontrá tu Pokémon" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
