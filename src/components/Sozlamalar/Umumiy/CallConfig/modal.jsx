/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../../Generics/Modal";
import GenericInput from "../../../Generics/Input";
import Subtitle from "../../../Generics/Subtitle";
import Title from "../../../Generics/Title";
import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";

export const CallModal = (props) => {
  const [state, setState] = useState({});
  const request = useFetch();

  const onChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  const onSave = () => {
    request("/tabs/status", {
      method: "POST",
      body: state,
    }).then(() => {
      props?.reload();
    });

    props.onSave();
  };

  return (
    <Modal {...props} onSave={onSave}>
      <Title size="34px">Sorovnoma Qo'shish</Title>
      {/* Nome */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Nomi
      </Subtitle>
      <div style={{ display: "flex", gap: 10 }}>
        <GenericInput
          fontWeight={500}
          width={500}
          value={state?.title}
          name="title"
          onChange={onChange}
        />
        <input
          onChange={onChange}
          style={{
            outline: "none",
            border: 0,
            height: "44px",
            width: "100px",
          }}
          type="color"
          name="color"
        />
      </div>
    </Modal>
  );
};

export default CallModal;
