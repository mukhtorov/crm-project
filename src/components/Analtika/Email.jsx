/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Subtitle from "../Generics/Subtitle";
import { Info, Section, Wrapper } from "./emailStyle";
import { EmailsContext } from "../../context/emails";

export const Email = () => {
  const [email, dispatch] = useContext(EmailsContext);

  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${url}/tabs/emails`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "get", payload: res });
      });
  }, []);

  return (
    <Wrapper>
      {email?.map((eml) => {
        return (
          <Info key={eml.id}>
            <Section>
              <Info.Img src={eml.src} />
              <div>
                <Subtitle size={14}>{eml.name}</Subtitle>
                <Subtitle size={14} color={"#929FAF"}>
                  {eml.title}
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
