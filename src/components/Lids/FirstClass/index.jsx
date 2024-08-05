/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { StudentsContext } from "../../../context/students";
import GenericInput from "../../Generics/Input";
import useQuery from "../../../hooks/useQuery";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import replace from "../../../hooks/useReplace";

export const FirstClass = () => {
  const query = useQuery();

  const [state, dispatch] = useContext(StudentsContext);
  const [filter, setFilter] = useState({
    name: query.get("name") || "",
    field: query.get("field"),
    days: query.get("days"),
    admin: query.get("admin"),
    date: query.get("date") || "",
  });
  const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [spinner, setSpinner] = useState(false);
  const navigte = useNavigate();
  const request = useFetch();

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };

  const headCells = [
    { id: "name", label: "O'quvchining ismi" },
    { id: "field", label: "Guruh / Fan" },
    { id: "days", label: "Dars kuni va vaqti" },
    { id: "added_date", label: "Qo’shilgan sana" },
    { id: "admin", label: "Moderator" },
    {
      id: "action",
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          {/* <Action.Move onClick={onMove} /> */}
        </Action>
      ),
    },
  ];

  const onToggleModal = (callback) => {
    setModal(!modalOpen);
    setModalProps(null);
    callback && callback();
  };
  const onSave = () => {
    // setModal(false);
  };

  const getStudent = async (query = "") => {
    setSpinner(true);
    let res = await request(`/tabs/students${query}`);
    console.log(res, "res");
    // if(Array.isArray(res))
    dispatch({ type: "get", payload: Array.isArray(res) ? res : [] });
    setSpinner(false);
  };

  const onSelectDate = (event) => {
    console.log(event);
    const time = moment(event);
    let date = `${time.date()}/${time.month()}/${time.year()}`;
    if (!time.date() && !time.month() && !time.year()) date = null;
    setFilter({ ...filter, date: date });
    const query = replace(date, "date");
    navigte(`${location.pathname}${query}`);
    getStudent(`/search${query}`);
  };
  const onChangeFilter = ({ target }) => {
    const { value, name } = target;
    setFilter({ ...filter, [name]: value });
    const query = replace(value, name);
    navigte(`${location.pathname}${query}`);
    getStudent(`/search${query}`);
  };
  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
        reload={getStudent}
      />
      <Breadcrumb>
        <GenericButton type="import" onClick={() => setOpen(!open)}>
          Import
        </GenericButton>
        <GenericButton type="filter" onClick={() => setOpen(!open)}>
          Filter
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        spinner={spinner}
        open={open}
        headCells={headCells}
        rows={state}
      >
        <GenericInput
          value={filter.name}
          name="name"
          placeholder="full name"
          onChange={onChangeFilter}
        />
        <GenericInput
          value={filter.week}
          name="days"
          onChange={onChangeFilter}
          placeholder="hafta kunlari"
        />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            value={moment(filter.date)}
            // value={filter.date}
            onChange={onSelectDate}
            views={["year", "month", "day"]}
            slotProps={{ textField: { size: "small" } }}
            componentsProps={{
              actionBar: {
                actions: ["clear"],
              },
            }}
          />
        </LocalizationProvider>
        <GenericInput
          value={filter.admin}
          name="admin"
          onChange={onChangeFilter}
          placeholder="moderator"
        />
      </GenericTable>
    </Container>
  );
};

export default FirstClass;
