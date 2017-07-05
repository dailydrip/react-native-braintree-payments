// @flow

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import Styles from "./Styles/AppStyles";
import Routes from "../routes";
import { DrawerNavigator } from "react-navigation";
import { connect } from "react-redux";

const App = props => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text> Value: {props.value} </Text>
      <Button onPress={() => props.increment()} title="Press to Increment" />
      <Button onPress={() => props.decrement()} title="Press to Decrement" />
      <Text style={Styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={Styles.instructions}>
        Press Cmd+R to reload,{"\n"}
        Cmd+D or shake for dev menu
      </Text>
    </View>
  );
};

const mapStateToProps = state => {
  return { value: state.generic.value, nav: state.nav };
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "Increment" }),
  decrement: () => dispatch({ type: "Decrement" })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
