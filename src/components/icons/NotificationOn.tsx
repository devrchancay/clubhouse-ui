import * as React from "react";
import Svg, { SvgProps, Rect, Path, Circle } from "react-native-svg";

function NotificationOn(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect
        x={17}
        y={24}
        width={6}
        height={8}
        rx={3}
        fill="#F1EFE5"
        stroke="#000"
        strokeWidth={2}
      />
      <Path
        d="M10.564 25.022l.707.707-.707-.707c-.36.36-.564.85-.564 1.361 0 .893.724 1.617 1.617 1.617h16.766c.893 0 1.617-.724 1.617-1.617 0-.51-.203-1-.564-1.361A8.317 8.317 0 0127 19.143v-2.828a6.263 6.263 0 00-5-6.135V10a2 2 0 10-4 0v.18c-2.91.6-5 3.16-5 6.135v2.828c0 2.204-.877 4.32-2.436 5.879z"
        fill="#F1EFE5"
        stroke="#000"
        strokeWidth={2}
      />
      <Circle
        cx={30.5}
        cy={12.5}
        r={7.5}
        fill="#EB4D3D"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path fill="#F1EFE5" d="M18 28h4v1h-4z" />
    </Svg>
  );
}

export default React.memo(NotificationOn);
