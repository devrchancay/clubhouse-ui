import React from "react";
import useRoomContext from "../hooks/useRoomContext";
import Box from "./Box";
import HandIcon from "./icons/HandIcon";
import PlusPlusIcon from "./icons/PlusPlusIcon";
import RenderIf from "./RenderIf";
import Typography from "./Typography";

function RoomActionBar() {
  const { roomState } = useRoomContext();

  const isOpen = roomState === "open";

  return (
    <Box
      boxShadow={!isOpen ? "0px 1px 2px rgba(0, 0, 0, 0.14)" : ""}
      position="absolute"
      bg="white"
      width="100%"
      borderTopLeftRadius={12}
      borderTopRightRadius={12}
      py={20}
      top="auto"
      bottom={0}
    >
      <Box flexDirection="row" px={16} justifyContent="space-between">
        <Box flexDirection="row" alignContent="center" justifyContent="center">
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
  );
}

export default RoomActionBar;
