import { styled } from "..";

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "calc(100% - 7rem)",
  paddingTop: "2rem",
  margin: "auto",
});

export const Container = styled("div", {
  paddingTop: "3.5rem",
  margin: "auto",
  width: "100%",
});

export const MainContent = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3.5rem",
  paddingBottom: "8.75rem",
  width: "calc(100% - 7rem)",
  margin: "auto",
});

export const ContainerCards = styled("div", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
  height: "18.75rem",
});

export const AboutContainer = styled("section", {
  paddingTop: "8.75rem",
  width: "calc(100% - 13.34rem)",
  margin: "auto",
});

export const StepsWork = styled("div", {
  display: "grid",
  paddingTop: "4rem",
  width: "100%",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "4rem",
  margin: "auto",
});

export const StepCard = styled("div", {
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  gap: "2rem",
});