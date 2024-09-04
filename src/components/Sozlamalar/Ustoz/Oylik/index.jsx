/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import { Container } from "./style";
import GenericTable from "../../../Generics/Table";
import { Breadcrumb } from "../../BreadCrumb";
import DarajalarModal from "../../modal";
import GenericButton from "../../../Generics/Button";
import useFetch from "../../../../hooks/useFetch";

export const Oylik = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const request = useFetch();
  const getData = () => {
    request("/tabs/mentor_status").then((res) => setData(res || []));
  };
  const onClose = () => {
    setOpen(false);
  };
  const onSave = () => {
    setOpen(false);
  };

  const cells = [
    { id: "status", label: "Lavozim" },
    {
      id: "half",
      label: "Yarim Stavka",
    },
    {
      id: "full",
      label: "Bir stavka",
    },
  ];

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <DarajalarModal
        open={open}
        onClose={onClose}
        onSave={onSave}
        reload={getData}
        url="mentor"
      />
      <Breadcrumb>
        <GenericButton onClick={() => setOpen(true)} type="add">
          Daraja qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        checkbox={false}
        headCells={cells}
        rows={data}
      ></GenericTable>
    </Container>
  );
};

export default Oylik;
