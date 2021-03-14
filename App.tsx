import "react-native-gesture-handler";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";

import defaultTheme from "./src/theme";
import RootStack from "./src/RootStack";
import { fonts } from "./src/constants";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync(fonts);
      setLoading(true);
    })();
  }, []);

  if (!loading) {
    return null;
  }

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
