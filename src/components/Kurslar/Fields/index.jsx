/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
// import GenericSelect from "../../Generics/Select";
import AllLidsModal from "../GroupsList/GroupModal";
import useFetch from "../../../hooks/useFetch";

export const Fields = (props) => {
  // const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [state, dispatch] = useState([]);

  const { data } = props;
  const request = useFetch();

  const getData = async () => {
    setSpinner(true);
    let category = await request(`/tabs/category`);
    console.log(category, "cat");
    dispatch(category || []);
    setSpinner(false);
  };
  // fetch
  useEffect(() => {
    getData();
  }, []);

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };
  const onMove = (e, value) => {
    console.log("move");

    setSpinner(true);
    e.stopPropagation();
    request(`/tabs/category/id/*${value?.id}*`, { method: "DELETE" }).then(
      () => {
        getData();
      }
    );
  };

  const headCells = [
    { id: "title", label: "Yo'nalish" },
    {
      id: "filials",
      label: "Filiallar",
      render: ({ filials }) => {
        return <span>{filials.replaceAll(/["'\[\]]/g, "  ")}</span>;
      },
    },
    {
      id: "schedule",
      label: "Ish vaqti",
    },
    {
      id: "action",
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Move onClick={(e) => onMove(e, res)} />
        </Action>
      ),
    },
  ];

  const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };
  const onSave = () => {
    // setModal(!modalOpen);
  };
  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
        reload={getData}
      />
      <Breadcrumb>
        <GenericButton type="add" onClick={onToggleModal}>
          Yo'nalish qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        headCells={headCells}
        rows={state}
        checkbox={false}
        spinner={spinner}
      ></GenericTable>
    </Container>
  );
};

export default Fields;
