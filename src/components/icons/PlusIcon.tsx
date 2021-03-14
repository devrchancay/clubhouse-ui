import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function PlusIcon(props: SvgProps) {
  return (
    <Svg width={16} height={15} viewBox="0 0 16 15" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.706 0c-.69 0-1.25.56-1.25 1.25v5h-5a1.25 1.25 0 100 2.5h5v5a1.25 1.25 0 102.5 0v-5h5a1.25 1.25 0 000-2.5h-5v-5c0-.69-.56-1.25-1.25-1.25z"
        fill="#fff"
      />
    </Svg>
  );
}

export default React.memo(PlusIcon);
