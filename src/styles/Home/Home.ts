import { styled } from "..";

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "calc(100% - 7rem)",
  maxWidth: 1440,
  paddingTop: "2rem",
  margin: "auto",
  "@media (max-width:768px)": {
    width: "calc(100% - 4rem)",
  },
  "@media (max-width:500px)": {
    width: "calc(100% - 1.5rem)",
    justifyContent: "center",
    paddingTop: "2.5rem",
    a: {
      display: "none",
    },
  },
});

export const Container = styled("div", {
  paddingTop: "2.5rem",
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
  maxWidth: 1440,
  margin: "auto",
  "@media (max-width:768px)": {
    width: "calc(100% - 4rem)",
  },
  "@media (max-width:500px)": {
    width: "100%",
    gap: "2.5rem",
    padding: "0 1.5rem",
    paddingBottom: "4.5rem",
  },
});

export const ContainerCards = styled("div", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
  height: "18.75rem",
  "@media (max-width:768px)": {
    gap: "1.2rem",
    height: "15rem",
  },

  "@media (max-width:500px)": {
    height: "80.92px",
    gap: "8.63px",
  },
});

export const AboutContainer = styled("section", {
  paddingTop: "8.75rem",
  width: "calc(100% - 13.34rem)",
  maxWidth: 1440,
  margin: "auto",
  paddingBottom: "8.75rem",
  "@media (max-width:768px)": {
    width: "calc(100% - 4rem)",
  },
  "@media (max-width:500px)": {
    width: "calc(100% - 1.5rem)",
    padding: "2.5rem 3rem",
  },
});

export const StepsWork = styled("div", {
  display: "grid",
  paddingTop: "4rem",
  width: "100%",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "4rem",
  margin: "auto",
  "@media (max-width:500px)": {
    gridTemplateColumns: "1fr",
    gap: "2.5rem",
  },
});

export const StepCard = styled("div", {
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  span: {
    border: "1px solid rgba(249, 138, 108, 0.2)",
    borderRadius: "50%",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 24,
    height: 24,
  },
  "@media (max-width:768px)": {
    gap: "1rem",
  },
});

export const SocialBox = styled("div", {
  display: "flex",
  width: "fit-content",
  gap: "2rem",
  alignItems: "center",
  flexDirection: "column",
  margin: "auto",
  marginTop: "7.5rem",
  textAlign: "center",
  "@media (max-width:500px)": {
    marginTop: "4.5rem",
  },
});

export const Footer = styled("footer", {
  fontSize: ".875rem",
  padding: "2rem 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "calc(100% - 7rem)",
  margin: "auto",
  maxWidth: 1440,
  "@media (max-width:768px)": {
    width: "calc(100% - 4rem)",
  },
  "@media (max-width:500px)": {
    width: "calc(100% - 1.5rem)",
    flexDirection: "column",
    gap: "2rem",
  },
});