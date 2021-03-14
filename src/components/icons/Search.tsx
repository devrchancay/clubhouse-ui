import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SearchIcon(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.435 25.8a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm0 2c2.518 0 4.807-.98 6.507-2.578l1.13 1.096-.166.868a.5.5 0 00.14.452l4.483 4.385a.5.5 0 00.707-.008l.35-.358.001.002.348-.359.7-.715a.5.5 0 00-.008-.707l-4.484-4.386a.5.5 0 00-.451-.132l-.964.2-1.095-1.06a9.463 9.463 0 002.302-6.2 9.5 9.5 0 10-9.5 9.5z"
        fill="#000"
      />
    </Svg>
  );
}

export default React.memo(SearchIcon);
