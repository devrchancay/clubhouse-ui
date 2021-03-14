import React, { ReactNode } from "react";

interface Props {
  condition: boolean;
  children: ReactNode;
}

function RenderIf({ condition, children }: Props) {
  if (condition) {
    return <>{children}</>;
  }

  return null;
}

export default RenderIf;
