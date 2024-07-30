/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import GenericSelect from "../../Generics/Select";
import AllLidsModal from "./modal";
import useFetch from "../../../hooks/useFetch";
import { StudentsContext } from "../../../context/students";

export const AllLids = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [state, dispatch] = useContext(StudentsContext);
  const [spinner, setSpinner] = useState(false);

  const request = useFetch();

  const getStudent = async () => {
    setSpinner(true);
    let res = await request("/tabs/students");
    dispatch({ type: "get", payload: res });
    setSpinner(false);
  };

  // fetch
  useEffect(() => {
    getStudent();
  }, []);

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };
  const onMove = (e, value) => {
    setSpinner(true);
    e.stopPropagation();
    console.log(value);
    request(`/tabs/students/id/*${value?.id}*`, { method: "DELETE" }).then(
      (rs) => {
        console.log(rs, "deleted");
        getStudent();
      }
    );
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
          <Action.Move onClick={(e) => onMove(e, res)} />
        </Action>
      ),
    },
  ];

  const data1 = [
    { value: "uzbek", title: "Uzbek" },
    { value: "russian", title: "Russian" },
    { value: "english", title: "English" },
  ];

  const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };
  const onSave = () => {
    // setModal(!modalOpen);
  };

  console.log(state, "stateat");
  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
      />
      <Breadcrumb>
        <GenericButton type="import" onClick={() => setOpen(!open)}>
          Import
        </GenericButton>
        <GenericButton type="filter" onClick={() => setOpen(!open)}>
          Filter
        </GenericButton>
        <GenericButton type="add" onClick={onToggleModal}>
          Lid qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        open={open}
        headCells={headCells}
        rows={state}
        spinner={spinner}
      >
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
      </GenericTable>
    </Container>
  );
};
