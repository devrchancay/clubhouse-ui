import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useRef, useState } from "react";
import { useWindowDimensions, Image } from "react-native";
import useRoomContext from "../hooks/useRoomContext";
import Box from "./Box";
import Handler from "./handler";
import HomeIcon from "./icons/HomeIcon";
import MicroIcon from "./icons/MicroIcon";
import MoreIcon from "./icons/MoreIcon";
import RenderIf from "./RenderIf";
import Typography from "./Typography";

const snapPoints = [0, "7%", "83%"];
const states = ["closed", "mini", "open"];

type Ref = BottomSheet;

interface Props {}

const Room: React.ForwardRefRenderFunction<Ref, Props> = (props, ref) => {
  const { currentRoom, roomState, setRoomState } = useRoomContext();
  const { height } = useWindowDimensions();

  const handleSheetChanges = useCallback((index: number) => {
    if (index !== 2) {
      setRoomState(states[index] ?? "closed");
    }
  }, []);

  return (
    <BottomSheet
      handleComponent={Handler}
      containerHeight={height}
      ref={ref}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enableContentPanningGesture={false}
      enableHandlePanningGesture={false}
    >
      <RenderIf condition={roomState === "open"}>
        <Box px={16}>
          {/* header */}
          <Box flexDirection="row" pr={2}>
            <Box width="93%" pr={1}>
              <Box flexDirection="row" mb={1}>
                <Typography
                  fontFamily="bold"
                  color="typo.secondary"
                  letterSpacing={2}
                  fontSize={0}
                  mr={1}
                >
                  {currentRoom.comunity}
                </Typography>
                <HomeIcon />
              </Box>
              <Typography lineHeight="22" fontFamily="bold" fontSize={5}>
                {currentRoom.title}
              </Typography>
            </Box>
            <Box mt={1} width="7%">
              <MoreIcon />
            </Box>
          </Box>
          {/* content */}
          <Box flexDirection="row" flexWrap="wrap" py={20}>
            {currentRoom?.users?.map((user, index) => {
              return (
                <Box width="33%" alignItems="center" mb={20}>
                  <Box position="relative">
                    <Image
                      source={{ uri: user.photo }}
                      resizeMode="contain"
                      style={{ width: 75, height: 75, borderRadius: 28 }}
                    />
                    <RenderIf condition={index !== 0}>
                      <Box
                        width={28}
                        height={28}
                        bg="white"
                        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.14)"
                        borderRadius={14}
                        position="absolute"
                        bottom={-5}
                        right={-3}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <MicroIcon />
                      </Box>
                    </RenderIf>
                  </Box>
                  <Box my={2}>
                    <Typography fontFamily="bold" textAlign="center">
                      {user.shortName}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </RenderIf>
    </BottomSheet>
  );
};

export default React.forwardRef(Room);
