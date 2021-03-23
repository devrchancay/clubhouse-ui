import { StatusBar } from "expo-status-bar";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  FlatList,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import Box from "../components/Box";
import SearchIcon from "../components/icons/Search";
import InviteIcon from "../components/icons/InviteIcon";
import CalendarIcon from "../components/icons/CalendarIcon";
import NotificationOn from "../components/icons/NotificationOn";
import incomingEvents from "../data/incomingEvents";
import dataRooms from "../data/rooms";
import Typography from "../components/Typography";
import HomeIcon from "../components/icons/HomeIcon";
import UserIcon from "../components/icons/UserIcon";
import RenderIf from "../components/RenderIf";
import CommentIcon from "../components/icons/CommentIcon";
import CommentGhost from "../components/icons/CommentGhost";
import PlusIcon from "../components/icons/PlusIcon";
import MenuIcon from "../components/icons/MenuIcon";
import { Easing } from "react-native-reanimated";
import Room from "../components/Room";
import useRoomContext from "../hooks/useRoomContext";
import DownIcon from "../components/icons/DownIcon";
import RoomActionBar from "../components/RoomActionBar";

const avatar = require("../../assets/avatar/me.png");
const gradient = require("../../assets/gradient.png");

const screen = Dimensions.get("window");

const { width } = screen;

const BoxAnimated = Animated.createAnimatedComponent(Box);

const randomRooms = dataRooms();

function Home() {
  const bottomCta = useRef(new Animated.Value(0)).current;
  const [rooms, setRooms] = useState(randomRooms);
  const [refreshing, setRefreshing] = useState(false);
  const context = useRoomContext();

  const bottomSheetRef = useRef<BottomSheet>(null);

  async function onRefresh() {
    const newRooms = dataRooms();
    setRefreshing(true);

    setTimeout(() => {
      setRooms(newRooms);
      setRefreshing(false);
    }, 200);
  }

  useEffect(() => {
    const value = ["mini", "open"].indexOf(context.roomState) !== -1 ? 1 : 0;

    Animated.timing(bottomCta, {
      toValue: value,
      useNativeDriver: false,
      duration: 300,
      easing: Easing.linear,
    }).start();
  }, [context.roomState]);

  function handleRoom(room: any) {
    context.setCurrentRoom(room);
    context.setRoomState("open");
    bottomSheetRef.current?.expand();
  }

  const bottom = bottomCta.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 35],
  });

  function minimizeRoom() {
    context.setRoomState("mini");
    bottomSheetRef.current?.snapTo(1);
  }

  return (
    <Box variant="full" bg="background.default">
      <SafeAreaView>
        <StatusBar style="dark" animated />
        <Box px={3}>
          <Box py={1} mt={4} flexDirection="row">
            <Box width="45%">
              <RenderIf
                condition={["mini", "closed"].indexOf(context.roomState) !== -1}
              >
                <SearchIcon />
              </RenderIf>
              <RenderIf condition={context.roomState === "open"}>
                <Box pl={2} mt={3}>
                  <Box
                    as={TouchableOpacity}
                    flexDirection="row"
                    alignItems="center"
                    onPress={minimizeRoom}
                  >
                    <Box mr={1}>
                      <DownIcon />
                    </Box>
                    <Typography fontFamily="semi" fontSize={3}>
                      All rooms
                    </Typography>
                  </Box>
                </Box>
              </RenderIf>
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
        <FlatList
          onRefresh={onRefresh}
          refreshing={refreshing}
          style={styles.mainScrollView}
          data={rooms}
          ListHeaderComponent={() => {
            return (
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
                          fontFamily="semi"
                          color="typo.secondary"
                          ellipsizeMode="tail"
                          numberOfLines={1}
                        >
                          {event.title}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            );
          }}
          renderItem={({ item }) => {
            const total = item.users.length;
            const speakers = Math.round(item.users.length / 2);

            return (
              <Box
                bg="white"
                mt={2}
                mb={1}
                borderRadius={2}
                p={4}
                boxShadow="0px 1px 1px #D0CCBF"
              >
                <TouchableOpacity
                  onPress={() => {
                    handleRoom(item);
                  }}
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
                        {item.comunity}
                      </Typography>
                      <HomeIcon />
                    </Box>
                    <Typography
                      fontSize={4}
                      color="typo.secondary"
                      fontFamily="bold"
                      lineHeight="22"
                    >
                      {item.title}
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
                          source={{ uri: item?.users[0]?.photo }}
                          style={styles.avatarFirstUser}
                        />
                        <Image
                          source={{ uri: item?.users[1]?.photo }}
                          style={styles.avatarSecondUser}
                        />
                      </Box>
                    </Box>
                    <Box>
                      {item.users.slice(0, 5).map((user, index) => {
                        return (
                          <Box flexDirection="row" alignItems="center">
                            <Typography fontFamily="semi" fontSize={17} mr={1}>
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
                </TouchableOpacity>
              </Box>
            );
          }}
          ListFooterComponent={() => {
            return (
              <Box height={250} mt={50}>
                <Box py={2}>
                  <Typography color="typo.time" textAlign="center">
                    To see more rooms,{" "}
                    <Typography fontFamily="bold">
                      follow more people.
                    </Typography>
                  </Typography>
                  <Typography color="typo.time" textAlign="center">
                    Or start a room of you own. :)
                  </Typography>
                  <Typography mt={2} textAlign="center">
                    👋🏼
                  </Typography>
                </Box>
              </Box>
            );
          }}
        />

        <BoxAnimated
          position="absolute"
          width={width}
          height={180}
          style={{ bottom }}
          left={0}
        >
          <Box flexDirection="row" justifyContent="center">
            <Box
              borderRadius="50px"
              bg="control.default.background"
              px={6}
              py={2}
              flexDirection="row"
              alignItems="center"
              zIndex={3}
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
          <ImageBackground
            imageStyle={styles.bottomImageStyle}
            source={gradient}
            style={styles.bottomGradient}
          ></ImageBackground>
          <Box right={30} position="absolute" top={2} zIndex={2}>
            <MenuIcon />
          </Box>
        </BoxAnimated>
      </SafeAreaView>

      <Room ref={bottomSheetRef} />
      <RenderIf condition={context.roomState !== "closed"}>
        <RoomActionBar />
      </RenderIf>
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
  bottomImageStyle: {
    resizeMode: "cover",
    alignSelf: "flex-end",
  },
  bottomGradient: {
    width,
    height: 50,
    position: "absolute",
    bottom: 85,
  },
});

export default Home;
