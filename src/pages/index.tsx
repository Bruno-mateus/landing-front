import Head from "next/head";
import Image from "next/image";

import logo from "../assets/logo.svg";
import usersIcon from "../assets/users-icon.svg";
import heartIcon from "../assets/heart-icon.svg";
import messageIcon from "../assets/message-icon.svg";
import linkedin from "../assets/linkedin.svg";

import {
  AboutContainer,
  Container,
  ContainerCards,
  Footer,
  Header,
  MainContent,
  SocialBox,
  StepCard,
  StepsWork,
} from "@/styles/Home/Home";

import { ButtonLink } from "@/components/buttons/ButtonLink/ButtonLink";
import { Card } from "@/components/cards/Card";

import { Separator } from "@/components/Separator/Separator";
import { HighLight } from "@/components/HighLight/HighLight";
import { Form } from "@/components/Form/Form";
import { useState } from "react";
import { Button } from "@/components/buttons/Button/Button";
import { Success } from "@/components/Success/Success";

export default function Home() {
  const [activeForm, setActiveForm] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);

  if (successSubmit) {
    return (
      <>
        <Header>
          <Image src={logo} width={135} height={40} alt={"ZOÜS"} />
        </Header>
        <Container>
          <MainContent>
            <Success />
          </MainContent>
          <Separator />
          <Footer>
            <span>ZOÜS © 2023 - Todos os direitos reservados</span>
            <span>Política de privacidade</span>
          </Footer>
        </Container>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {activeForm ? (
        <Form
          setActiveForm={setActiveForm}
          setSuccessSubmit={setSuccessSubmit}
        />
      ) : (
        ""
      )}

      <Header>
        <Image src={logo} width={135} height={40} alt={"ZOÜS"} />
        <a href="#about">O que é a ZOÜS ?</a>
      </Header>
      <Container>
        <MainContent>
          {" "}
          <HighLight size="large">
            <h1>
              Tá afim de testar uma{" "}
              <span>
                nova forma
                <span />
              </span>{" "}
              de se aplicar em vagas?
            </h1>
            <p>
              É só entrar na lista de espera pra trocar uma ideia com a gente e
              testar a plataforma antes do lançamento
            </p>
          </HighLight>
          <ContainerCards>
            <Card color="pink" />
            <Card color="blue" />
            <Card color="green" />
            <Card color="orange" />
          </ContainerCards>
          <Button type="button" onClick={() => setActiveForm(true)}>
            Entrar na lista de espera
          </Button>
        </MainContent>
        <Separator />
        <AboutContainer id="about">
          <HighLight size="medium">
            <h2>Conheça a ZOÜS</h2>
            <p>
              A plataforma feita por quem também já cansou de entrar em
              processos seletivos e não dar em nada.
            </p>
          </HighLight>
          <StepsWork>
            <StepCard>
              <span>
                {" "}
                <Image src={heartIcon} alt="dois corações" />
              </span>
              <HighLight size="small">
                <strong>Inclusão e diversidade</strong>
                <p>
                  Representatividade é coisa séria. A nossa comunidade acredita
                  que não existe padrão pra talentos únicos.
                </p>
              </HighLight>
            </StepCard>
            <StepCard>
              <span>
                {" "}
                <Image src={usersIcon} alt="uma pessoa" />
              </span>
              <HighLight size="small">
                <strong>Processo humanizado</strong>
                <p>
                  A gente já cansou de ser refém de algoritmo. Tecnologia é pra
                  ser usada a nosso favor.
                </p>
              </HighLight>
            </StepCard>
            <StepCard>
              <span>
                <Image src={messageIcon} alt="um simbolo de mensagem" />
              </span>
              <HighLight size="small">
                <strong>Retorno dos processos</strong>
                <p>
                  Sistema de feedback que realmente funciona. Transparência é o
                  foco em todas as etapas do processo.
                </p>
              </HighLight>
            </StepCard>
          </StepsWork>
          <SocialBox>
            <p>Fica de olho no nosso LinkedIn pra acompanhar as novidades</p>
            <ButtonLink
              href="https://www.linkedin.com/company/ZOÜScompany"
              target="_blank"
            >
              <Image src={linkedin} alt="linkedin" />
              Seguir a ZOÜS
            </ButtonLink>
          </SocialBox>
        </AboutContainer>
        <Separator />
        <Footer>
          <span>ZOÜS © 2023 - Todos os direitos reservados</span>
          <span>Política de privacidade</span>
        </Footer>
      </Container>
    </>
  );
}
