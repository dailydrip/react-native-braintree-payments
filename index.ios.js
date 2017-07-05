// @flow
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import getStore from "./src/store";
import AppWithNavigationState from "./src/AppWithNavigationState";
import navReducer from "./src/reducers/navReducer";

const store = getStore(navReducer);

const StarterApp = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
};

AppRegistry.registerComponent("dailydripStarterApp", () => StarterApp);
