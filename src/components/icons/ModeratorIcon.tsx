import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function ModeratorIcon(props: SvgProps) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={7} cy={7} r={7} fill="#55AB67" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25 2.75a.75.75 0 111.5 0v2.951l2.556-1.476a.75.75 0 01.75 1.3L8.501 7l2.555 1.475a.75.75 0 11-.75 1.3L7.751 8.299v2.951a.75.75 0 01-1.5 0V8.3L3.695 9.774a.75.75 0 11-.75-1.3L5.501 7 2.945 5.525a.75.75 0 01.75-1.3l2.556 1.476V2.75z"
        fill="#fff"
      />
    </Svg>
  );
}

export default React.memo(ModeratorIcon);
