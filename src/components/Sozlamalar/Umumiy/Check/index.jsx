import { useEffect, useState } from "react";
import Subtitle from "../../../Generics/Subtitle";
import { Container, FileUpload, ImgBox } from "./style";
import GenericInput from "../../../Generics/Input";
import GenericSelect from "../../../Generics/Select";
import GenericButton from "../../../Generics/Button";
import useFetch from "../../../../hooks/useFetch";

export const Check = () => {
  const [url, setUrl] = useState("");
  const [state, setState] = useState({});

  const request = useFetch();

  const onUpload = (e) => {
    const [file] = e.target.files;
    const url = URL.createObjectURL(file);
    setUrl(url);
  };

  const getData = () => {
    request("/tabs/settings_check").then(([res]) => setState(res));
  };

  useEffect(() => getData(), []);

  const lang = [
    { title: "English", value: "eng" },
    { title: "Russian", value: "ru" },
    { title: "Uzbek", value: "uz" },
  ];

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setState({ ...state, [name]: value });
  };

  const onSave = () => {
    request("/tabs/settings_check/id/1", {
      method: "PUT",
      body: state,
    }).then(() => alert("saved"));
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
      <GenericInput
        width={500}
        value={state?.title}
        name="title"
        onChange={onChange}
      />
      <Subtitle color="#929FAF" mt={24} mb={8}>
        Chat tag yozuvi
      </Subtitle>
      <GenericInput
        width={500}
        value={state?.tag}
        name="tag"
        onChange={onChange}
      />
      <Subtitle color="#929FAF" mt={24} mb={8}>
        Tilni tanlang
      </Subtitle>
      <GenericSelect
        width={500}
        data={lang}
        value={state.lang}
        name="lang"
        onChange={onChange}
      />
      <GenericButton
        onClick={onSave}
        type="primary"
        mt={32}
        width={88}
        ml="auto"
      >
        Saqlash
      </GenericButton>
    </Container>
  );
};

export default Check;
