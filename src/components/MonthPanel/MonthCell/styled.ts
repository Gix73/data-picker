import { styled } from "styled-components";
import Colors from "../../../constants/colors";

interface Props {
  $isSelected: boolean;
}

export const Cell = styled.div<Props>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-size: 15px;
  background-color: ${(props) =>
    props.$isSelected ? Colors.LIGHT_GREY : Colors.WHITE};
`;
