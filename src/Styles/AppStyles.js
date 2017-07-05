import { StyleSheet } from "react-native";
import Metrics from "./Metrics";
import Colors from "./Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: Metrics.baseMargin
  },
  instructions: {
    textAlign: "center",
    color: Colors.text,
    marginBottom: Metrics.marginBottom
  }
});
