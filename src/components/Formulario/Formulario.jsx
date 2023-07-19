import { Input, Flex, Button, FormControl } from "@chakra-ui/react";

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
      filter: 'brightness(1.2)'
    },
    ":active": {
      top: "2px",
    }

  };

  // ----------onclick------------
  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm("service_k4zfbjj", "template_ipjwhic", form.current, "V18aLKRn9J-CT3iC7")
  //       .then((result) => {
  //           console.log(result.text);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //       console.log('se clickeo');

  // }

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_k4zfbjj";
    const templateId = "template_ipjwhic";

    const apiKey = "V18aLKRn9J-CT3iC7";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <FormControl
      as="formulario"
      width="58%"
      ref={refForm}
      onSubmit={handleSubmit}
    >
      <Flex gap=".8rem" mb="1rem">
        <Input
          placeholder="Nombre"
          variant="unstyled"
          width="auto"
          sx={estiloinput}
          pb=".5rem"
          name="user_name"
          isRequired
        />
        <Input
          placeholder="Email"
          variant="unstyled"
          width="68%"
          sx={estiloinput}
          pb=".5rem"
          name="user_email"
          isRequired
        />
      </Flex>

      <Input
        placeholder="Asunto"
        variant="unstyled"
        mb="1rem"
        sx={estiloinput}
        pb=".5rem"
        name="from_name"
        isRequired
      />
      <Input
        placeholder="Mensaje"
        variant="unstyled"
        mb="1rem"
        sx={estiloinput}
        pb="5rem"
        name="message"
        isRequired
      />
      <Button variant="unstyled" sx={estiloboton}>
        Enviar
      </Button>
    </FormControl>
  );
};

export { Formulario };
