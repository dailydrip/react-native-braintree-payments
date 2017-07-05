import { AppRegistry } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Routes from "./routes";

const StarterApp = DrawerNavigator(Routes);

AppRegistry.registerComponent("dailydripStarterApp", () => StarterApp);
