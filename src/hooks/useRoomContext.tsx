import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

function useRoomContext() {
  const context = useContext(RoomContext);

  if (!context) {
    throw new Error("Context not initialized");
  }
  return context;
}

export default useRoomContext;
