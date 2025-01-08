import React from "react";
import { Box } from "@chakra-ui/react";

const FormInputError = ({ error, touched }) => {
  return error && touched ? <Box color="secondary">{error}</Box> : null;
};

export { FormInputError };
