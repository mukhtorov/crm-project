/* eslint-disable react/prop-types */

import { Arrow, Icon, ModalContainer, StatusWrapper } from "./style";

export const StatusModal = ({ open, align }) => {
  return open ? (
    <ModalContainer x={align.x} y={align.y}>
      <Arrow />
      <StatusWrapper>
        <Icon.Keldi /> Keldi
      </StatusWrapper>
      <StatusWrapper>
        <Icon.Birinchi /> Birinchi Dars
      </StatusWrapper>
      <StatusWrapper>
        <Icon.Sababli /> Sabali
      </StatusWrapper>
      <StatusWrapper>
        <Icon.Sababsiz /> Sababsiz
      </StatusWrapper>
    </ModalContainer>
  ) : null;
};

export default StatusModal;
