/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import Title from "../../Generics/Title";
import { Wrapper } from "./style";
import { roles } from "../../../mock/roles";
import { Checkbox } from "@mui/material";

export const AllLidsModal = (props) => {
  const { data } = props;

  return (
    <Modal {...props}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Daraja
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Daraja izohi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
      <Wrapper>
        {roles.map(([title, role]) => {
          return (
            <Wrapper.Left key={title}>
              <Wrapper.Title>{title}</Wrapper.Title>
              <div>
                {role.map(({ status, title }) => {
                  return (
                    <div key={title}>
                      <Checkbox defaultChecked={status} /> {title}
                    </div>
                  );
                })}
              </div>
            </Wrapper.Left>
          );
        })}
      </Wrapper>
    </Modal>
  );
};

export default AllLidsModal;
