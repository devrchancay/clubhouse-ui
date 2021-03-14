import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView } from "react-native";

import Box from "../components/Box";
import SearchIcon from "../components/icons/Search";
import InviteIcon from "../components/icons/InviteIcon";
import CalendarIcon from "../components/icons/CalendarIcon";
import NotificationOn from "../components/icons/NotificationOn";
import incomingEvents from "../data/incomingEvents";
import rooms from "../data/rooms";
import Typography from "../components/Typography";
import HomeIcon from "../components/icons/HomeIcon";

const avatar = require("../../assets/avatar/m.png");
const avatarL = require("../../assets/avatar/l.png");

function Home() {
  const randomRooms = useMemo(() => rooms(), []);

  return (
    <Box variant="full" bg="background.default">
      <SafeAreaView>
        <StatusBar style="dark" animated />
        <Box px={3}>
          <Box py={1} mt={4} flexDirection="row">
            <Box width="45%">
              <SearchIcon />
            </Box>
            <Box
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              width="55%"
            >
              <InviteIcon />
              <CalendarIcon />
              <NotificationOn />
              <Image source={avatar} style={{ width: 30, height: 30 }} />
            </Box>
          </Box>
        </Box>
        <ScrollView
          style={{
            height: "100%",
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Box bg="background.tone" borderRadius={2} p={10}>
            {incomingEvents.map((event) => {
              return (
                <Box flexDirection="row" mb={3}>
                  <Box width="20%" px={3}>
                    <Typography
                      fontFamily="bold"
                      color="typo.time"
                      textAlign="right"
                    >
                      {event.hour}
                    </Typography>
                  </Box>
                  <Box width="80%">
                    <Box flexDirection="row" alignContent="center">
                      <Typography
                        fontFamily="bold"
                        color="typo.secondary"
                        letterSpacing={2}
                        fontSize={0}
                        mr={1}
                      >
                        {event.community}
                      </Typography>
                      <HomeIcon />
                    </Box>
                    <Typography
                      fontSize={2}
                      fontFamily="bold"
                      color="typo.secondary"
                    >
                      {event.title}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box mt={10}>
            {randomRooms.map((room) => {
              return (
                <Box bg="white" mb={2} borderRadius={2} p={4}>
                  <Box>
                    <Box flexDirection="row" mb={0}>
                      <Typography
                        fontFamily="bold"
                        color="typo.secondary"
                        letterSpacing={2}
                        fontSize={0}
                        mr={1}
                      >
                        {room.comunity}
                      </Typography>
                      <HomeIcon />
                    </Box>
                    <Typography
                      fontSize={4}
                      color="typo.secondary"
                      fontFamily="bold"
                      lineHeight="22"
                    >
                      {room.title}
                    </Typography>
                  </Box>
                  <Box flexDirection="row">
                    <Box px={3} py={2}>
                      <Box flexDirection="row">
                        <Image
                          source={avatarL}
                          style={{
                            width: 40,
                            height: 40,
                            zIndex: 1,
                          }}
                        />
                        <Image
                          source={avatarL}
                          style={{
                            width: 40,
                            height: 40,
                            marginTop: 10,
                            marginLeft: -10,
                          }}
                        />
                      </Box>
                    </Box>
                    <Box>
                      {room.users.map((user) => {
                        return (
                          <Typography fontFamily="bold" fontSize={17}>
                            {user.name}
                          </Typography>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}

export default Home;
