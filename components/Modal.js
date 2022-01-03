import Icon from "@chakra-ui/icon";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import ProjectInfoPage from "./ProjectInfoPage";
import { VscChromeClose } from "react-icons/vsc";

const Modal = ({ projectName, setOpenModal }) => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      bgColor="rgba(0,0,0,0.95)"
      w="100vw"
      h="100vh"
      zIndex="99999"
      onClick={(e) => {
        setOpenModal(false);
      }}
    >
      <Box
        className="scrollBar"
        bgColor="black"
        margin="0 auto"
        mt="10vh"
        maxW="1440px"
        w="90%"
        height="90vh"
        border="1px solid rgba(255, 255, 255, 0.24)"
        borderRadius="10px 10px 0px 0px"
        bottom="0"
        overflowY="overlay"
        onClick={(e) => e.stopPropagation()}
      >
        <Flex direction="column" position="relative" py="50px">
          <Icon
            onClick={() => setOpenModal(false)}
            as={VscChromeClose}
            position="absolute"
            top="50px"
            right="50px"
            w="40px"
            h="40px"
          />
          <ProjectInfoPage projectName={projectName} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Modal;
