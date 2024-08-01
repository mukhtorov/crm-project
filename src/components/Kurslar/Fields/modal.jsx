/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import Title from "../../Generics/Title";
import MultipleSelect from "../GroupsList/Multiselect";

export const AllLidsModal = (props) => {
  const { data } = props;

  return (
    <Modal {...props}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* Kursning yo’nalishi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Kursning yo’nalishi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />

      {/* Filial */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Filial
      </Subtitle>
      <MultipleSelect />
    </Modal>
  );
};

export default AllLidsModal;
