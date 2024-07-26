/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container } from "./style";
import GenericTable from "../../../Generics/Table";
import { Breadcrumb } from "../../BreadCrumb";
import DarajalarModal from "./modal";
import GenericButton from "../../../Generics/Button";

export const Darajalar = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onSave = () => {
    setOpen(false);
  };

  const rows = [
    {
      id: 1,
      lavozim: "Manager",
      yarim: "10,000,000 so'm",
      bir: "20,000,000 so'm",
    },
    {
      id: 2,
      lavozim: "Ustoz",
      yarim: "20,000,000 so'm",
      bir: "30,000,000 so'm",
    },
    {
      id: 3,
      lavozim: "Adminstration",
      yarim: "5,000,000 so'm",
      bir: "10,000,000 so'm",
    },
  ];
  const cells = [
    { id: "lavozim", label: "Lavozim" },
    {
      id: "yarim",
      label: "Yarim Stavka",
    },
    {
      id: "bir",
      label: "Bir stavka",
    },
  ];
  return (
    <Container>
      <DarajalarModal open={open} onClose={onClose} onSave={onSave} />
      <Breadcrumb>
        <GenericButton onClick={() => setOpen(true)} type="add">
          Daraja qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        checkbox={false}
        headCells={cells}
        rows={rows}
      ></GenericTable>
    </Container>
  );
};

export default Darajalar;
