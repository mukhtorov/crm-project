/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import GenericSelect from "../../Generics/Select";
import Title from "../../Generics/Title";

export const AllLidsModal = (props) => {
  const { data } = props;
  const selectData = data && [
    { value: "Frontend", title: "Frontend" },
    { value: "Backend", title: "Backend" },
  ];
  console.log(data, "data");
  return (
    <Modal {...props}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Studentning ismi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Yo'nalishni tanlang
      </Subtitle>
      <GenericSelect data={selectData} width={"100%"} value={data?.group} />
      {/* daraja */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Darajangizni tanlang
      </Subtitle>
      <GenericSelect data={selectData} width={"100%"} value={data?.level} />
      {/* Kun */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Kun tanlang
      </Subtitle>
      <GenericSelect data={selectData} width={"100%"} value={data?.days} />
      {/* Kelish sanasi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Boshlash sanasini tanlang
      </Subtitle>
      <GenericSelect data={selectData} width={"100%"} value={data?.date} />
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Izoh
      </Subtitle>
      <GenericInput fontWeight={500} width={500} />
    </Modal>
  );
};

export default AllLidsModal;
