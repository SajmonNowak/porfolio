import { Center, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import theme from "../styles/theme";
import Logo from "./Logo";

const Contact = () => {
  return (
    <Flex
      pl="2vw"
      mt="20vh"
      direction="column"
      justify="center"
      alignItems="center"
      minHeight="50vh"
      id="contact"
    >
      <Text fontSize="5xl">
        Ready to <span style={{ color: theme.colors.mainRed }}>build</span>{" "}
        something together?
      </Text>
      <Text mt="50px" mb="75px" fontSize="5xl" color={theme.colors.mainRed}>
        nowak.sajmon@gmail.com
      </Text>
      <Flex mt="10px">
        <Logo site="LinkedIn" size="40px" />
        <Logo site="GitHub" size="40px" mx="125px" />
        <Logo site="HackerRank" size="40px" />
      </Flex>
    </Flex>
  );
};

export default Contact;
