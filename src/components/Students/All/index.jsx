/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import GenericSelect from "../../Generics/Select";
import AllLidsModal from "./modal";

export const AllStudents = () => {
  const [open, setOpen] = useState(false);
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
    { id: "name", label: "O'quvchining ismi" },
    {
      id: "completed",
      label: "Status",
      render: (res) => (
        <span
          style={{ color: !res?.completed ? "red" : "green", fontWeight: 600 }}
        >
          {res?.completed ? "Tugallangan" : "Tugallanmagan"}
        </span>
      ),
    },
    { id: "phone", label: "Telefon Raqam" },
    {
      id: "balance",
      label: "Balans",
      render: (res) => {
        let active = res?.balance?.includes("-");
        return (
          <span
            style={{
              background: active ? "red" : "green",
              color: "white",
              padding: "4px 10px",
              borderRadius: "8px",
            }}
          >
            {res?.balance}{" "}
          </span>
        );
      },
    },
    { id: "parent", label: "Ota onasi" },
    { id: "group", label: "Guruh / Fan" },
    { id: "date", label: "Dars kuni va vaqti" },
    { id: "addedDate", label: "Qo’shilgan sana" },
    { id: "admin", label: "Moderator" },
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
      name: "Webbrain",
      group: "Frontend",
      days: "toq kunlari",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
      level: "Beginer",
      phone: "+998 20 007 1226",
      balance: "-200,000",
      parent: "Eshmatov Toshmat",
      completed: false,
    },
    {
      id: 2,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      days: "toq kunlari",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
      level: "Junior",
      phone: "+998 20 007 1226",
      balance: "200,000",
      completed: false,
      parent: "Eshmatov Toshmat",
    },
    {
      id: 3,
      name: "Webbrain",
      group: "Frontend",
      days: "toq kunlari",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      level: "Advanced",
      admin: "Webbrain Admin",
      phone: "+998 20 007 1226",
      balance: "-200,000",
      parent: "Eshmatov Toshmat",
      completed: true,
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
      <GenericTable open={open} headCells={headCells} rows={rows}>
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
