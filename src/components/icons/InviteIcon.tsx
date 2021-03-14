import * as React from "react";
import Svg, { SvgProps, Path, Rect, Mask } from "react-native-svg";

function InviteIcon(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        d="M9.814 13.895A2 2 0 009 15.505V28a2 2 0 002 2h18a2 2 0 002-2V15.535a2 2 0 00-.89-1.664l-9.472-6.314a2 2 0 00-2.296.054l-8.528 6.284z"
        stroke="#000"
        strokeWidth={2}
      />
      <Rect
        x={11.5}
        y={10.5}
        width={17}
        height={15}
        rx={1.5}
        fill="#fff"
        stroke="#000"
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={9}
        y={15.318}
        width={22}
        height={15}
        fill="#000"
      >
        <Path fill="#fff" d="M9 15.318h22v15H9z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 17.318V28a1 1 0 01-1 1H11a1 1 0 01-1-1V17.667l7.874 5.249a3 3 0 003.275.035L30 17.318z"
        />
      </Mask>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 17.318V28a1 1 0 01-1 1H11a1 1 0 01-1-1V17.667l7.874 5.249a3 3 0 003.275.035L30 17.318z"
        fill="#F1EFE5"
      />
      <Path
        d="M30 17.318h1v-1.822l-1.537.978.537.844zm-20 .349l.555-.832L9 15.798v1.869h1zm7.874 5.249l-.555.832.555-.832zm3.275.035l.537.843-.537-.843zM29 17.318V28h2V17.318h-2zM29 28v2a2 2 0 002-2h-2zm0 0H11v2h18v-2zm-18 0H9a2 2 0 002 2v-2zm0 0V17.667H9V28h2zm7.429-5.916l-7.874-5.25-1.11 1.665 7.874 5.249 1.11-1.664zm2.183.023a2 2 0 01-2.183-.023l-1.11 1.664a4 4 0 004.367.046l-1.074-1.687zm8.851-5.633l-8.851 5.633 1.074 1.688 8.85-5.633-1.073-1.688z"
        fill="#000"
        mask="url(#prefix__a)"
      />
    </Svg>
  );
}

export default React.memo(InviteIcon);
