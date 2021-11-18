import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import {
  Image,
  Button,
  TextInput,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function PokemonFinder() {
  const [input, setInput] = React.useState("");
  const [pokemon, setPokemon] = React.useState("");
  const [pokemonData, setPokemonData] = React.useState("");

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) =>
      response.json().then((data) => setPokemonData(data))
    );
  }, [pokemon]);

  function handleInputChange(event) {
    setInput(event);
  }

  function handleSearchClick() {
    setPokemon(input.toLowerCase());
  }
  //KeyboardAvoidingView para que no me corte la imagen al abrir el teclado

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.Container}
        keyboardVerticalOffset={-500}
      >
        <View style={styles.containerView}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.imagen}
          >
            <StatusBar style="auto" />
          </ImageBackground>
          <TextInput
            value={input}
            onChangeText={handleInputChange}
            placeholder={"hola soy un placeholder"}
            style={styles.input}
          />
          <Button
            title="Buscá tu Pokémon"
            onPress={handleSearchClick}
            color="#bdb76b"
            style={styles.Button}
          />

          {pokemonData.sprites ? (
            <Image
              //debo usar " {uri:} " ya que si no tira error al mostrar en el dispositivo movil

              source={{ uri: pokemonData.sprites.front_default }}
              style={styles.imagenFetch}
            />
          ) : (
            <Text> Ups ese pokemon no existe </Text>
          )}
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
const image = {
  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png",
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 350,
    height: 125,
  },
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 2,
    marginBottom: 10,
  },
  Text: { color: "red" },

  Button: {
    marginTop: 10,
    marginBottom: 30,
  },

  imagenFetch: {
    height: 200,
    width: 200,
  },
});
