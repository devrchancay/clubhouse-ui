import styled from "styled-components/native";

import {
  typography,
  TypographyProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  color,
  ColorProps,
} from "styled-system";

type Props = TypographyProps & MarginProps & PaddingProps & ColorProps;

const Typography = styled.Text<Props>`
  ${typography}
  ${padding}
  ${margin}
  ${color}
  })}
`;

export default Typography;
