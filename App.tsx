import "react-native-gesture-handler";

import React from "react";
import { ThemeProvider } from "styled-components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import defaultTheme from "./src/theme";
import RootStack from "./src/RootStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
