import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import AppNavigator from "./AppNavigator";

class AppNavigation extends Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

function mapStateToProps(state) {
  return { nav: state.nav };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const AppWithNavigationState = connect(mapStateToProps, mapDispatchToProps)(
  AppNavigation
);

export default AppWithNavigationState;
