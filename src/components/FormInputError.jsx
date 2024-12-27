import React from "react";
import { Box } from "@chakra-ui/react";

const FormInputError = ({ error, submit }) => {
  return error && submit ? <Box color="secondary">{error}</Box> : null;
};

export { FormInputError };
