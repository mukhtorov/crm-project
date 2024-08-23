/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import GenericSelect from "../../Generics/Select";
import Title from "../../Generics/Title";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";

const initialState = {
  name: "",
  capacity: "0",
  free_times: "", //G11
  wifi: "FALSE", // Frontend
  monitor: "FALSE",
  status: "FALSE",
  white_board: "FALSE",
};

export const AllLidsModal = (props) => {
  const [state, setState] = useState(initialState);
  const request = useFetch();

  const { data } = props;
  const status = [
    { value: "TRUE", title: "TRUE" },
    { value: "FALSE", title: "FALSE" },
  ];
  useEffect(() => {
    if (data) {
      setState({ ...state, ...data });
    }
  }, [data]);
  const onChangeFilter = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  const onSave = () => {
    // edit
    if (data?.id) {
      request(`/tabs/rooms/id/${data.id}`, {
        method: "PATCH",
        body: state,
      }).then(() => {
        props.reload();
        props?.onClose(setState(initialState));
      });
    }
    // add
    else
      request("/tabs/rooms", {
        method: "POST",
        body: { ...state, id: Date.now() },
      }).then(() => {
        props.reload();
        props.onClose(setState(initialState));
      });
  };

  return (
    <Modal {...props} onSave={onSave}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Xonaing nomi
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.name}
        name="name"
        onChange={onChangeFilter}
      />
      {/* capacity */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Xonaning sig'imi
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.capacity}
        onChange={onChangeFilter}
        name="capacity"
      />
      {/* capacity */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Bo'sh vaqtlar
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.free_times}
        onChange={onChangeFilter}
        name="free_times"
      />
      {/* daraja */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        WI-FI
      </Subtitle>
      <GenericSelect
        onChange={onChangeFilter}
        data={status}
        width={"100%"}
        value={state?.wifi}
        name="wifi"
      />
      {/* Kun */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Monitor
      </Subtitle>
      <GenericSelect
        data={status}
        onChange={onChangeFilter}
        width={"100%"}
        value={state?.monitor}
        name="monitor"
      />
      {/* Kelish sanasi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        White Boards
      </Subtitle>
      <GenericSelect
        data={status}
        onChange={onChangeFilter}
        width={"100%"}
        value={state?.wifi_board}
        name="wifi_board"
      />
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Status
      </Subtitle>
      <GenericSelect
        onChange={onChangeFilter}
        data={status}
        width={"100%"}
        value={state?.status}
        name="status"
      />
    </Modal>
  );
};

export default AllLidsModal;
