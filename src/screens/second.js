import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  View
} from "react-native";

import useGlobalState from "../hooks/useGlobalState";

const SecondScreen = ({ navigation }) => {
  const { state, setState } = useGlobalState();

  return (<SafeAreaView style={styles.container}>
    <Text style={styles.text}>Second Screen</Text>
    <View style={styles.display}>
      <Text style={styles.text}>State: {state}</Text>
      <Button
        title="+"
        onPress={() => setState(state + 1)}
      />
      <Button
        title="-"
        onPress={() => setState(state - 1)}
      />
    </View>
    <Button
      title="Back to first screen"
      onPress={() => navigation.goBack()}
    />
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  display: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  text: {
    color: "black",
    fontWeight: "600"
  }
});

export default SecondScreen;