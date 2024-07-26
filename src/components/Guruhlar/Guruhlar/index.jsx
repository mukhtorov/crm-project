/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
// import GenericSelect from "../../Generics/Select";
import AllLidsModal from "./modal";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import moment from "moment";

export const Guruhlar = () => {
  // const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };

  const headCells = [
    { id: "group", label: "Guruh / Fan" },
    { id: "kurs", label: "Kurs" },
    { id: "level", label: "Level" },
    { id: "start", label: "Boshlanish" },
    { id: "end", label: "Tugash" },
    { id: "turi", label: "Turi" },
    {
      id: "completed",
      label: "Status",
      render: (res) => <span>{res.completed ? "Completed" : "Active"}</span>,
    },
    {
      id: "action",
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Delete onClick={() => {}} />
          {/* <Action.Move onClick={onMove} /> */}
        </Action>
      ),
    },
  ];
  let rows = [
    {
      id: 1,
      group: "Frontend",
      start: "15:00",
      end: "17:00",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
      level: "Beginer",
      phone: "+998 20 007 1226",
      turi: "offline",
      kurs: "JavaScript",
      completed: false,
    },
    {
      id: 1,
      group: "Frontend",
      start: "15:00",
      end: "17:00",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
      level: "Beginer",
      phone: "+998 20 007 1226",
      turi: "offline",
      kurs: "JavaScript",
      completed: false,
    },
    {
      id: 1,
      group: "Frontend",
      start: "15:00",
      end: "17:00",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
      level: "Beginer",
      phone: "+998 20 007 1226",
      turi: "online",
      kurs: "JavaScript",
      completed: false,
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
        <GenericButton type="add" onClick={() => onToggleModal()}>
          Guruh qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        // open={open}
        headCells={headCells}
        rows={rows}
        checkbox={false}
        url="/guruhlar/guruhlar/checkin"
      >
        {/* <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            defaultValue={moment()}
            views={["year", "month", "day"]}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
        <GenericSelect data={data1} />
        <GenericSelect data={data1} /> */}
      </GenericTable>
    </Container>
  );
};

export default Guruhlar;
