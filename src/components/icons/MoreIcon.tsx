import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function MoreIcon(props: SvgProps) {
  return (
    <Svg width={20} height={4} viewBox="0 0 20 4" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z"
        fill="#333"
      />
    </Svg>
  );
}

export default React.memo(MoreIcon);
