/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
import useFetch from "../../../hooks/useFetch";

export const Roles = (props) => {
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [state, dispatch] = useState([]);
  const { data } = props;
  const request = useFetch();

  const getData = async () => {
    setSpinner(true);
    let category = await request(`/tabs/roles`);

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

  const headCells = [
    { id: "title", label: "Daraja" },
    { id: "message", label: "Daraja Izohi" },

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

  const onMove = (e, value) => {
    setSpinner(true);
    e.stopPropagation();
    request(`/tabs/roles/id/*${value?.id}*`, { method: "DELETE" }).then(() => {
      getData();
    });
  };
  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        state={state}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
        reload={getData}
      />
      <Breadcrumb>
        <GenericButton type="add" onClick={onToggleModal}>
          Ro'li qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        // open={open}
        headCells={headCells}
        rows={state}
        checkbox={false}
        spinner={spinner}
      ></GenericTable>
    </Container>
  );
};

export default Roles;
