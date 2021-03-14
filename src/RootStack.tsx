import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import { screens } from "./constants";
import About from "./screens/About";

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Home} name={screens.Home} />
      <Stack.Screen component={About} name={screens.About} />
    </Stack.Navigator>
  );
}

export default RootStack;
