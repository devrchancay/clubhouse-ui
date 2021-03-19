import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function PlusplusIcon(props: SvgProps) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a1.5 1.5 0 00-1.5 1.5v6h-6a1.5 1.5 0 100 3h6v6a1.5 1.5 0 003 0v-6h6a1.5 1.5 0 000-3h-6v-6A1.5 1.5 0 009 0z"
        fill="#333"
      />
    </Svg>
  );
}

export default React.memo(PlusplusIcon);
