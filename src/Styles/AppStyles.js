import { StyleSheet } from "react-native";
import Metrics from "./Metrics";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: Metrics.baseMargin
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: Metrics.marginBottom
  }
});
