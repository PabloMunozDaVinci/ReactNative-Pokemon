import * as React from "react";
import { Text, View, Button } from "react-native";

import { PokemonFinder } from "./PokemonFinder";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>test Home Screen</Text>

      <Button
        title="Ir a la pagina de busqueda de Pokémon"
        color="#bdb76b"
        onPress={() => navigation.navigate("PokemonFinder")}
      />
    </View>
  );
}
