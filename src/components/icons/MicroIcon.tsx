import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

function MicroIcon(props: SvgProps) {
  return (
    <Svg width={19} height={21} viewBox="0 0 19 21" fill="none" {...props}>
      <Rect
        x={6.029}
        y={2.265}
        width={5.5}
        height={12.5}
        rx={2.75}
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.43 9.465a.7.7 0 10-1.4 0v2.55a5.751 5.751 0 005 5.702v1.548H6.28a.75.75 0 000 1.5h5a.75.75 0 000-1.5H9.53v-1.548c2.82-.368 5-2.78 5-5.702v-2.55a.7.7 0 00-1.4 0v2.55a4.35 4.35 0 01-8.7 0v-2.55zm4.904 5.244a2.751 2.751 0 002.195-2.694v-3.25 3.25a2.751 2.751 0 01-2.195 2.694z"
        fill="#333"
      />
      <Rect
        x={1.151}
        y={3.386}
        width={3.159}
        height={20.444}
        rx={1.58}
        transform="rotate(-45 1.151 3.386)"
        fill="#DA615C"
        stroke="#fff"
        strokeWidth={1.2}
      />
    </Svg>
  );
}

export default React.memo(MicroIcon);
