/* eslint-disable react/prop-types */

import { Arrow, Icon, ModalContainer, StatusWrapper } from "./style";

export const StatusModal = ({ open, align, onClick }) => {
  return open ? (
    <ModalContainer x={align.x} y={align.y}>
      <Arrow />
      <StatusWrapper onClick={() => onClick("keldi")}>
        <Icon.Keldi /> Keldi
      </StatusWrapper>
      <StatusWrapper onClick={() => onClick("birinchi")}>
        <Icon.Birinchi /> Birinchi Dars
      </StatusWrapper>
      <StatusWrapper onClick={() => onClick("sababli")}>
        <Icon.Sababli /> Sabali
      </StatusWrapper>
      <StatusWrapper onClick={() => onClick("sababsiz")}>
        <Icon.Sababsiz /> Sababsiz
      </StatusWrapper>
    </ModalContainer>
  ) : null;
};

export default StatusModal;
