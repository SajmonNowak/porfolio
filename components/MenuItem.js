import { Box, Link, Text } from "@chakra-ui/layout";
import React from "react";
import theme from "../styles/theme";
import { darken } from "@chakra-ui/theme-tools";

const MenuItem = ({ name, path, stressed, setOpenMenu }) => {
  return (
    <Box padding="4">
      <Link
        href={path}
        _focus={{
          color: darken("mainRed", 10),
          border: "6px solid #AB0F62",
          boxShadow: "0 0 10px #AB0F62",
          borderRadius: "5px",
          outline: "none",
        }}
        tabIndex="1"
        _hover={{ color: darken("mainRed", 10) }}
        onClick={() => setOpenMenu(false)}
      >
        <Text color={stressed ? theme.colors.mainRed : ""}>{name}</Text>
      </Link>
    </Box>
  );
};

export default MenuItem;
