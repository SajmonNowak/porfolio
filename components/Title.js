import { Heading } from "@chakra-ui/layout";
import React from "react";

const Title = ({ text, white, noMargin }) => {
  return (
    <Heading
      as="h2"
      marginLeft={noMargin ? "0" : [-5, -6, -6, -10]}
      color={white ? "white" : "mainRed"}
      fontSize={["2xl", "2xl", "3xl", "3xl", "4xl"]}
    >
      &lt;/ {text}&gt;
    </Heading>
  );
};

export default Title;
