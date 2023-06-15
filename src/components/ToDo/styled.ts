import { styled } from "styled-components";

export const ToDoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  top: 0;
  left: 0;
`;
export const CloseBtn = styled.div`
  position: absolute;
  cursor: pointer;
  right: 10px;
  bottom: 5px;
  z-index: 999;
  position: absolute;
  cursor: pointer;
  font-size: 11px;
`;

export const ListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  gap: 10px;
`;
