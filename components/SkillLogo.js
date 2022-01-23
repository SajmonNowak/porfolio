import Icon from "@chakra-ui/icon";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import skillData from "../data/skillData";

const SkillLogo = ({ skillName, noName }) => {
  const skill = skillData.find((e) => e.name === skillName);

  return (
      <Flex
        direction="column"
        w="80px"
        align="center"
        m={["0px", "6px", "6px", "6px"]}
        mb={["10px", "6px", "6px", "6px"]}
      >
        <Icon w="30px" h="30px" as={skill.icon} />
        {!noName && (
          <Text
            as="h4"
            textAlign="center"
            fontSize={["xs", "sm", "md"]}
            mt="10px"
          >
            {skill.name}
          </Text>
        )}
      </Flex>
  );
};

export default SkillLogo;
