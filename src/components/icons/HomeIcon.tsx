import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function HomeIcon(props: SvgProps) {
  return (
    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...props}>
      <Path
        d="M0 4.24a.5.5 0 01.188-.39l4.5-3.6a.5.5 0 01.624 0l4.5 3.6a.5.5 0 01.188.39V9.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V4.24z"
        fill="#55AB67"
      />
    </Svg>
  );
}

export default React.memo(HomeIcon);
