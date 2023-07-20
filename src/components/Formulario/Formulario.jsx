import { Input, Flex, Button, Box } from "@chakra-ui/react";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  // ---------estilos---------
  const estiloinput = {
    "::placeholder": {
      color: "#878787",
    },
    bg: "#181818",
    color: "white",
    borderRadius: ".1rem",
    pl: "1rem",
    pt: ".5rem",
  };

  const estiloboton = {
    bg: "#AA8C55",
    color: "white",
    p: ".5rem 2.5rem",
    borderRadius: ".1rem",
    border: "1px #AA8C55 solid",
    transition: "all 0.3s ease",
    ":hover": {
      filter: "brightness(1.2)",
    },
    ":active": {
      top: "2px",
    },
  };

  // ----------onclick------------
  const form = useRef();

  const enviaremail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4zfbjj",
        "template_ipjwhic",
        form.current,
        "V18aLKRn9J-CT3iC7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box as="form" ref={form} onSubmit={enviaremail}>
      <Flex gap=".8rem" mb="1rem">
        <Input
          placeholder="Nombre"
          variant="unstyled"
          width="35%"
          sx={estiloinput}
          pb=".5rem"
          name="user_name"
        />
        <Input
          placeholder="Email"
          variant="unstyled"
          width="65%"
          sx={estiloinput}
          pb=".5rem"
          name="user_email"
        />
      </Flex>

      <Input
        placeholder="Asunto"
        variant="unstyled"
        width="100%"
        mb="1rem"
        sx={estiloinput}
        pb=".5rem"
        name="from_name"
      />
      <Input
        placeholder="Mensaje"
        variant="unstyled"
        width="100%"
        mb="1rem"
        sx={estiloinput}
        pb="5rem"
        name="message"
      />
      <Button variant="unstyled" sx={estiloboton} type="submit">
        Enviar
      </Button>
    </Box>
  );
};

export { Formulario };
