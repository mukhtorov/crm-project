/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container } from "./style";
// import GenericButton from "../../../Generics/Button";
import GenericTable from "../../../Generics/Table";
import { Breadcrumb } from "../../BreadCrumb";
import GenericButton from "../../../Generics/Button";
import FiliallarModal from "./modal";
import useFetch from "../../../../hooks/useFetch";

export const Filiallar = () => {
  const request = useFetch();
  const [open, setOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [state, setState] = useState([]);

  const getData = () => {
    setSpinner(true);
    request("/tabs/filials").then((res) => {
      setState(res);
      setSpinner(false);
    });
  };

  useEffect(() => getData(), []);

  const onSave = () => {
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };

  const cells = [
    { id: "src", label: "Filiallar" },
    {
      id: "location",
      label: "Manzil",
      align: "right",
      render: (props) => {
        return (
          <a href={props?.location} target="_blank" rel="noreferrer">
            {props?.location}
          </a>
        );
      },
    },
  ];
  return (
    <Container>
      <FiliallarModal
        open={open}
        onSave={onSave}
        onClose={onClose}
        reload={getData}
      />
      <Breadcrumb>
        <GenericButton onClick={() => setOpen(true)} type="add">
          Filial qo'shish
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

export default Filiallar;
