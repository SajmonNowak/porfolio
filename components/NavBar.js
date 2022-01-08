import Icon from "@chakra-ui/icon";
import { Box, Flex, VStack, Stack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import MenuItem from "./MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import { Slide } from "@chakra-ui/transition";
import { Squash as Hamburger } from "hamburger-react";

const NavBar = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    openMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openMenu]);

  if (windowWidth > 800) {
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
          <MenuItem name="about()" path={"/#about"} />
          <MenuItem name="skills()" path={"/#skills"} />
          <MenuItem name="portfolio()" path={"/projects"} />
          <MenuItem name="contact()" path={"/#contact"} stressed />
        </Stack>
      </Flex>
    );
  } else {
    return (
      <React.Fragment>
        <Box position="absolute" zIndex="999999" top="10px" right="10px">
          <Hamburger
            size={32}
            toggled={openMenu}
            toggle={setOpenMenu}
            label="show menu"
          />
        </Box>
        <Slide
          in={openMenu}
          unmountOnExit={true}
          reverse={true}
          direction="top"
          style={{ width: "100%", height: "100vh", zIndex: "99999" }}
        >
          <Box
            position="fixed"
            display="flex"
            alignItems="center"
            justifyContent="center"
            top="0"
            left="0"
            w="100vw"
            h="100vh"
            zIndex="99999"
            bgColor="black"
          >
            <VStack fontSize={"3xl"}>
              <MenuItem
                name="about()"
                path={"/#about"}
                setOpenMenu={setOpenMenu}
              />
              <MenuItem
                name="skills()"
                path={"/#skills"}
                setOpenMenu={setOpenMenu}
              />
              <MenuItem
                name="portfolio()"
                path={"/projects"}
                setOpenMenu={setOpenMenu}
              />
              <MenuItem
                name="contact()"
                path={"/#contact"}
                stressed
                setOpenMenu={setOpenMenu}
              />
            </VStack>
          </Box>
        </Slide>
      </React.Fragment>
    );
  }
};

export default NavBar;
