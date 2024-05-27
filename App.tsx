import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>
        My name is{" "}
        <Text style={{ fontWeight: "bold" }}>
         Issaka Issifu
        </Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 24,
    backgroundColor: "#20c2e3",
    alignItems: "center",
    justifyContent: "center",
  },
});
