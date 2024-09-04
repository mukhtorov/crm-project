/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../../Generics/Modal";
import GenericInput from "../../../Generics/Input";
import Subtitle from "../../../Generics/Subtitle";
import Title from "../../../Generics/Title";
import { useState } from "react";
import useFetch from "../../../../hooks/useFetch";

const initialState = {
  title: "",
  konversiya: 0,
  lids: 0,
};
export const SorovnomaModal = (props) => {
  const [data, setData] = useState({});

  const request = useFetch();

  const onChange = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value });
  };

  const onSave = () => {
    request("/tabs/media", {
      method: "POST",
      body: { ...data, id: Date.now() },
    }).then(() => props?.reload());
    props.onSave();
  };

  return (
    <Modal {...props} onSave={onSave}>
      <Title size="34px">Sorovnoma Qo'shish</Title>
      {/* Nome */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Nomi
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={data?.title}
        name="title"
        onChange={onChange}
      />
      {/* Manzil*/}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Barcha lidlar
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={data?.lids}
        name="lids"
        onChange={onChange}
      />
      {/* Sig'im */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Konversya
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={data?.konversiya}
        name="konversiya"
        onChange={onChange}
      />
    </Modal>
  );
};

export default SorovnomaModal;
