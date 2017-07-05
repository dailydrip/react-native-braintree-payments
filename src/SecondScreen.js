// @flow

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Styles from "./Styles/SecondScreenStyles";

export default class SecondScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.secondScreenText}>
          Second Screen
        </Text>
      </View>
    );
  }
}
