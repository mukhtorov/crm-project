/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
// import GenericSelect from "../../Generics/Select";
import AllLidsModal from "./modal";

export const Hodimlar = () => {
  // const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };
  const onMove = (e) => {
    e.stopPropagation();
  };
  const headCells = [
    { id: "name", label: "To'liq ism" },
    { id: "birthDate", label: "Tug'ilgan Sana" },
    { id: "jinsi", label: "Jinsi" },
    { id: "role", label: "Vazifasi" },
    { id: "tel", label: "Telefon raqami" },
    { id: "filial", label: "Filial" },
    {
      id: "action",
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Move onClick={onMove} />
        </Action>
      ),
    },
  ];
  let rows = [
    {
      id: 1,
      name: "Eshmatov Toshmat",
      birthDate: "12-26-1994",
      jinsi: "erkak",
      role: "Moderator",
      tel: "+998 20 007 1226",
      filial: "Chilonzor",
    },
    {
      id: 2,
      name: "Holmatov Gulmat",
      birthDate: "12-26-1991",
      jinsi: "erkak",
      role: "Moderator",
      tel: "+998 20 007 1226",
      filial: "Ganga",
    },
    {
      id: 3,
      name: "Eshmatov Toshmat",
      birthDate: "12-26-1992",
      jinsi: "erkak",
      role: "Moderator",
      tel: "+998 20 007 1226",
      filial: "Beruniy",
    },
  ];
  // const data1 = [
  //   { value: "uzbek", title: "Uzbek" },
  //   { value: "russian", title: "Russian" },
  //   { value: "english", title: "English" },
  // ];

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
        rows={rows}
        checkbox={false}
      >
        {/* <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} /> */}
      </GenericTable>
    </Container>
  );
};

export default Hodimlar;
