import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback } from "react";
import {
  useWindowDimensions,
  Image,
  SectionList,
  StyleSheet,
} from "react-native";

import useRoomContext from "../hooks/useRoomContext";
import Box from "./Box";
import HandIcon from "./icons/HandIcon";
import HomeIcon from "./icons/HomeIcon";
import MicroIcon from "./icons/MicroIcon";
import ModeratorIcon from "./icons/ModeratorIcon";
import MoreIcon from "./icons/MoreIcon";

import PlusPlusIcon from "./icons/PlusPlusIcon";
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
        <SectionList
          stickySectionHeadersEnabled={false}
          style={{
            paddingHorizontal: 18,
            paddingTop: 12,
          }}
          sections={currentRoom?.userByRole}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <RenderIf condition={title.length > 0}>
              <Box pb={20}>
                <Typography color="typo.ghost" fontFamily="regular">
                  {title}
                </Typography>
              </Box>
            </RenderIf>
          )}
          renderItem={(props) => {
            const items = props.item;

            return (
              <Box flexDirection="row" flexWrap="wrap">
                {items.map((item) => {
                  const style = item.isSpeaker
                    ? styles.speakerIcons
                    : styles.othersIcons;

                  return (
                    <Box
                      width="33%"
                      alignItems="center"
                      mb={20}
                      key={`${item.shortName}-${item.photo}`}
                    >
                      <Box position="relative">
                        <Image
                          source={{ uri: item.photo }}
                          resizeMode="contain"
                          style={style}
                        />

                        <RenderIf condition={item.isSpeaker}>
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
                })}
              </Box>
            );
          }}
          ListHeaderComponent={() => (
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
          )}
        />
      </RenderIf>
      <Box
        boxShadow={!isOpen ? "0px 1px 2px rgba(0, 0, 0, 0.14)" : ""}
        position="absolute"
        bg="white"
        top={isOpen ? "auto" : 0}
        bottom={0}
        width="100%"
        borderTopLeftRadius={12}
        borderTopRightRadius={12}
        py={18}
      >
        <Box flexDirection="row" px={16} justifyContent="space-between">
          <Box
            flexDirection="row"
            alignContent="center"
            justifyContent="center"
          >
            <Box
              bg="control.ghost.background"
              width={160}
              borderRadius={3}
              height={42}
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                textAlign="center"
                fontFamily="bold"
                color="control.ghost.textPrimary"
                fontSize={3}
              >
                ✌️ Leave quietly
              </Typography>
            </Box>
          </Box>
          <Box flexDirection="row">
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
      </Box>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  speakerIcons: { width: 75, height: 75, borderRadius: 75 / 2.4 },
  othersIcons: { width: 62, height: 62, borderRadius: 62 / 2.5 },
});

export default React.forwardRef(Room);
