import styled from "styled-components";
import edit from "../../../assets/icons/edit.svg?react";
import del from "../../../assets/icons/delete.svg?react";
import keldi from "../../../assets/icons/keldi.svg?react";
import sababli from "../../../assets/icons/sababli.svg?react";
import sababsiz from "../../../assets/icons/sababsiz.svg?react";
import birinchi from "../../../assets/icons/birinchi.svg?react";

export const Icon = styled.div``;
Icon.Keldi = styled(keldi)``;
Icon.Sababsiz = styled(sababsiz)``;
Icon.Sababli = styled(sababli)``;
Icon.Birinchi = styled(birinchi)``;

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
Action.Move = styled(edit)`
  padding: 10px;
  width: 42px;
  height: 42px;
`;
Action.Delete = styled(del)`
  padding: 10px;
  width: 42px;
  height: 42px;
`;
