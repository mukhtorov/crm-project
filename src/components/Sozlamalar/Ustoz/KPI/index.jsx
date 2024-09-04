/* eslint-disable react/prop-types */
import { Container, Status } from "./style";
import GenericTable from "../../../Generics/Table";
import Switch from "@mui/material/Switch";
import { Breadcrumb } from "../../BreadCrumb";
import useFetch from "../../../../hooks/useFetch";
import { useEffect, useState } from "react";

export const Kpi = () => {
  const [bonus, setBones] = useState([]);
  const [fines, setFines] = useState([]);

  const request = useFetch();
  const getData = () => {
    request("/tabs/mentor_bonus").then((res) => setBones(res || []));
    request("/tabs/mentor_fines").then((res) => setFines(res || []));
  };
  const onChange = ({ target: { checked, name } }, bonus) => {
    request(`/tabs/mentor_${bonus ? "bonus" : "fines"}/id/${name}`, {
      method: "PATCH",
      body: { status: checked ? "TRUE" : "FALSE" },
    }).then(() => alert("saved"));
  };

  const fineCells = [
    { id: "title", label: "Jarimalar" },

    {
      id: "price",
      label: "Narhi",
    },
    {
      id: "status",
      label: "Status",
      align: "right",
      render: (props) => {
        return (
          <Switch
            defaultChecked={props?.status === "TRUE"}
            onChange={onChange}
            name={props.id}
          />
        );
      },
    },
  ];

  const bonusCell = [
    { id: "title", label: "Bonuslar" },

    {
      id: "price",
      label: "Narhi",
    },
    {
      id: "status",
      label: "Status",
      align: "right",
      render: (props) => {
        return (
          <Switch
            defaultChecked={props?.status === "TRUE"}
            onChange={(e) => onChange(e, true)}
            name={props.id}
          />
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Breadcrumb />
      <GenericTable
        checkbox={false}
        headCells={bonusCell}
        rows={bonus}
      ></GenericTable>
      <GenericTable
        checkbox={false}
        headCells={fineCells}
        rows={fines}
      ></GenericTable>
    </Container>
  );
};

export default Kpi;
