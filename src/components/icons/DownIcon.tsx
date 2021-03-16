import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function DownIcon(props: SvgProps) {
  return (
    <Svg width={23} height={14} viewBox="0 0 23 14" fill="none" {...props}>
      <Path d="M2 2l9.5 9.5L21 2" stroke="#000" strokeWidth={3} />
    </Svg>
  );
}

export default React.memo(DownIcon);
