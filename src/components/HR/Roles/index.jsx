/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";

export const Roles = () => {
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
    { id: "daraja", label: "Daraja" },
    { id: "izoh", label: "Daraja Izohi" },

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
      daraja: "Moderator",
      izoh: "Adminlarga tegishli malumotlar",
    },
    {
      id: 2,
      daraja: "Director",
      izoh: "Bazadagi barcha malumotlarni ko'rish huquqi",
    },
    {
      id: 3,
      daraja: "Manager",
      izoh: "Barcha malumotlar, Director PM dan tashqari",
    },
    {
      id: 4,
      daraja: "O'qtuvchi",
      izoh: "Ustozning darslari holos",
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
          Ro'li qo'shish
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

export default Roles;
