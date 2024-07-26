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

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 1px solid #f0f0f0;
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 8px;
  transform: translate(-50%, 15%);
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
`;

export const Arrow = styled.div`
  border: 1px solid #f0f0f0;
  width: 32px;
  height: 32px;
  align-self: center;
  transform: rotate(45deg);
  margin-top: -16px;
  background-color: white;
  border-color: #f0f0f0 transparent transparent #f0f0f0;
`;

export const StatusWrapper = styled.div`
  display: flex;
  /* height: 32px; */
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  /* margin: 5px 0; */
  &:hover {
    background: #f8fafc;
  }
`;

export const Devider = styled.div`
  display: flex;
  margin-top: 16px;
`;

Devider.Role = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  /*
  border: 1px solid #91d5ff;
   border-left: 0;
  border-radius: 0px 8px 8px 0px; */
`;
Devider.Filiallar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 8px;
`;

Devider.Title = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #253e5f80;
`;

export const Section = styled.div`
  display: flex;
  /* padding: 12px 0; */
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 4px 0 0 4px;
  background-color: #f8fafc;
  height: 40px;
`;

export const Input = styled.input`
  height: 40px;
  outline: none;
  border: 1px solid #f0f0f0;
  border-left: none;
  border-radius: 0px 4px 4px 0px;
  padding-left: 15px;
`;
