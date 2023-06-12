import { styled } from "styled-components";
import Colors from "../../constants/colors";

export const Grid = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 80%;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  grid-row-gap: 0px;
  padding: 20px 20px;
  top: 50px;
  background-color: white;
`;
