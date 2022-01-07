import Icon from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import skillData from "../data/skillData";

const SkillLogo = ({ skillName, noName }) => {
  const skill = skillData.find((e) => e.name === skillName);

  return (
    <Flex direction="column" w="15%" align="center" m="10px">
      <Icon w="30px" h="30px" as={skill.icon} />
      {!noName && (
        <Text as="h4" textAlign="center" mt="10px">
          {skill.name}
        </Text>
      )}
    </Flex>
  );
};

export default SkillLogo;
