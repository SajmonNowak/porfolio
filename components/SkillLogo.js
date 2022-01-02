import Icon from '@chakra-ui/icon'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'

const SkillLogo = ({skill}) => {
    return (
        <Flex direction="column" w="15%"  align="center" m="10px" >
            <Icon w="30px" h="30px" as={skill.icon}/>
            <Text as="h4" textAlign="center" mt="10px">{skill.name}</Text>
        </Flex>
    )
}

export default SkillLogo

