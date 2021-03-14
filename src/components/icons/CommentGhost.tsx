import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function CommentGhost(props: SvgProps) {
  return (
    <Svg width={13} height={12} viewBox="0 0 13 12" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.393 3.185A3.81 3.81 0 013.47.215 14.584 14.584 0 018.105.158l.613.091a4.017 4.017 0 013.342 3.146c.178.843.193 1.713.045 2.561l-.088.508a4.305 4.305 0 01-3.61 3.52l-.348.052c-1.33.197-2.68.205-4.01.025-.61.968-2.03 1.452-2.884 1.452.765-.227.827-1.293.682-2.277A3.733 3.733 0 01.475 6.938L.308 5.98a6.912 6.912 0 01.046-2.608l.04-.186zM3.206 6a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2z"
        fill="#999"
      />
    </Svg>
  );
}

export default React.memo(CommentGhost);
