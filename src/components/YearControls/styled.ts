import { styled } from "styled-components";
import Colors from "../../constants/colors";

export const PanelWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  width: 100%;
  height: 20px;
  gap: 20px;
`;

export const MonthSelect = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #e1dfdf;
  border-radius: 5px;
  font-size: 10px;
  padding-left: 5px;
`;

export const YearSelect = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #e1dfdf;
  border-radius: 5px;
  font-size: 10px;
  padding-left: 5px;
`;

export const Arrow = styled.img`
  position: absolute;
  right: 5px;
  top: 40%;
  width: 10px;
  object-fit: contain;
`;
