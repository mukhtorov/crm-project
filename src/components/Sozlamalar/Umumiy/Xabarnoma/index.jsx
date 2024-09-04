/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container, Status } from "./style";
import GenericTable from "../../../Generics/Table";
import Switch from "@mui/material/Switch";
import { Breadcrumb } from "../../BreadCrumb";
import useFetch from "../../../../hooks/useFetch";

export const Xabarnoma = () => {
  const [open] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [state, setState] = useState([]);

  const request = useFetch();

  const getData = () => {
    setSpinner(true);
    request("/tabs/notifications").then((res) => {
      setState(res);
      setSpinner(false);
    });
  };

  useEffect(() => getData(), []);

  const onChange = ({ target: { checked, name } }) => {
    console.log(checked, name, "event");
    request(`/tabs/notifications/id/*${name}*`, {
      method: "PATCH",
      body: { status: checked ? "TRUE" : "FALSE" },
    });
  };

  const cells = [
    { id: "message", label: "Xabarnoma turi" },
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
        return (
          <Switch
            name={props?.id}
            onChange={onChange}
            defaultChecked={props?.status === "TRUE"}
          />
        );
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
        rows={state}
      ></GenericTable>
    </Container>
  );
};

export default Xabarnoma;
