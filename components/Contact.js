import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import theme from "../styles/theme";
import Logo from "./Logo";

const Contact = () => {
  return (
    <Flex
      pl="2vw"
      mt={20}
      py={[36]}
      direction="column"
      justify="center"
      alignItems="center"
      minHeight="50vh"
      id="contact"
    >
      <Text fontSize={["3xl","4xl", "5xl","6xl"]} textAlign="center">
        Ready to <span style={{ color: theme.colors.mainRed }}>build</span>{" "}
        something together?
      </Text>
      <Text mt="50px" mb="75px" fontSize={["2xl","3xl","4xl","6xl"]} color={theme.colors.mainRed}>
        nowak.sajmon@gmail.com
      </Text>
      <Flex mt="10px">
        <Box w={[8,10,12]} h={[8,10,12]} mr={10}>
          <Logo site="LinkedIn"  />
        </Box>
        <Box w={[8,10,12]} h={[8,10,12]} ml={10}>
          <Logo site="GitHub"  />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
