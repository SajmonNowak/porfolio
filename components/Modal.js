import Icon from "@chakra-ui/icon";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import ProjectInfoPage from "./ProjectInfoPage";
import { VscChromeClose } from "react-icons/vsc";
import { Slide } from "@chakra-ui/transition";
import { darken } from "@chakra-ui/theme-tools";

const Modal = ({ projectName, setOpenModal, openModal }) => {
  return (
    <Slide
      direction="bottom"
      in={openModal}
      reverse={true}
      unmountOnExit={true}
      style={{ zIndex: "99999", width: "100vw", height: "100vh" }}
    >
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
          maxW="1200px"
          w="90%"
          height="90vh"
          border="1px solid rgba(255, 255, 255, 0.24)"
          borderRadius="10px 10px 0px 0px"
          bottom="0"
          overflowY="overlay"
          onClick={(e) => e.stopPropagation()}
        >
          <Flex direction="column" position="relative" pb="20px">
            <Icon
              onClick={() => setOpenModal(false)}
              as={VscChromeClose}
              position="absolute"
              top="20px"
              right="20px"
              w={["20px", "30px", "30px", "40px"]}
              h={["20px", "30px", "30px", "40px"]}
              _hover={{ color: darken("mainRed", 20) }}
            />
            <ProjectInfoPage projectName={projectName} />
          </Flex>
        </Box>
      </Box>
    </Slide>
  );
};

export default Modal;
