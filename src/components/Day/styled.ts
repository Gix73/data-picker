import { styled } from "styled-components";

interface Props {
  $bgColor: string;
  $borderRadius: string;
  $textColor: string;
}

export const DayWrapper = styled.div<Props>`
  display: flex;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  max-width: 32px;
  width: 100%;
  height: 32px;
  font-size: 13px;
  border-radius: ${(props) => props.$borderRadius};
`;

export const Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
