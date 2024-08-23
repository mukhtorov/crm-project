/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { mediaIcon, privateData } from "../../utils/analitics";
import Subtitle from "../Generics/Subtitle";
import Title from "../Generics/Title";
import Email from "./Email";
import Moliya from "./Moliya";

import {
  Container,
  Card,
  Wrapper,
  Section,
  Plus,
  Counter,
  Arrow,
  SubCard,
  FooterWrapper,
} from "./style";
import { AnalyticsContext } from "../../context/analytics";
import { EmailsContext } from "../../context/emails";
import { MediaContext } from "../../context/media";

export const Analitika = () => {
  const [state, dispatch] = useContext(AnalyticsContext);
  const [email] = useContext(EmailsContext);
  const [media, mediaDispatch] = useContext(MediaContext);

  const url = import.meta.env.VITE_BASE_URL;

  const getAnalytics = () => {
    fetch(`${url}/tabs/analytics_page`)
      .then((res) => res.json())
      .then(([res]) => {
        dispatch({ type: "get", payload: res });
      });
  };
  const getMedia = () => {
    fetch(`${url}/tabs/media`)
      .then((res) => res.json())
      .then((res) => {
        mediaDispatch({ type: "get", payload: res });
      });
  };

  useEffect(() => {
    getAnalytics();
    getMedia();
  }, []);

  return (
    <Container>
      <Title mb={16}>Analitika</Title>
      {/* Private Data */}
      <Wrapper gap={24}>
        {privateData.map((value) => {
          const { icon: Icon } = value;
          const { img: Img } = value;
          return (
            <Card key={value.id} gap={24} title={value.title}>
              {/* TOP */}
              <Section title={value.title}>
                <Title>
                  <Icon className="icon" /> {value.title}
                </Title>{" "}
                <Plus title={value.title} />
              </Section>
              {/* BOTTOM */}
              <Section title={value.title}>
                <Title>
                  <Arrow /> <Counter>{state[value.count]}</Counter>
                </Title>{" "}
                <Img />
              </Section>
            </Card>
          );
        })}
      </Wrapper>
      <Subtitle mt={24} mb={16}>
        Ijtimoiy tarmoqlar
      </Subtitle>
      {/* MEDIA */}
      <Wrapper>
        {media?.map((value, i) => {
          const { [i + 1]: Icon } = mediaIcon;
          return (
            <SubCard key={value.id} gap={24} title={value.title}>
              {/* TOP */}
              <Section title={value.title}>
                <Subtitle>
                  <Icon className="subicon" />
                  {value.title}
                </Subtitle>{" "}
                <Plus title={value.title} />
              </Section>
              {/* BOTTOM */}
              <Section title={value.title}>
                <Title color={"#52C41A"}>
                  <Arrow /> 22%
                </Title>
                <Counter>
                  {(Number(value.subscribers) / 1000).toFixed(2)}K
                </Counter>
              </Section>
            </SubCard>
          );
        })}
      </Wrapper>
      <FooterWrapper>
        <FooterWrapper.Email>
          <Subtitle mt={24} mb={16} count={email.length}>
            Email habarlari
          </Subtitle>
          <Email />
        </FooterWrapper.Email>
        <FooterWrapper.Moliya>
          <Subtitle mt={24} mb={16}>
            Moliya
          </Subtitle>
          <Moliya />
        </FooterWrapper.Moliya>
      </FooterWrapper>
    </Container>
  );
};
