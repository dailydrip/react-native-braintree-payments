// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Styles from "./Styles/SecondScreenStyles";

class SecondScreen extends Component {
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

const mapStateToProps = state => {
  return { value: state.generic.value, nav: state.nav };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
