import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  View
} from "react-native";
import useGlobalState from "../hooks/useGlobalState";

const FirstScreen = ({ navigation }) => {
  const { state, setState } = useGlobalState();

  return (<SafeAreaView style={styles.container}>
    <Text style={styles.text}>First Screen</Text>
    <Button
      title="Go to second screen"
      onPress={() => navigation.navigate("Second")}
    />
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
    marginTop: 16,
  },
  text: {
    color: "black",
    fontWeight: "600"
  }
});

export default FirstScreen;