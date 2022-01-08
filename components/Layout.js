import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <Box bg="black" overflowX="hidden">
      <Container maxWidth="1200px" w="100vw" color="#FEFFFC" px="8">
        <NavBar />
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
