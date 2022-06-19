import { Box, Link as ChakraLink, Text } from "@chakra-ui/layout";
import React from "react";
import theme from "../styles/theme";
import NextLink from "next/link"

const MenuItem = ({ name, path, stressed, setOpenMenu }) => {
  return (
    <Box padding="4">
      <NextLink href={path} passHref>
        <ChakraLink
        _focus={{
          color: "#f2fa61",
          border: "6px solid #AB0F62",
          boxShadow: "0 0 10px #AB0F62",
          borderRadius: "5px",
          outline: "none",
        }}
        tabIndex="1"
        _hover={{ color: "#f2fa61" }}
        onClick={() => setOpenMenu ? setOpenMenu(false) : "undefined"}
      >
        <Text color={stressed ? theme.colors.mainRed : ""} transition="transform .2s" _hover={ {transform: stressed ? "scale(1.1)" : ""}}>{name}</Text>
      </ChakraLink>

      </NextLink>
    </Box>
  );
};

export default MenuItem;
