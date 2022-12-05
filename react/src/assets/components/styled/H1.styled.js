import styled from "styled-components";
import { TextStyles, Colors } from "../../Theme";

const H1 = styled.h1`
  ${TextStyles.Bundler(TextStyles.H1)};
  color: ${Colors.Brand.Text};
`;

export default H1;