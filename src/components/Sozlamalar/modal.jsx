/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../Generics/Modal";
import GenericInput from "../Generics/Input";
import Subtitle from "../Generics/Subtitle";
import Title from "../Generics/Title";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const initialState = {
  status: "",
  half: "",
  full: "",
};
export const DarajalarModal = (props) => {
  const [state, setState] = useState(initialState);
  const request = useFetch();

  const onChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  const onSave = () => {
    console.log(state, "state");

    request(`/tabs/${props.url || ""}_status`, {
      method: "POST",
      body: { ...state, id: Date.now() },
    }).then(() => {
      props.reload();
      alert("added");
    });

    props.onSave();
  };

  return (
    <Modal {...props} onSave={onSave}>
      <Title size="34px">Daraja Qo'shish</Title>
      {/* Nome */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Nomi
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.status}
        onChange={onChange}
        name="status"
      />
      {/* Manzil*/}

      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <Subtitle mt={16} mb={8} color={"#929FAF"}>
            Yarim Stavka
          </Subtitle>
          <GenericInput
            fontWeight={500}
            value={state?.half}
            onChange={onChange}
            name="half"
          />
        </div>
        <div style={{ flex: 1 }}>
          <Subtitle mt={16} mb={8} color={"#929FAF"}>
            Bir Stavka
          </Subtitle>
          <GenericInput
            fontWeight={500}
            value={state?.full}
            onChange={onChange}
            name="full"
          />
        </div>
      </div>
    </Modal>
  );
};

export default DarajalarModal;
