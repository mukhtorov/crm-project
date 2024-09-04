/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container } from "./style";
import GenericButton from "../../../Generics/Button";
import GenericTable from "../../../Generics/Table";
import { Breadcrumb } from "../../BreadCrumb";
import CallModal from "./modal";
import useFetch from "../../../../hooks/useFetch";

export const CallConfig = () => {
  const [open, setOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [state, setState] = useState([]);

  const request = useFetch();

  const getData = () => {
    setSpinner(true);
    request("/tabs/status").then((res) => {
      setState(res || []);
      setSpinner(false);
    });
  };

  useEffect(() => getData(), []);

  const cells = [
    { id: "title", label: "Type" },
    {
      id: "color",
      label: "Ranglar",
      align: "right",
      render: (props) => {
        return (
          <input
            style={{
              outline: "none",
              border: 0,
              height: "30px",
              width: "30px",
              // borderRadius: "20px",
            }}
            type="color"
            defaultValue={props.color}
          />
        );
      },
    },
  ];
  const onSave = () => {
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <CallModal
        reload={getData}
        open={open}
        onSave={onSave}
        onClose={onClose}
      />
      <Breadcrumb>
        <GenericButton onClick={() => setOpen(true)} type="add">
          Rang qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        checkbox={false}
        open={open}
        headCells={cells}
        rows={state}
      ></GenericTable>
    </Container>
  );
};

export default CallConfig;
