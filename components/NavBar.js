import { Flex, Stack } from "@chakra-ui/layout";
import React from "react";
import MenuItem from "./MenuItem";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="flex-end"
      w="100%"
      color="white"
      fontSize="xl"
    >
      <Stack spacing="8" align="center" justify="flex-end" direction="row">
        <MenuItem name="about()" path={"#about"} />
        <MenuItem name="skills()" path={"#skills"} />
        <MenuItem name="portfolio()" path={"#portfolio"} />
        <MenuItem name="contact()" path={"#contact"} stressed />
      </Stack>
    </Flex>
  );
};

export default NavBar;
