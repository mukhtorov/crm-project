/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import GenericSelect from "../../Generics/Select";
import Title from "../../Generics/Title";
import { groups } from "../../../utils/groups";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";

export const AllLidsModal = (props) => {
  const request = useFetch();

  const [state, setState] = useState({
    name: "webbrain",
    surname: "academy",
    group: "", //G11
    added_date: `${moment().day()}/${moment().month()}/${moment().year()}`,
    field: "", // Frontend
    phone: "",
    status: false,
    parents: "",
    admin: "Gulchiroy",
    type: "offline",
    payment: 0,
    time: "",
  });
  const { data } = props;

  useEffect(() => {
    if (data) {
      setState({ ...state, ...data });
    }
  }, []);

  const onChangeFilter = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  const onSave = () => {
    console.log("save");
    request("/tabs/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { state, id: Date.now() },
    }).then(() => {
      props.onClose();
    });
  };

  return (
    <Modal {...props} onSave={onSave}>
      <Title size="34px">Lid Qo'shish</Title>
      {/*  name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Ismingiz
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.name}
        name="name"
        onChange={onChangeFilter}
      />
      {/* surname */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Familyangiz
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.name}
        name="surname"
        onChange={onChangeFilter}
      />
      {/* Phone */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Telefon raqamingiz
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.phone}
        name="phone"
        onChange={onChangeFilter}
      />
      {/* parents */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Ota onangiz ismi
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.parents}
        name="parents"
        onChange={onChangeFilter}
      />
      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Yo'nalishni tanlang
      </Subtitle>
      <GenericSelect
        data={groups}
        width={"100%"}
        value={state?.group}
        name="field"
        onChange={onChangeFilter}
      />
      {/* surname */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Guruh nomi
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.name}
        name="group"
        onChange={onChangeFilter}
      />
      {/* time */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Dars vaqti (12:00 - 14:00)
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.parents}
        name="parents"
        onChange={onChangeFilter}
      />
      {/* Kun */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Kunni tanlang (kunlarni vergul bilan ajrating)
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.name}
        name="days"
        onChange={onChangeFilter}
      />

      {/* Kun */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Kun tanlang
      </Subtitle>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          // value={moment(filter.date)}
          // value={filter.date}
          // onChange={onSelectDate}
          sx={{ width: "100%" }}
          views={["year", "month", "day"]}
          slotProps={{ textField: { size: "small" } }}
          componentsProps={{
            actionBar: {
              actions: ["clear"],
            },
          }}
        />
      </LocalizationProvider>
    </Modal>
  );
};

export default AllLidsModal;
