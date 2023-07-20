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
    pl: { base: "1rem", xl: "2rem" },
    pt: { base: ".5rem", xl: "1rem" },
    fontSize: { base: "1rem", xl: "1.9rem" },
  };

  const estiloboton = {
    bg: "#AA8C55",
    color: "white",
    p: { base: ".5rem 2.5rem", xl: ".7rem 4rem 3.7rem 4rem" },
    borderRadius: ".1rem",
    border: "1px #AA8C55 solid",
    transition: "all 0.3s ease",
    ":hover": {
      filter: "brightness(1.2)",
    },
    ":active": {
      top: "2px",
    },
    fontSize: { base: "1rem", xl: "1.9rem" },
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
      <Flex
        gap={{ base: ".8rem", xl: "1.3rem" }}
        mb={{ base: "1rem", xl: "1.5rem" }}
      >
        <Input
          placeholder="Nombre"
          variant="unstyled"
          width="35%"
          sx={estiloinput}
          pb={{ base: ".5rem", xl: "1rem" }}
          name="user_name"
        />
        <Input
          placeholder="Email"
          variant="unstyled"
          width="65%"
          sx={estiloinput}
          pb={{ base: ".5rem", xl: "1rem" }}
          name="user_email"
        />
      </Flex>

      <Input
        placeholder="Asunto"
        variant="unstyled"
        width="100%"
        mb={{ base: "1rem", xl: "1.5rem" }}
        sx={estiloinput}
        pb={{ base: ".5rem", xl: "1rem" }}
        name="from_name"
      />
      <Input
        placeholder="Mensaje"
        variant="unstyled"
        width="100%"
        mb={{ base: "1rem", xl: "1.5rem" }}
        sx={estiloinput}
        pb={{ base: "5rem", xl: "7rem" }}
        name="message"
      />
      <Button variant="unstyled" sx={estiloboton} type="submit">
        Enviar
      </Button>
    </Box>
  );
};

export { Formulario };
