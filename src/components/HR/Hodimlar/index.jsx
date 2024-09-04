/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
// import GenericSelect from "../../Generics/Select";
import AllLidsModal from "./modal";
import useFetch from "../../../hooks/useFetch";

export const Hodimlar = () => {
  // const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [state, dispatch] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const request = useFetch();

  const getData = async () => {
    setSpinner(true);
    let category = await request(`/tabs/staffs`);

    dispatch(category || []);
    setSpinner(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };
  const onMove = (e, value) => {
    console.log(value, "vaallll");

    setSpinner(true);
    e.stopPropagation();
    request(`/tabs/staffs/id/*${value?.id}*`, { method: "DELETE" }).then(() => {
      getData();
    });
  };
  const headCells = [
    { id: "name", label: "To'liq ism" },
    { id: "date_birth", label: "Tug'ilgan Sana" },
    { id: "sex", label: "Jinsi" },
    { id: "status", label: "Status" },
    { id: "phone", label: "Telefon raqami" },
    { id: "filial", label: "Filial" },
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

  const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };
  const onSave = () => {
    // setModal(!modalOpen);
  };
  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
        reload={getData}
      />
      <Breadcrumb>
        {/* <GenericButton type="filter" onClick={() => setOpen(!open)}>
          Filter
        </GenericButton> */}
        <GenericButton type="add" onClick={onToggleModal}>
          Hodim qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        // open={open}
        headCells={headCells}
        rows={state}
        checkbox={false}
        spinner={spinner}
      ></GenericTable>
    </Container>
  );
};

export default Hodimlar;
