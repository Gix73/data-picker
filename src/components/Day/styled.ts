import { styled } from "styled-components";
import Colors from "../../constants/colors";
import Borders from "../../constants/borders";

interface Props {
  $bgColor: string;
  $borderRadius: string;
  $textColor: string;
  $isSelected: boolean;
  $isCurrentMonth: boolean;
  $isWeekday: boolean | undefined;
  $haveTodo: boolean;
  $isHoliday: boolean;
  $isStartDate: boolean;
  $isEndDate: boolean;
  $isBetween: boolean;
}

export const DayWrapper = styled.div<Props>`
  display: flex;
  background-color: ${(props) => {
    if (props.$isSelected || props.$isStartDate || props.$isEndDate) {
      return Colors.BLUE;
    }
    if (props.$isBetween) {
      return Colors.LIGHT_BLUE;
    }
    if (props.$isHoliday) {
      return "#A6EC8782";
    }
    return Colors.WHITE;
  }};
  color: ${(props) => {
    if (
      props.$isSelected ||
      props.$isStartDate ||
      props.$isEndDate ||
      props.$isBetween
    ) {
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
  border: ${(props) => (props.$haveTodo ? "1px solid" : "none")};
  border-radius: ${(props) => {
    if (props.$isStartDate) {
      return Borders.LEFT;
    }
    if (props.$isEndDate) {
      return Borders.RIGHT;
    }
    if (props.$isSelected) {
      return Borders.ROUNDED;
    }
    if (props.$isBetween) {
      return Borders.DEFAULT;
    }
    return Borders.ROUNDED;
  }};
  cursor: pointer;
`;

export const Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
