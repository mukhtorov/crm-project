import Input from "../Generics/Input";
import DateTimePicker from "./DateTimePicker";
import GenericSelect from "./Select";
import Time from "./Time";
import { Container, SearchIcon, Section } from "./style";

export const Navbar = () => {
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
        <GenericSelect />
      </Section>
    </Container>
  );
};

export default Navbar;
