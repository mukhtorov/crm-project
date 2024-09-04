/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../../Generics/Modal";
import GenericInput from "../../../Generics/Input";
import Subtitle from "../../../Generics/Subtitle";
import Title from "../../../Generics/Title";
import { useState } from "react";
import useFetch from "../../../../hooks/useFetch";

const initialState = {
  src: "",
  location: "",
  value: "",
  title: "",
};

export const FiliallarModal = (props) => {
  const [data, setData] = useState(initialState || {});

  const request = useFetch();

  const onSave = () => {
    request("/tabs/filials", {
      method: "POST",
      body: { ...data, id: Date.now() },
    }).then((res) => props?.reload());
    props.onSave();
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setData({ ...data, [name]: value });
  };

  return (
    <Modal {...props} onSave={onSave}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* Nome */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Filial Nomi
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={data?.src}
        onChange={onChange}
        name="src"
      />
      {/* Manzil*/}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Xarita Manzili
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={data?.location}
        onChange={onChange}
        name="location"
      />
    </Modal>
  );
};

export default FiliallarModal;
