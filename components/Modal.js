import Icon from '@chakra-ui/icon'
import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import ProjectInfoPage from "./ProjectInfoPage"
import {VscChromeClose} from "react-icons/vsc"

const Modal = ({projectName, setOpenModal}) => {
    return (
        <Box className="scrollBar" position="fixed" bgColor="black" margin="0 auto" maxW="1440px" w="90%" height="90%" border="1px solid grey"  bottom="0" overflowY="overlay"> 
            <Flex direction="column"  position="relative"  >
                <Icon onClick={() => setOpenModal(false)} as={VscChromeClose} position="absolute" top="0px" right="0px" w="40px" h="40px"/>
               <ProjectInfoPage projectName = {projectName}/>
            </Flex>
        </Box>
        
    )
}

export default Modal
