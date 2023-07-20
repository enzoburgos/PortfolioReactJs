import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

import github from "../../assets/fonts/icons8-github.svg";
import twitter from "../../assets/fonts/icons8-twitter.svg";
import facebook from "../../assets/fonts/icons8-facebook.svg";
import instagram from "../../assets/fonts/icons8-instagram.svg";
import linkedin from "../../assets/fonts/icons8-linkedin.svg";

const Redes = () => {

  
  // --------estilos--------

  const estiloRedes = {
    p: "2",
    boxSize: { base: "1.8rem", md: "2.2rem", xl: "3rem" },
  };

  const estilolink = {
    bg: "#414141",
    transform: "rotate(60deg)",
    borderRadius: ".2rem",
  };

  return (
    <Flex justifyContent="center" gap={{ base: "2.2rem", xl: "3rem" }}>
      <Link sx={estilolink} isExternal href="https://github.com/enzoburgos">
        <Image src={github} sx={estiloRedes} />
      </Link>
      <Link sx={estilolink} isExternal href="#">
        <Image src={twitter} sx={estiloRedes} />
      </Link>
      <Link sx={estilolink} isExternal href="#">
        <Image src={facebook} sx={estiloRedes} />
      </Link>
      <Link sx={estilolink} isExternal href="">
        <Image src={instagram} sx={estiloRedes} />
      </Link>
      <Link
        sx={estilolink}
        isExternal
        href="https://www.linkedin.com/in/enzo-ivan-burgos-50334526a/"
      >
        <Image src={linkedin} sx={estiloRedes} />
      </Link>
    </Flex>
  );
};

export { Redes };
