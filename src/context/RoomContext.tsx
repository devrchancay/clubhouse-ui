import React, { createContext, ReactNode, useState } from "react";

const initialState = {
  roomState: "closed",
  setRoomState: (state: string) => {},
  currentRoom: {
    users: [],
  },
  setCurrentRoom: (room: any) => {},
};

export const RoomContext = createContext<typeof initialState>(initialState);

interface Props {
  children: ReactNode;
}

function RoomContextProvider({ children }: Props) {
  const [roomState, setRoomState] = useState("closed");
  const [currentRoom, setCurrentRoom] = useState({});

  return (
    <RoomContext.Provider
      value={{ roomState, currentRoom, setCurrentRoom, setRoomState }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomContextProvider;
