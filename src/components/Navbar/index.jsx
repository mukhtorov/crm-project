import DateTimePicker from "./DateTimePicker";
import GenericSelect from "./Select";
import Time from "./Time";
import { Container, Input, InputWrapper, SearchIcon, Section } from "./style";

export const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input placeholder="search" />
      </InputWrapper>
      <Section>
        <Time />
        <DateTimePicker />
        <GenericSelect />
      </Section>
    </Container>
  );
};

export default Navbar;
