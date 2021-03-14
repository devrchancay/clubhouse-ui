import * as React from "react";
import Svg, { SvgProps, Path, Ellipse } from "react-native-svg";

function User(props: SvgProps) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <Path
        d="M.206 11.546c0-1.529.956-2.894 2.393-3.416a9.094 9.094 0 016.214 0 3.635 3.635 0 012.393 3.416c0 .25-.204.454-.454.454H.66a.454.454 0 01-.454-.454z"
        fill="#999"
      />
      <Ellipse cx={5.706} cy={3.25} rx={3} ry={3.25} fill="#999" />
    </Svg>
  );
}

export default React.memo(User);
