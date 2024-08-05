/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import GenericSelect from "../../Generics/Select";
import AllLidsModal from "../modal";
import { StudentsContext } from "../../../context/students";
import useQuery from "../../../hooks/useQuery";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import GenericInput from "../../Generics/Input";
import replace from "../../../hooks/useReplace";
import { groups } from "../../../utils/groups";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { useCell } from "../cell";

export const AllStudents = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [state, dispatch] = useContext(StudentsContext);
  const [spinner, setSpinner] = useState(false);
  const query = useQuery();

  const navigte = useNavigate();
  const request = useFetch();
  const location = useLocation();
  const [filter, setFilter] = useState({
    name: query.get("name") || "",
    field: query.get("field"),
    days: query.get("days"),
    admin: query.get("admin"),
    date: query.get("date") || "",
  });

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };
  const onMove = (e, value) => {
    setSpinner(true);
    e.stopPropagation();
    request(`/tabs/students/id/*${value?.id}*`, { method: "DELETE" }).then(
      () => {
        getStudent();
      }
    );
  };

  const getStudent = async (query = "") => {
    setSpinner(true);
    let res = await request(`/tabs/students${query}`);
    dispatch({ type: "get", payload: res });
    setSpinner(false);
  };

  // fetch
  useEffect(() => {
    getStudent();
  }, []);

  const onToggleModal = (callback) => {
    setModal(!modalOpen);
    setModalProps(null);
    callback && callback;
  };
  const onSave = () => {
    // setModal(!modalOpen);
  };

  const onChangeFilter = ({ target }) => {
    const { value, name } = target;
    setFilter({ ...filter, [name]: value });
    const query = replace(value, name);
    navigte(`${location.pathname}${query}`);
    getStudent(`/search${query}`);
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
        <GenericButton type="add" onClick={onToggleModal}>
          Student qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        open={open}
        headCells={useCell(onEdit, onMove)}
        rows={state}
        spinner={spinner}
      >
        <GenericInput
          value={filter.name}
          name="name"
          placeholder="full name"
          onChange={onChangeFilter}
        />
        <GenericSelect
          width={250}
          data={groups}
          name="field"
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
