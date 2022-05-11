import styled from "styled-components";
import { Colors, TextStyles } from "../../Theme";
import { Shadows } from "../../Theme";
export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}


const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  border-color: ${Colors.Brand.Button};
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: ${Colors.Brand.White};
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #6B10B1;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: ${Colors.Brand.Text};
    font-weight: 100;
    font-size: 1rem;
  }
`;