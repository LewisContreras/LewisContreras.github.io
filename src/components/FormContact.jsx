import {
  Button,
  Center,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { FormInputError } from "./FormInputError";

const FormContact = () => {
  const [submit, setSubmit] = useState(false);

  const formik = useFormik({
    initialValues: {
      namePerson: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      namePerson: Yup.string().required("Este campo es requerido"),
      email: Yup.string()
        .email("Debe ingresar un correo")
        .required("Este campo es requerido"),
      message: Yup.string().required("Este campo es requerido"),
    }),
    validateOnChange: (values) => {
      console.log(values);
    },
    onSubmit: (values) => {
      setSubmit(false);
      let sendEmail = document.createElement("a");
      sendEmail.setAttribute(
        "href",
        `mailto:legiconba4@gmail.com?subject=${values.namePerson} ${values.email}&body=${values.message}`
      );
      sendEmail.click();
    },
  });

  return (
    <Center
      id="contact"
      py="40px"
      maxWidth="100vw"
      minH="calc(100vh - 140px)"
      bgColor="terciary"
    >
      <VStack
        spacing="10px"
        px="10px"
        py="10px"
        as="form"
        onSubmit={formik.handleSubmit}
        borderRadius="8px"
        w={["94%", "500px"]}
        bgColor="primary"
      >
        <Text fontSize="3xl" color="secondary" fontWeight="600">
          Contacto
        </Text>
        <Text fontSize="xl" color="terciary">
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto.
        </Text>
        <Input
          type="text"
          color="terciary"
          name="namePerson"
          value={formik.values.namePerson}
          onChange={formik.handleChange}
          placeholder="Nombre Completo"
          _focus={{ borderColor: "secondary", borderWidth: "2px" }}
        />
        <FormInputError error={formik.errors.namePerson} submit={submit} />
        <Input
          type="email"
          color="terciary"
          placeholder="Correo"
          name="email"
          _focus={{ borderColor: "secondary", borderWidth: "2px" }}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <FormInputError error={formik.errors.email} submit={submit} />
        <Textarea
          h="120px"
          color="terciary"
          placeholder="Mensaje..."
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          _focus={{ borderColor: "secondary", borderWidth: "2px" }}
        ></Textarea>
        <FormInputError error={formik.errors.message} submit={submit} />
        <Button
          type="submit"
          onClick={() => setSubmit(true)}
          _hover={{ textDecoration: "none" }}
          _focus={{ outline: "none" }}
          colorScheme="teal"
          color="primary"
        >
          Enviar
        </Button>
      </VStack>
    </Center>
  );
};

export default FormContact;
