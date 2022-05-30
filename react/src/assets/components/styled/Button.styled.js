import styled from "styled-components";
import { Colors, TextStyles } from "../../Theme";
import { Shadows } from "../../Theme";

const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  transition-property: background-color, color, border-color;
  transition-duration: 0.3s;
  border-radius: 100px;
  cursor: pointer;
  background-color: ${Colors.Brand.Button};
  color: ${Colors.Brand.White};
  ${TextStyles.Bundler(TextStyles.S1)}
  :hover {
    background-color: ${Colors.Brand.Blue};
    color: ${Colors.Brand.Text};
    }
  filter: drop-shadow(${Shadows.button});
`;
export default Button;
