/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import GenericSelect from "../../Generics/Select";
import Title from "../../Generics/Title";

export const AllLidsModal = (props) => {
  return (
    <Modal {...props}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Studentning ismi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} />
      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Yo'nalishni tanlang
      </Subtitle>
      <GenericSelect width={"100%"} />
      {/* daraja */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Darajangizni tanlang
      </Subtitle>
      <GenericSelect width={"100%"} />
      {/* Kun */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Kun tanlang
      </Subtitle>
      <GenericSelect width={"100%"} />
      {/* Kelish sanasi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Boshlash sanasini tanlang
      </Subtitle>
      <GenericSelect width={"100%"} />
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Izoh
      </Subtitle>
      <GenericInput fontWeight={500} width={500} />
    </Modal>
  );
};

export default AllLidsModal;
