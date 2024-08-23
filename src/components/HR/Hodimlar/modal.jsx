/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../Generics/Modal";
import GenericInput from "../../Generics/Input";
import Subtitle from "../../Generics/Subtitle";
import GenericSelect from "../../Generics/Select";
import Title from "../../Generics/Title";
import { Devider, Section } from "./style";
import { Checkbox } from "@mui/material";

export const AllLidsModal = (props) => {
  const { data } = props;
  const selectData = data && [
    { value: "Frontend", title: "Frontend" },
    { value: "Backend", title: "Backend" },
  ];
  return (
    <Modal {...props}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Studentning ismi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
      {/* tel raqam */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Telefon raqami
      </Subtitle>
      <GenericSelect data={selectData} width={"100%"} value={data?.group} />
      {/* daraja */}
      <Subtitle mt={16} Subtitlemb={8} color={"#929FAF"}>
        Jinsi
      </Subtitle>
      <GenericSelect data={selectData} width={"100%"} value={data?.level} />
      {/* ustoz */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        O'qtuvchi tanlang
      </Subtitle>
      <GenericSelect data={selectData} width={"100%"} value={data?.group} />
      {/* foiz */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Foizni tanlang
      </Subtitle>
      <GenericSelect data={selectData} width={"100%"} value={data?.days} />

      {/* Role & HR */}
      <Devider>
        <Devider.Filiallar>
          <Devider.Title>Filiallar</Devider.Title>
          <Section>
            <Checkbox /> Chilonzor
          </Section>
          <Section>
            <Checkbox /> Namangan
          </Section>
          <Section>
            <Checkbox /> Beruniy
          </Section>
          <Section>
            <Checkbox /> Ganga
          </Section>
        </Devider.Filiallar>
        <Devider.Role>
          <Devider.Title>Role</Devider.Title>
          <GenericSelect
            mt={12}
            data={selectData}
            width={"100%"}
            value={"Moderator"}
            defaultValue={"Moderator"}
          />
          <GenericSelect
            mt={12}
            data={selectData}
            width={"100%"}
            value={data?.group}
          />
          <GenericSelect
            mt={12}
            data={selectData}
            width={"100%"}
            value={data?.group}
          />
          <GenericSelect
            mt={12}
            data={selectData}
            width={"100%"}
            value={data?.group}
          />
        </Devider.Role>
      </Devider>
    </Modal>
  );
};

export default AllLidsModal;
