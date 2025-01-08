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
import { useLanguage } from "../../hooks/useLanguage";
import { DiagonalSectionDivider } from "../common/DiagonalSectionDivider";

const FormContact = () => {
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
    onSubmit: async (values, { resetForm }) => {
      const formData = {
        access_key: "776f856d-8f53-44b8-8376-83f5c4dec267",
        subject: `Contact Form Submission from ${values.namePerson}`,
        from_name: values.namePerson,
        from_email: values.email,
        message: values.message,
      };

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Email sent successfully!");
          resetForm();
        } else {
          alert("Failed to send email.");
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
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
      <DiagonalSectionDivider color="secondary" />
      <VStack
        className="fade-in"
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
          _focus={{
            borderColor: "secondary",
            borderWidth: "2px",
            bgColor: "primary",
          }}
        />
        <FormInputError
          error={formik.errors.namePerson}
          touched={formik.touched.namePerson}
        />
        <Input
          type="email"
          color="terciary"
          placeholder={t.contact.emailInput.placeholder}
          name="email"
          _focus={{ borderColor: "secondary", borderWidth: "2px" }}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <FormInputError
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <Textarea
          h="120px"
          color="terciary"
          placeholder={t.contact.messageInput.placeholder}
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          _focus={{ borderColor: "secondary", borderWidth: "2px" }}
        ></Textarea>
        <FormInputError
          error={formik.errors.message}
          touched={formik.touched.message}
        />
        <Button
          type="submit"
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
