/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
// import GenericSelect from "../../Generics/Select";
import AllLidsModal from "./modal";

export const Rooms = () => {
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
    { id: "rooms", label: "Xona" },
    { id: "capcity", label: "O'rinlar soni" },
    {
      id: "freetime",
      label: "Bo'sh vaqti",
      render: ({ freetime }) => {
        return (
          <span>
            {freetime.map((val) => (
              <span
                style={{
                  background: "whitesmoke",
                  margin: "5px",
                  borderRadius: "4px",
                  padding: "5px",
                }}
                key={val}
              >
                {val}
              </span>
            ))}
          </span>
        );
      },
    },
    { id: "wifi", label: "WI-FI" },
    { id: "monitor", label: "Monitor" },
    { id: "blackboard", label: "Blackboard" },
    { id: "status", label: "Status" },
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
      rooms: "Frontend Team",
      capcity: 20,
      freetime: ["14:00~16:00", "21:00"],
      wifi: "bor",
      monitor: "bor",
      blackboard: "yo'q",
      status: "Ishlayabdi",
    },
    {
      id: 2,
      rooms: "Backend Team",
      capcity: 20,
      freetime: ["11:00~12:00", "21:00"],
      wifi: "bor",
      monitor: "yo'q",
      blackboard: "bor",
      status: "Remontda",
    },
    {
      id: 3,
      rooms: "Mobile Team",
      capcity: 10,
      freetime: ["14:00~16:00", "21:00"],
      wifi: "yo'q",
      monitor: "bor",
      blackboard: "bor",
      status: "Ishlayabdi",
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
          Xona qo'shish
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
