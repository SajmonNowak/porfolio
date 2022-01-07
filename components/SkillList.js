import { Flex } from '@chakra-ui/layout'
import React from 'react'
import skillData from "../data/skillData"
import SkillLogo from './SkillLogo'

const SkillList = ({level}) => {
    return (
        <Flex wrap="wrap" mt="50px">
            {skillData.map((skill) => {
                if(skill.level === level){
                    return <SkillLogo skillName = {skill.name}/>
                }       
        })}
        </Flex>
    )
}

export default SkillList
