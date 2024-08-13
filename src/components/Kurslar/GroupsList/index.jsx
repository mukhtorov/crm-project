/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import GroupModal from "./GroupModal";
import CollapsibleTable from "./Table";
import useFetch from "../../../hooks/useFetch";

export const GroupsList = () => {
  // const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [state, dispatch] = useState([]);
  const request = useFetch();

  const onEdit = (e, res) => {
    console.log("edit");
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

  const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };
  const onSave = () => {
    // setModal(!modalOpen);
  };

  const getData = async () => {
    setSpinner(true);
    let cat = await request(`/tabs/category`);
    let data = await request(`/tabs/groups`);

    let newData = cat.map((ct) => {
      return {
        ...ct,
        groups: data.filter((val) => val.category === ct.category),
      };
    });

    dispatch(newData);

    setSpinner(false);
  };
  // fetch
  useEffect(() => {
    getData();
  }, []);

  console.log(state, "state");
  return (
    <Container>
      <GroupModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
        reload={getData}
      />
      <Breadcrumb>
        <GenericButton type="add" onClick={() => onToggleModal()}>
          Yo'nalish qo'shish
        </GenericButton>
      </Breadcrumb>

      <CollapsibleTable
        rows={state}
        onEdit={onEdit}
        onMove={onMove}
        spinner={spinner}
        reload={getData}
      />
    </Container>
  );
};

export default GroupsList;
