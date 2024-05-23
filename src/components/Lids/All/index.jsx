import { useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";

export const AllLids = () => {
  const [open, setOpen] = useState(false);
  const headCells = [
    { id: "name", label: "O'quvchining ismi" },
    { id: "group", label: "Guruh / Fan" },
    { id: "date", label: "Dars kuni va vaqti" },
    { id: "addedDate", label: "Qo’shilgan sana" },
    { id: "admin", label: "Moderator" },
  ];
  let rows = [
    {
      id: 1,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
    {
      id: 2,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
    {
      id: 3,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
  ];
  return (
    <Container>
      <Breadcrumb>
        <button onClick={() => setOpen(!open)}>Filter</button>
        <button onClick={() => setOpen(!open)}>Import</button>
        <button onClick={() => setOpen(!open)}>Buyurtma berish</button>
      </Breadcrumb>
      <GenericTable open={open} headCells={headCells} rows={rows} />
    </Container>
  );
};
