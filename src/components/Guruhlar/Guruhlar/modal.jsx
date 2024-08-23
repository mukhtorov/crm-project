/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import GenericSelect from "../../Generics/Select";
import Title from "../../Generics/Title";
import { groups } from "../../../utils/groups";
import { level } from "../../../utils/level";
import { status, type } from "../../../utils/status";
import { useEffect, useState } from "react";
import moment from "moment";
import useFetch from "../../../hooks/useFetch";
import MultipleSelect from "./Multiselect";
import { weeks } from "../../../mock/weeks";

export const AllLidsModal = (props) => {
  const { data, category = "" } = props;

  const initialState = {
    title: "",
    group: "", //G11
    added_date: `${moment().day()}/${moment().month()}/${moment().year()}`,
    field: "", // Frontend
    status: false,
    type: "Online",
    start_time: "",
    end_time: "",
    category,
    days: "",
    mentors: "0",
    filial: "",
    location: "",
  };

  const [state, setState] = useState(initialState);
  const [mentors, setMentors] = useState([]);
  const [categroy, setCategory] = useState([]);
  const [filials, setFilials] = useState([]);

  const request = useFetch();

  const getUstoz = async () => {
    let res = await request("/tabs/mentors");
    console.log(res, "res");
    let ment = res.map((val) => val.name);
    setMentors(ment);
  };
  const getFilials = async () => {
    let res = await request("/tabs/filials");
    console.log(res, "res");
    let ment = res.map((val) => {
      return { ...val, value: val.title };
    });
    console.log(ment, "ment");
    setFilials(ment);
  };

  const getCategory = async () => {
    let res = await request("/tabs/category");
    console.log(res, "res");
    let ment = res.map((val) => val.category);
    setCategory(ment);
  };

  useEffect(() => {
    getUstoz();
    getCategory();
    getFilials();
  }, []);

  const onSave = () => {
    // edit
    if (data?.id) {
      request(`/tabs/groups/id/${data.id}`, {
        method: "PATCH",
        body: state,
      }).then(() => {
        props.onSave();
        props.reload();
        props.onClose(setState(initialState));
      });
    }
    // add
    else
      request("/tabs/groups", {
        method: "POST",
        body: { ...state, id: Date.now() },
      }).then(() => {
        props.onSave();
        props.reload();
        props.onClose(setState(initialState));
      });
  };

  useEffect(() => {
    if (data) {
      setState({ ...state, ...data });
    }
  }, [data]);

  const onChangeFilter = ({ target }) => {
    const { value, name } = target;

    let loc = filials?.find((val) => val.title === value);
    console.log(loc, "loc");

    console.log(name, "val");
    setState({ ...state, [name]: value, location: loc?.src });
  };
  return (
    <Modal {...props} onSave={onSave}>
      <Title size="34px">Guruh Qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Guruh nomi
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.title || ""}
        name="title"
        onChange={onChangeFilter}
      />

      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Yo'nalishni tanlang
      </Subtitle>
      <GenericSelect
        data={groups}
        width={"100%"}
        onChange={onChangeFilter}
        name="field"
        value={state.field}
      />
      {/* daraja */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Darajangizni tanlang
      </Subtitle>
      <GenericSelect
        data={level}
        width={"100%"}
        onChange={onChangeFilter}
        name="level"
        value={state.lavel}
      />
      {/* Kun */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Boshlanish vaqti
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        name="start_time"
        value={state?.start_time}
        onChange={onChangeFilter}
      />
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Ustozlar
      </Subtitle>
      <MultipleSelect
        names={mentors}
        name="mentors"
        onChange={onChangeFilter}
      />

      {/* Kelish sanasi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Tugash vaqti
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.end_time}
        name="end_time"
        onChange={onChangeFilter}
      />
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        O'qish Turi
      </Subtitle>
      <GenericSelect
        data={type}
        width={"100%"}
        onChange={onChangeFilter}
        value={state.type}
        name="type"
      />
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Status
      </Subtitle>
      <GenericSelect
        data={status}
        width={"100%"}
        onChange={onChangeFilter}
        value={state.status}
        name="status"
      />
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Hafta kunlarinin tanlang
      </Subtitle>
      <MultipleSelect names={weeks} name="days" onChange={onChangeFilter} />
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Yo'nalishni tanlang
      </Subtitle>
      <MultipleSelect
        names={categroy}
        name="categroy"
        onChange={onChangeFilter}
      />
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Filialni tanlang
      </Subtitle>
      <GenericSelect
        name="filial"
        onChange={onChangeFilter}
        data={filials}
        width={"100%"}
        value={state.filial}
      />
    </Modal>
  );
};

export default AllLidsModal;
