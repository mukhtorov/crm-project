/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container } from "./style";
import GenericTable from "../../../Generics/Table";
import { Breadcrumb } from "../../BreadCrumb";
import DarajalarModal from "./modal";
import GenericButton from "../../../Generics/Button";

export const Oylik = () => {
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
      title: "Manager",
      foiz: "10 %",
    },
    {
      id: 2,
      title: "Ustoz",
      foiz: "20 %",
    },
    {
      id: 3,
      title: "Adminstration",
      foiz: "5 %",
    },
  ];
  const cells = [
    { id: "title", label: "Qo'shimcha Foiz Turi" },
    {
      id: "foiz",
      label: "Foiz miqdori",
      align: "right",
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

export default Oylik;
