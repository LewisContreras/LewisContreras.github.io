import {
  Button,
  Center,
  Input,
  Text,
  Textarea,
  VStack,
  Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { FormInputError } from "./FormInputError";
import { useLanguage } from "../../hooks/useLanguage";

const FormContact = () => {
  const [submit, setSubmit] = useState(false);
  const { t } = useLanguage();

  const formik = useFormik({
    initialValues: {
      namePerson: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      namePerson: Yup.string().required(t.contact.requiredInput),
      email: Yup.string()
        .email(t.contact.emailRequired)
        .required(t.contact.requiredInput),
      message: Yup.string().required(t.contact.requiredInput),
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
      pt="50px"
      maxWidth="100vw"
      minH="calc(100vh - 90px)"
      bgColor="terciary"
      position="relative"
    >
      <Box
        position="absolute"
        bgColor="secondary"
        left="0"
        top="0"
        width="100%"
        height="70px"
        zIndex="2"
        clipPath="polygon(0 0, 100% 100%, 100% 0)"
      ></Box>
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
          {t.contact.title}
        </Text>
        <Text fontSize="xl" color="terciary">
          {t.contact.description}
        </Text>
        <Input
          type="text"
          color="terciary"
          name="namePerson"
          value={formik.values.namePerson}
          onChange={formik.handleChange}
          placeholder={t.contact.nameInput.placeholder}
          _focus={{ borderColor: "secondary", borderWidth: "2px" }}
        />
        <FormInputError error={formik.errors.namePerson} submit={submit} />
        <Input
          type="email"
          color="terciary"
          placeholder={t.contact.emailInput.placeholder}
          name="email"
          _focus={{ borderColor: "secondary", borderWidth: "2px" }}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <FormInputError error={formik.errors.email} submit={submit} />
        <Textarea
          h="120px"
          color="terciary"
          placeholder={t.contact.messageInput.placeholder}
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
          {t.contact.sendButton}
        </Button>
      </VStack>
    </Center>
  );
};

export default FormContact;
