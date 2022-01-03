import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <Box bg="black">
      <Container maxWidth="1440px" w="100vw" color="#FEFFFC" px="8">
        <NavBar />
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
