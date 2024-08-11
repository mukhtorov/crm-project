 
/* eslint-disable react/prop-types */
import { Container, Status } from "./style";
import GenericTable from "../../../Generics/Table";
import Switch from "@mui/material/Switch";
import { Breadcrumb } from "../../BreadCrumb";

export const Kpi = () => {
  const rows = [
    {
      id: 1,
      jarima: "Ishga kech qolgani uchun",
      price: "5,000 som",
    },
    {
      id: 2,
      jarima: "Dars o'tilmagani",
      price: "25,000 som",
    },
    {
      id: 3,
      jarima: "To'lov qilmagani",
      price: "15,000 som",
    },
  ];
  const cells = [
    { id: "jarima", label: "Jarimalar" },

    {
      id: "price",
      label: <Switch />,
      align: "right",
      render: (props) => {
        return <Status align="end">{props.price}</Status>;
      },
    },
  ];
  const rowsBonus = [
    {
      id: 1,
      bonus: "Yani studentlar uchun",
      price: "5,000 som",
    },
    {
      id: 2,
      bonus: "Master class uchun",
      price: "25,000 som",
    },
    {
      id: 3,
      bonus: "Sotuvdagi darsliklar uchun",
      price: "15,000 som",
    },
  ];
  const cellsBonus = [
    { id: "bonus", label: "Bonuslar" },

    {
      id: "price",
      label: <Switch />,
      align: "right",
      render: (props) => {
        return (
          <Status align="end" bonus>
            {props.price}
          </Status>
        );
      },
    },
  ];
  return (
    <Container>
      <Breadcrumb />
      <GenericTable
        checkbox={false}
        headCells={cellsBonus}
        rows={rowsBonus}
      ></GenericTable>
      <GenericTable
        checkbox={false}
        headCells={cells}
        rows={rows}
      ></GenericTable>
    </Container>
  );
};

export default Kpi;
