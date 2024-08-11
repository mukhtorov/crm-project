/* eslint-disable react/no-unescaped-entities */
 
import { useState } from "react";
import { Container } from "./style";
import GenericTable from "../../../Generics/Table";
import { Breadcrumb } from "../../BreadCrumb";
import DarajalarModal from "./modal";
import GenericButton from "../../../Generics/Button";
import { Switch } from "@mui/material";

export const Tolovlar = () => {
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
      tolov: "Ikkita dars uchun",
      bonus: "20,000 so'm",
    },
    {
      id: 2,
      tolov: "3ta guruhga kelgani uchun",
      bonus: "50,000 so'm",
    },
    {
      id: 3,
      lavozim: "Adminstration",
      yarim: "5,000,000 so'm",
      bir: "10,000,000 so'm",
    },
  ];
  const cells = [
    { id: "tolov", label: "To'lov Turi" },
    {
      id: "bonus",
      align: "right",
      label: (
        <div>
          Bonus O'chirish <Switch />
        </div>
      ),
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

export default Tolovlar;
