import { useState } from "react";
import Subtitle from "../../../Generics/Subtitle";
import { Container, FileUpload, ImgBox } from "./style";
import GenericInput from "../../../Generics/Input";
import GenericSelect from "../../../Generics/Select";
import GenericButton from "../../../Generics/Button";

export const Check = () => {
  const [url, setUrl] = useState("");
  const onUpload = (e) => {
    const [file] = e.target.files;
    const url = URL.createObjectURL(file);
    setUrl(url);
  };
  return (
    <Container>
      <Subtitle color="#929FAF" mb={8}>
        Logo
      </Subtitle>
      <ImgBox url={url}>
        <FileUpload onChange={onUpload} type="file" />
      </ImgBox>
      <Subtitle color="#929FAF" mt={24} mb={8}>
        Sarlavha
      </Subtitle>
      <GenericInput width={500} />
      <Subtitle color="#929FAF" mt={24} mb={8}>
        Chat tag yozuvi
      </Subtitle>
      <GenericInput width={500} />
      <Subtitle color="#929FAF" mt={24} mb={8}>
        Tilni tanlang
      </Subtitle>
      <GenericSelect width={500} />
      <GenericButton type="primary" mt={32} width={88} ml="auto">
        Saqlash
      </GenericButton>
    </Container>
  );
};

export default Check;
