import uBlue from "../../assets/ü-blue.svg";
import uGreen from "../../assets/ü-grenn.svg";
import uPink from "../../assets/ü-pink.svg";
import uOrange from "../../assets/ü-orange.svg";
import { styled } from "@/styles";

export const Container = styled("div", {
  height: "18.75rem",
  borderRadius: 12,
  "@media (max-width:912px)": {
    borderRadius: 3.24,
    height: "16.5rem",
  },
  "@media (max-width:600px)": {
    borderRadius: 3.24,
    height: "9rem",
  },
  "@media (max-width:500px)": {
    borderRadius: 3.24,
    height: "5.125rem",
  },

  variants: {
    backgrounds: {
      blue: {
        backgroundColor: "#B3D5F4",
      },
      pink: {
        backgroundColor: "#FFC3DF",
      },
      green: {
        backgroundColor: "#B4EAC0",
      },
      orange: {
        backgroundColor: "#FFD19B",
      },
    },
  },
});

export const Avatar = styled("div", {
  height: "100%",
  width: "100%",
  borderRadius: 12,
  variants: {
    backgrounds: {
      blue: {
        backgroundImage: `url(${uBlue.src})`,
      },
      pink: {
        backgroundImage: `url(${uPink.src})`,
      },
      green: {
        backgroundImage: `url("${uGreen.src}")`,
      },
      orange: {
        backgroundImage: `url('${uOrange.src}')`,
      },
    },
  },
});
