// @flow

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import Styles from "./Styles/AppStyles";
import Routes from "../routes";
import { DrawerNavigator } from "react-navigation";
import { connect } from "react-redux";
import Actions from "./reducers/actions";

const App = props => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.welcome}>
        Donate some money!
      </Text>
      <Button onPress={() => props.pay(1)} title="Donate $1" />
      <Button onPress={() => props.pay(10)} title="Donate $10" />
      <Button onPress={() => props.pay(20)} title="Donate $20" />
      <Button onPress={() => props.pay(100)} title="Donate $100" />
      <Button onPress={() => props.pay(120)} title="Donate $120" />
      <Text> {props.message} </Text>
    </View>
  );
};

const mapStateToProps = state => {
  return { message: state.generic.message, nav: state.nav };
};

const mapDispatchToProps = dispatch => ({
  pay: amount => dispatch(Actions.pay(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
