import { styled } from "styled-components";

interface SpanProps {
  $isChecked: boolean;
}

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e1e1e1;
  min-height: 30px;
  border-radius: 8px;
  font-size: 10px;
  padding: 0 20px;
`;

export const CheckButton = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  cursor: pointer;
  left: 7px;
  width: 10px;
`;
export const DeleteButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 6px;
  width: 16px;
  height: 16px;
`;
export const DeleteImg = styled.img`
  object-fit: contain;
  width: 100%;
`;
export const Span = styled.span<SpanProps>`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration-line: ${(props) =>
    props.$isChecked ? "line-through" : "none"};
  height: 100%;
  overflow: auto;
`;
