import styled from "styled-components";
import edit from "../../../assets/icons/edit.svg?react";
import del from "../../../assets/icons/delete.svg?react";

export const Container = styled.div``;
export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  /* gap: 18px; */
  z-index: 9999;
`;

Action.Edit = styled(edit)`
  padding: 10px;
  width: 42px;
  height: 42px;
`;
Action.Move = styled(del)`
  padding: 10px;
  width: 42px;
  height: 42px;
`;
