import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Box from "../components/Box";
import Typography from "../components/Typography";
import { screens } from "../constants";

function About() {
  const navigation = useNavigation();

  function aboutPage() {
    navigation.navigate(screens.Home);
  }

  return (
    <Box variant="full" justifyContent="center" alignItems="center">
      <SafeAreaView>
        <StatusBar style="auto" />
        <Typography>Open up App.tsx to start working on your app!</Typography>
        <Button onPress={aboutPage} title="Home" />
      </SafeAreaView>
    </Box>
  );
}

export default About;
