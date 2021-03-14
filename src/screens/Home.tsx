import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";

import Box from "../components/Box";
import SearchIcon from "../components/icons/Search";
import InviteIcon from "../components/icons/InviteIcon";
import CalendarIcon from "../components/icons/CalendarIcon";
import NotificationOn from "../components/icons/NotificationOn";
import incomingEvents from "../data/incomingEvents";
import rooms from "../data/rooms";
import Typography from "../components/Typography";
import HomeIcon from "../components/icons/HomeIcon";
import UserIcon from "../components/icons/UserIcon";
import RenderIf from "../components/RenderIf";
import CommentIcon from "../components/icons/CommentIcon";
import CommentGhost from "../components/icons/CommentGhost";
import PlusIcon from "../components/icons/PlusIcon";
import MenuIcon from "../components/icons/MenuIcon";
import defaultTheme from "../theme";

const avatar = require("../../assets/avatar/me.png");
const gradient = require("../../assets/gradient.png");

const width = Dimensions.get("window").width;

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
              <Image source={avatar} style={styles.appAvatar} />
            </Box>
          </Box>
        </Box>
        <ScrollView style={styles.mainScrollView}>
          <Box bg="background.tone" borderRadius={2} p={10}>
            {incomingEvents.map((event, key) => {
              const mb = key === incomingEvents.length - 1 ? 0 : 2;

              return (
                <Box flexDirection="row" mb={mb}>
                  <Box width="30%" px={3}>
                    <Typography
                      fontFamily="bold"
                      color="typo.time"
                      textAlign="right"
                    >
                      {event.hour}
                    </Typography>
                  </Box>
                  <Box width="70%">
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
              const total = room.users.length;
              const speakers = Math.round(room.users.length / 2);
              return (
                <Box
                  bg="white"
                  mb={2}
                  borderRadius={2}
                  p={4}
                  boxShadow="0px 1px 1px #D0CCBF"
                >
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
                  <Box flexDirection="row" mt={1}>
                    <Box width="30%" py={2}>
                      <Box
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        alignContent="flex-start"
                      >
                        <Image
                          source={{ uri: room.firstUser }}
                          style={styles.avatarFirstUser}
                        />
                        <Image
                          source={{ uri: room.secondUser }}
                          style={styles.avatarSecondUser}
                        />
                      </Box>
                    </Box>
                    <Box>
                      {room.users.slice(0, 5).map((user, index) => {
                        return (
                          <Box flexDirection="row" alignItems="center">
                            <Typography fontFamily="bold" fontSize={17} mr={1}>
                              {user.name}
                            </Typography>
                            <RenderIf condition={index <= speakers}>
                              <CommentIcon />
                            </RenderIf>
                          </Box>
                        );
                      })}
                      <Box flexDirection="row" mt={1}>
                        <Box flexDirection="row" alignItems="center">
                          <Typography
                            color="typo.ghost"
                            fontFamily="bold"
                            fontSize={2}
                          >
                            {total}
                          </Typography>
                          <Box px={1}>
                            <UserIcon />
                          </Box>
                        </Box>
                        <Typography
                          color="typo.ghost"
                          fontFamily="bold"
                          fontSize={3}
                          px={1}
                        >
                          /
                        </Typography>
                        <Box flexDirection="row" alignItems="center">
                          <Typography
                            color="typo.ghost"
                            fontFamily="bold"
                            fontSize={2}
                          >
                            {speakers}
                          </Typography>
                          <Box px={1}>
                            <CommentGhost />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box height={250} mt={50}>
            <Box py={2}>
              <Typography color="typo.time" textAlign="center">
                To see more rooms,{" "}
                <Typography fontFamily="bold">follow more people.</Typography>
              </Typography>
              <Typography color="typo.time" textAlign="center">
                Or start a room of you own. :)
              </Typography>
              <Typography mt={2} textAlign="center">
                👋🏼
              </Typography>
            </Box>
          </Box>
        </ScrollView>
        <Box position="absolute" width={width} height={180} bottom={0} left={0}>
          <ImageBackground source={gradient} style={styles.bottomGradient}>
            <Box flexDirection="row" justifyContent="center">
              <Box
                borderRadius="50px"
                bg="control.default.background"
                px={6}
                py={2}
                flexDirection="row"
                alignItems="center"
              >
                <Box mx={1}>
                  <PlusIcon />
                </Box>
                <Typography
                  textAlign="center"
                  fontFamily="bold"
                  color="control.default.text"
                  fontSize={20}
                >
                  Start a room
                </Typography>
              </Box>
            </Box>
          </ImageBackground>
          <Box right={30} position="absolute" top={2} zIndex={2}>
            <MenuIcon />
          </Box>
        </Box>
      </SafeAreaView>
    </Box>
  );
}

const styles = StyleSheet.create({
  mainScrollView: {
    height: "100%",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  appAvatar: {
    width: 30,
    height: 30,
    overflow: "hidden",
    borderRadius: 14,
  },
  avatarFirstUser: {
    width: 40,
    height: 40,
    zIndex: 1,
    borderRadius: 18,
  },
  avatarSecondUser: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: -10,
    borderRadius: 18,
  },
  bottomGradient: {
    width,
    height: 180,
  },
});

export default Home;
