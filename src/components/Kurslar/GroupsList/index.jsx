/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import GroupModal from "./GroupModal";
import { rows } from "../../../mock/groups";
import CollapsibleTable from "./Table";

export const GroupsList = () => {
  // const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };

  const headCells = [
    { id: "title", label: "Kurslar turi" },

    {
      id: "action",
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Delete onClick={() => {}} />
          {/* <Action.Move onClick={onMove} /> */}
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
      <GroupModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
      />
      <Breadcrumb>
        <GenericButton type="add" onClick={() => onToggleModal()}>
          Guruh qo'shish
        </GenericButton>
      </Breadcrumb>

      <CollapsibleTable rows={rows} cells={headCells} />
    </Container>
  );
};

export default GroupsList;
