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
import HomeIcon from "./icons/HomeIcon";
import MicroIcon from "./icons/MicroIcon";
import ModeratorIcon from "./icons/ModeratorIcon";
import MoreIcon from "./icons/MoreIcon";
import RenderIf from "./RenderIf";
import Typography from "./Typography";

const snapPoints = [0, 0, "83%"];
const states = ["closed", "mini", "open"];

type Ref = BottomSheet;

interface Props {}

const Room: React.ForwardRefRenderFunction<Ref, Props> = (props, ref) => {
  const { currentRoom, setRoomState } = useRoomContext();
  const { height } = useWindowDimensions();

  const handleSheetChanges = useCallback((index: number) => {
    if (index !== 2) {
      setRoomState(states[index] ?? "closed");
    }
  }, []);

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
      <Box position="relative">
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
          contentContainerStyle={{
            paddingBottom: 40,
          }}
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
      </Box>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  speakerIcons: { width: 75, height: 75, borderRadius: 75 / 2.4 },
  othersIcons: { width: 62, height: 62, borderRadius: 62 / 2.5 },
});

export default React.forwardRef(Room);
