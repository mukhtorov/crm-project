/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container } from "./style";
import GenericButton from "../../../Generics/Button";
import GenericTable from "../../../Generics/Table";
import { Breadcrumb } from "../../BreadCrumb";
import CallModal from "./modal";

export const CallConfig = () => {
  const [open, setOpen] = useState(false);

  const rows = [
    {
      id: 1,
      type: "Missed",
      color: "#06ffbd",
    },
    {
      id: 2,
      type: "Answered",
      color: "#9b2a2a",
    },
    {
      id: 3,
      type: "Wrong",
      color: "#3c00ff",
    },
  ];
  const cells = [
    { id: "type", label: "Type" },
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
      <CallModal open={open} onSave={onSave} onClose={onClose} />
      <Breadcrumb>
        <GenericButton onClick={() => setOpen(true)} type="add">
          Rang qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        checkbox={false}
        open={open}
        headCells={cells}
        rows={rows}
      ></GenericTable>
    </Container>
  );
};

export default CallConfig;
