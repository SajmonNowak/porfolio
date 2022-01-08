import { Center } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import skillData from "../data/skillData";
import SkillLogo from "./SkillLogo";

const SkillList = ({ level }) => {
  return (
      <Flex wrap="wrap" mt="50px" justifyContent="flex-start" >
          {skillData.map((skill, index) => {
          if (skill.level === level) {
              return <SkillLogo skillName={skill.name} index={index} />;
          }
        })}
      </Flex>
  );
};

export default SkillList;
