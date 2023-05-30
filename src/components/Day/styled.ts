import { styled } from "styled-components";
import Colors from "../../constants/colors";
import Borders from "../../constants/borders";

interface Props {
  $bgColor: string;
  $borderRadius: string;
  $textColor: string;
  $isSelected: boolean;
  $isCurrentMonth: boolean;
  $isWeekday: boolean;
}

export const DayWrapper = styled.div<Props>`
  display: flex;
  background-color: ${(props) => {
    if (props.$isSelected) {
      return Colors.BLUE;
    }
    return Colors.WHITE;
  }};
  color: ${(props) => {
    if (props.$isSelected) {
      return Colors.WHITE;
    }
    if (props.$isCurrentMonth) {
      if (props.$isWeekday) {
        return Colors.RED;
      }
      return Colors.BLACK;
    }
    if (props.$isWeekday) {
      return Colors.RED_LIGHT;
    }
    return Colors.LIGHT_GREY;
  }};
  max-width: 32px;
  width: 100%;
  height: 32px;
  font-size: 13px;
  border-radius: ${Borders.ROUNDED};
  cursor: pointer;
`;

export const Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
