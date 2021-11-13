import React, { useCallback, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import useRoomContext from "../hooks/useRoomContext";
import Box from "./Box";
import HandIcon from "./icons/HandIcon";
import PlusPlusIcon from "./icons/PlusPlusIcon";
import RenderIf from "./RenderIf";
import Typography from "./Typography";

interface Props {
  onOpen: () => void;
  onClose: () => void;
}

function RoomActionBar({ onOpen, onClose }: Props) {
  const { roomState, currentRoom, setRoomState } = useRoomContext();
  const width = useSharedValue(42);

  const styles = useAnimatedStyle(() => ({
    width: withTiming(width.value, {
      duration: 200,
      easing: Easing.linear,
    }),
  }));

  const isOpen = roomState === "open";
  const isMini = roomState === "mini";

  const containerShadow = !isOpen ? "0px 1px 2px rgba(0, 0, 0, 0.14)" : "";

  const total = currentRoom.users.length - 2;
  const users = currentRoom.users.slice(0, 2);

  const handleOpen = useCallback(() => {
    if (roomState === "mini") {
      onOpen();
      setRoomState("open");
    }
  }, [onOpen, roomState]);

  useEffect(() => {
    if (isOpen) {
      width.value = 160;
    } else {
      width.value = 42;
    }
  }, [isOpen]);

  return (
    <Box
      boxShadow={containerShadow}
      position="absolute"
      bg="white"
      width="100%"
      borderTopLeftRadius={38}
      borderTopRightRadius={38}
      bottom={0}
      py={15}
      height={100}
    >
      <TouchableWithoutFeedback onPress={handleOpen}>
        <Box
          flexDirection="row"
          px={16}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <RenderIf condition={isMini}>
            <Box
              flexDirection="row"
              alignContent="center"
              justifyContent="flex-start"
              width="30%"
            >
              <Box flexDirection="row">
                {users.map((user, index) => {
                  return (
                    <Image
                      style={{
                        width: 37,
                        height: 37,
                        borderRadius: 14,
                        marginLeft: -(index * 10),
                      }}
                      source={{ uri: user.photo }}
                      resizeMode="contain"
                    />
                  );
                })}
                <Box
                  width={37}
                  height={37}
                  bg="control.ghost.background"
                  borderRadius={14}
                  justifyContent="center"
                  alignItems="center"
                  marginLeft={-10}
                >
                  <Typography>+{total}</Typography>
                </Box>
              </Box>
            </Box>
          </RenderIf>

          <Box position="relative" width="40%">
            {/* open: w=160 */}
            {/* close: w=42  */}

            <Box
              as={Animated.View}
              style={styles}
              position="absolute"
              right={0}
              bg="control.ghost.background"
              width={42}
              borderRadius={21}
              height={42}
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <TouchableOpacity
                onPress={() => {
                  onClose();
                  setRoomState("closed");
                }}
              >
                <Typography
                  textAlign="center"
                  fontFamily="bold"
                  color="control.ghost.textPrimary"
                  fontSize={3}
                >
                  ✌️
                  <RenderIf condition={isOpen}>Leave quietly</RenderIf>
                </Typography>
              </TouchableOpacity>
            </Box>
          </Box>

          <Box flexDirection="row" justifyContent="flex-end" width="30%">
            <Box
              width={42}
              height={42}
              bg="control.ghost.background"
              borderRadius={20}
              mr={2}
              alignItems="center"
              justifyContent="center"
            >
              <PlusPlusIcon />
            </Box>
            <Box
              width={42}
              height={42}
              bg="control.ghost.background"
              borderRadius={20}
              alignItems="center"
              justifyContent="center"
            >
              <HandIcon />
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </Box>
  );
}

const styles = {};

export default RoomActionBar;
