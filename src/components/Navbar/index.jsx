import Input from "../Generics/Input";
import GenericSelect from "../Generics/Select";
import DateTimePicker from "./DateTimePicker";
import Time from "./Time";
import { Container, SearchIcon, Section } from "./style";

export const Navbar = () => {
  const data = [
    { value: "russian", title: "Russian" },
    { value: "uzbek", title: "Uzbek" },
    { value: "english", title: "English" },
  ];
  return (
    <Container>
      <Input
        width={500}
        height={40}
        borderRadius={8}
        iconLeft={<SearchIcon />}
      />
      <Section>
        <Time />
        <DateTimePicker />
        <GenericSelect label="Language" data={data} />
      </Section>
    </Container>
  );
};

export default Navbar;
