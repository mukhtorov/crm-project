import { email } from "../../mock/email";
import Subtitle from "../Generics/Subtitle";
import { Info, Section, Wrapper } from "./emailStyle";

export const Email = () => {
  return (
    <Wrapper>
      {email.map((eml) => {
        return (
          <Info key={eml.id}>
            <Section>
              <Info.Img src={eml.src} />
              <div>
                <Subtitle size={14}>{eml.name}</Subtitle>
                <Subtitle size={14} color={"#929FAF"}>
                  {eml.status}
                </Subtitle>
              </div>
            </Section>
            <Info.SMS>{eml.sms}</Info.SMS>

            <Section end>{eml.date}</Section>
          </Info>
        );
      })}
    </Wrapper>
  );
};

export default Email;
