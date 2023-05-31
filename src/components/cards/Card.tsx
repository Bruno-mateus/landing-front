import { Avatar, Container } from "./styles";

import pink1 from "../../assets/people/pink/pink-1.png";
import pink2 from "../../assets/people/pink/pink-2.png";
import pink3 from "../../assets/people/pink/pink-3.png";
import blue1 from "../../assets/people/blue/blue-1.png";
import blue2 from "../../assets/people/blue/blue-2.png";
import blue3 from "../../assets/people/blue/blue-3.png";
import green1 from "../../assets/people/green/green-1.png";
import green2 from "../../assets/people/green/green-2.png";
import green3 from "../../assets/people/green/green-3.png";
import orange1 from "../../assets/people/orange/orange-1.png";
import orange2 from "../../assets/people/orange/orange-2.png";
import orange3 from "../../assets/people/orange/orange-3.png";

import Image from "next/image";
import { useEffect } from "react";

interface CardProps {
  color: "blue" | "pink" | "orange" | "green";
}

export function Card({ color }: CardProps) {
  useEffect(() => {
    const time = 2500;
    let pinkIndex = 0;
    let blueIndex = 0;
    let orangeIndex = 0;
    let greenIndex = 0;
    const imgsPink = document.querySelectorAll("#slider .pink");
    const imgsOrange = document.querySelectorAll("#slider .orange");
    const imgsBlue = document.querySelectorAll("#slider .blue");
    const imgsGreen = document.querySelectorAll("#slider .green");
    const max = imgsPink.length;

    const nextImagePink = () => {
      imgsPink[pinkIndex].classList.add("no-selected");
      imgsPink[pinkIndex].classList.remove("selected");
      pinkIndex++;
      if (pinkIndex >= max) pinkIndex = 0;
      imgsPink[pinkIndex].classList.add("selected");
      imgsPink[pinkIndex].classList.remove("no-selected");
    };

    const nextImageBlue = () => {
      imgsBlue[blueIndex].classList.add("no-selected");
      imgsBlue[blueIndex].classList.remove("selected");
      blueIndex++;
      if (blueIndex >= max) blueIndex = 0;
      imgsBlue[blueIndex].classList.add("selected");
      imgsBlue[blueIndex].classList.remove("no-selected");
    };

    const nextImageGreen = () => {
      imgsGreen[greenIndex].classList.add("no-selected");
      imgsGreen[greenIndex].classList.remove("selected");
      greenIndex++;
      if (greenIndex >= max) greenIndex = 0;
      imgsGreen[greenIndex].classList.add("selected");
      imgsGreen[greenIndex].classList.remove("no-selected");
    };

    const nextImageOrange = () => {
      imgsOrange[orangeIndex].classList.remove("selected");
      imgsOrange[orangeIndex].classList.add("no-selected");
      orangeIndex++;
      if (orangeIndex >= max) orangeIndex = 0;
      imgsOrange[orangeIndex].classList.add("selected");
      imgsOrange[orangeIndex].classList.remove("no-selected");
    };

    setInterval(() => {
      nextImagePink();
      nextImageBlue();
      nextImageOrange();
      nextImageGreen();
    }, time);
  }, []);

  return (
    <Container backgrounds={color}>
      <Avatar backgrounds={color} id="slider">
        {color === "pink" ? (
          <>
            <Image
              src={pink1}
              priority
              quality={100}
              className="pink selected"
              alt=""
            />
            <Image
              src={pink2}
              priority
              quality={100}
              className="pink no-selected "
              alt=""
            />
            <Image
              src={pink3}
              priority
              quality={100}
              className="pink no-selected "
              alt=""
            />
          </>
        ) : (
          ""
        )}
        {color === "blue" ? (
          <>
            <Image
              src={blue1}
              priority
              quality={100}
              className="blue selected"
              alt=""
            />
            <Image
              src={blue2}
              priority
              quality={100}
              className="blue no-selected"
              alt=""
            />
            <Image
              src={blue3}
              priority
              quality={100}
              className="blue no-selected"
              alt=""
            />
          </>
        ) : (
          ""
        )}
        {color === "green" ? (
          <>
            <Image
              src={green1}
              priority
              quality={100}
              className="green"
              alt=""
            />
            <Image
              src={green2}
              priority
              quality={100}
              className="green no-selected"
              alt=""
            />
            <Image
              src={green3}
              priority
              quality={100}
              className="green no-selected"
              alt=""
            />
          </>
        ) : (
          ""
        )}
        {color === "orange" ? (
          <>
            <Image
              src={orange1}
              priority
              quality={100}
              className="orange"
              alt=""
            />
            <Image
              src={orange2}
              priority
              quality={100}
              className="orange no-selected"
              alt=""
            />
            <Image
              src={orange3}
              priority
              quality={100}
              className="orange no-selected"
              alt=""
            />
          </>
        ) : (
          ""
        )}
      </Avatar>
    </Container>
  );
}
