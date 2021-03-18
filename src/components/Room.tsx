import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback } from "react";
import { useWindowDimensions, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import useRoomContext from "../hooks/useRoomContext";
import Box from "./Box";
import HomeIcon from "./icons/HomeIcon";
import MicroIcon from "./icons/MicroIcon";
import ModeratorIcon from "./icons/ModeratorIcon";
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

  const isOpen = roomState === "open";

  return (
    <BottomSheet
      handleComponent={() => null}
      containerHeight={height}
      ref={ref}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enableContentPanningGesture={false}
      enableHandlePanningGesture={false}
    >
      <RenderIf condition={isOpen}>
        <FlatList
          keyExtractor={(item) => item.name}
          ListHeaderComponent={() => {
            return (
              <Box flexDirection="row" pr={2} mb={20}>
                <Box pr={1} width="96%">
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
                <Box mt={2}>
                  <MoreIcon />
                </Box>
              </Box>
            );
          }}
          data={currentRoom?.users}
          style={{ paddingVertical: 10 }}
          numColumns={3}
          contentContainerStyle={{
            justifyContent: "center",
            marginHorizontal: 18,
          }}
          renderItem={({ item }) => {
            return (
              <Box width="33%" alignItems="center" mb={20}>
                <Box position="relative">
                  <Image
                    source={{ uri: item.photo }}
                    resizeMode="contain"
                    style={{ width: 75, height: 75, borderRadius: 32 }}
                  />

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
                </Box>
                <Box my={2} flexDirection="row" alignItems="center">
                  <RenderIf condition={item.isModerator}>
                    <ModeratorIcon />
                  </RenderIf>
                  <Box ml={1}>
                    <Typography fontFamily="bold" textAlign="center">
                      {item.shortName}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          }}
        />
      </RenderIf>
    </BottomSheet>
  );
};

export default React.forwardRef(Room);
