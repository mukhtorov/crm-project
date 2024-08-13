/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import Title from "../../Generics/Title";
import { Devider, Input, Section } from "./style";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";

const initialState = { title: "", category: "", filials: [], schedule: "" };
export const AllLidsModal = (props) => {
  const [state, setState] = useState(initialState);
  const { data } = props;
  const request = useFetch();
  const onChangeFilter = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    let filials = data?.filials?.replaceAll(/["' \[\]]/g, "").split(",");
    console.log(filials, "fii");
    if (data) {
      setState({ ...state, ...data, filials: filials || [] });
    }
  }, [data]);

  const onSave = () => {
    // edit
    if (data?.id) {
      request(`/tabs/category/id/${data.id}`, {
        method: "PATCH",
        body: { ...state, category: state.title.toLowerCase() },
      }).then(() => {
        props.reload();
        props.onClose(setState(initialState));
      });
    }
    // add
    else
      request("/tabs/category", {
        method: "POST",
        body: { ...state, category: state.title.toLowerCase(), id: Date.now() },
      }).then(() => {
        props.reload();
        props.onClose(setState(initialState));
      });
  };

  const onCheck = ({ target }) => {
    const { name } = target;
    let filials = state.filials.includes(name)
      ? state.filials.filter((val) => val !== name)
      : [...state.filials, name];
    setState({ ...state, filials });
  };

  return (
    <Modal {...props} onSave={onSave}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Yo'nalish turi
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.title}
        name="title"
        onChange={onChangeFilter}
      />

      {/* Filial */}
      <Devider>
        <Devider.Filiallar>
          <Devider.Title>Filiallar</Devider.Title>
          <Section>
            <Checkbox
              onChange={onCheck}
              checked={state.filials.includes("Chilonzor")}
              name="Chilonzor"
            />
            Chilonzor
          </Section>
          <Section>
            <Checkbox
              onChange={onCheck}
              checked={state.filials.includes("Namangan")}
              name="Namangan"
            />
            Namangan
          </Section>
          <Section>
            <Checkbox
              onChange={onCheck}
              checked={state.filials.includes("Beruniy")}
              name="Beruniy"
            />
            Beruniy
          </Section>
          <Section>
            <Checkbox
              onChange={onCheck}
              name="Ganga"
              checked={state.filials.includes("Ganga")}
            />
            Ganga
          </Section>
        </Devider.Filiallar>
        <Devider.Role>
          <Devider.Title>Role</Devider.Title>
          <Input
            onChange={onChangeFilter}
            value={state.schedule}
            name="schedule"
          />
          <Input
            onChange={onChangeFilter}
            value={state.schedule}
            name="schedule"
          />
          <Input
            onChange={onChangeFilter}
            value={state.schedule}
            name="schedule"
          />
          <Input
            onChange={onChangeFilter}
            value={state.schedule}
            name="schedule"
          />
        </Devider.Role>
      </Devider>
    </Modal>
  );
};

export default AllLidsModal;
