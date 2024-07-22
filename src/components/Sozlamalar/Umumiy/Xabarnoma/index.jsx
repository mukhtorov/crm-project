/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container, Status } from "./style";
import GenericTable from "../../../Generics/Table";
import Switch from "@mui/material/Switch";
import { Breadcrumb } from "../../BreadCrumb";

export const Xabarnoma = () => {
  const [open] = useState(false);

  const rows = [
    {
      id: 1,
      xabarnoma: "Dars vaqtini eslatish",
      time: "18:00",
      status: true,
    },
    {
      id: 2,
      xabarnoma: "Vazifalarni eslatish",
      time: "20:00",
      status: false,
    },
    {
      id: 3,
      xabarnoma: "To'lovlarni eslatish",
      time: "21:00",
      status: true,
    },
  ];
  const cells = [
    { id: "xabarnoma", label: "Xabarnoma turi" },
    {
      id: "time",
      label: "Vaqti",
      render: (props) => {
        return <Status>{props?.time}</Status>;
      },
    },
    {
      id: "status",
      label: "Faollashtirish",
      align: "right",
      render: (props) => {
        return <Switch defaultChecked={props?.status} />;
      },
    },
  ];
  return (
    <Container>
      <Breadcrumb />
      <GenericTable
        checkbox={false}
        open={open}
        headCells={cells}
        rows={rows}
      ></GenericTable>
    </Container>
  );
};

export default Xabarnoma;
