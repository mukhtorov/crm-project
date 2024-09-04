/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container, Status } from "./style";
// import GenericButton from "../../../Generics/Button";
import GenericTable from "../../../Generics/Table";
import { Breadcrumb } from "../../BreadCrumb";
import GenericButton from "../../../Generics/Button";
import SorovnomaModal from "./modal";
import useFetch from "../../../../hooks/useFetch";

export const Sorovnomalar = () => {
  const [open, setOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [state, setState] = useState([]);

  const request = useFetch();

  const getData = () => {
    setSpinner(true);
    request("/tabs/media").then((res) => {
      setState(res);
      setSpinner(false);
    });
  };

  useEffect(() => getData(), []);

  const cells = [
    {
      id: "title",
      label: "So'rovnoma turi",
      render: (props) => <Status>{props?.title}</Status>,
    },
    {
      id: "lids",
      label: "Barhca Lidlar",
      render: (props) => <Status>{props?.lids}</Status>,
    },
    {
      id: "konversiya",
      label: "Konversiya",
      render: (props) => <Status>{props.konversiya}</Status>,
    },
    {
      id: "foiz",
      label: "Foiz",
      render: (props) => (
        <Status>{parseInt((props.konversiya / props.lids) * 100)} %</Status>
      ),
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
      <SorovnomaModal
        open={open}
        onSave={onSave}
        onClose={onClose}
        reload={getData}
      />
      <Breadcrumb>
        <GenericButton onClick={() => setOpen(true)} type="add">
          So'rovnoma qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        checkbox={false}
        headCells={cells}
        rows={state}
        spinner={spinner}
      ></GenericTable>
    </Container>
  );
};

export default Sorovnomalar;
