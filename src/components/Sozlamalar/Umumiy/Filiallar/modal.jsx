/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../../Generics/Modal";
import GenericInput from "../../../Generics/Input";
import Subtitle from "../../../Generics/Subtitle";
import Title from "../../../Generics/Title";

export const FiliallarModal = (props) => {
  const { data } = props;

  return (
    <Modal {...props}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* Nome */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Nomi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
      {/* Manzil*/}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Manzil
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
      {/* Sig'im */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Sig'im
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
      {/* Talab */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Talab
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
    </Modal>
  );
};

export default FiliallarModal;
