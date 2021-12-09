import * as React from "react";
import { Text, View, Button, ImageBackground, StyleSheet } from "react-native";

import { PokemonFinder } from "./PokemonFinder";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const image = {
  uri: "https://image.winudf.com/v2/image1/Y29tLmdvb2dsZS5hbmRyb2lkLnBva2Vtb253YXZlaGVsbG9fc2NyZWVuXzBfMTU3NTk1OTk3NF8wMjY/screen-0.jpg?fakeurl=1&type=.jpg",
};

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        source={image}
        resizeMode="stretch"
        style={styles.image}
        blurRadius={3}
      >
        <Text>test Home Screen</Text>

        <Button
          title="Ir a la pagina de busqueda de Pokémon"
          color="#bdb76b"
          onPress={() => navigation.navigate("PokemonFinder")}
        />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
