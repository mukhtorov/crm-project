/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import GenericSelect from "../../Generics/Select";
import Title from "../../Generics/Title";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";

const initialState = {
  name: "",
  surname: "",
  date_birth: "", //G11
  sex: "male", // Frontend
  status: "",
  phone: "",
  filial: "Chilnzor",
};

export const AllLidsModal = (props) => {
  const [role, dispatch] = useState([]);
  const [filials, setFilials] = useState([]);
  const [state, setState] = useState(initialState);
  const request = useFetch();

  const { data } = props;
  console.log(data, "data");
  const selectData = [
    { value: "male", title: "Male" },
    { value: "female", title: "Female" },
  ];
  useEffect(() => {
    if (data) {
      setState({ ...state, ...data });
    }
  }, [data]);

  const getData = async () => {
    let data = await request(`/tabs/roles`);
    let filials = await request(`/tabs/filials`);

    dispatch(data || []);
    setFilials(filials || []);
  };

  useEffect(() => {
    getData();
  }, []);
  const onClose = () => {
    props.onClose();
    setState(initialState);
  };

  const onSave = () => {
    // edit
    if (data?.id) {
      request(`/tabs/staffs/id/${data.id}`, {
        method: "PATCH",
        body: state,
      }).then(() => {
        props.reload();
        onClose();
      });
    }
    // add
    else
      request("/tabs/staffs", {
        method: "POST",
        body: { ...state, id: Date.now() },
      }).then(() => {
        props.reload();
        onClose();
      });
  };

  const onChangeFilter = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  return (
    <Modal {...props} onClose={onClose} onSave={onSave}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Ismi
      </Subtitle>
      <GenericInput
        name="name"
        onChange={onChangeFilter}
        fontWeight={500}
        width={500}
        value={state?.name}
      />
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Familya
      </Subtitle>
      <GenericInput
        name="surname"
        onChange={onChangeFilter}
        fontWeight={500}
        width={500}
        value={state?.surname}
      />
      {/* tel raqam */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Telefon raqam
      </Subtitle>
      <GenericInput
        name="phone"
        onChange={onChangeFilter}
        fontWeight={500}
        width={500}
        value={state?.phone}
      />
      {/* tel raqam */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Tug'ulgan sana
      </Subtitle>
      <GenericInput
        name="date_birth"
        onChange={onChangeFilter}
        fontWeight={500}
        width={500}
        value={state?.date_birth}
      />
      {/* ustoz */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Status
      </Subtitle>
      <GenericSelect
        data={role}
        width={"100%"}
        value={state?.status?.toLowerCase()}
        name="status"
        onChange={onChangeFilter}
      />
      {/* foiz */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Filial tanlang
      </Subtitle>
      <GenericSelect
        name="filial"
        onChange={onChangeFilter}
        data={filials}
        width={"100%"}
        value={state?.filial}
      />
      {/* daraja */}
      <Subtitle mt={16} Subtitlemb={8} color={"#929FAF"}>
        Jinsi
      </Subtitle>
      <GenericSelect
        name="sex"
        onChange={onChangeFilter}
        data={selectData}
        width={"100%"}
        value={state?.sex}
      />
    </Modal>
  );
};

export default AllLidsModal;
