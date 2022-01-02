import { Flex, Text, Box } from "@chakra-ui/layout";
import React from "react";
import SkillList from "./SkillList";
import Title from "./Title";

const Skills = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Title text="SkillsAndTools" />
      <Box pl="5vw">
        <Text fontSize="xl" mt="50px">
          let experience; <br /> // Technologies and tools I utilized and
          learned on my programing journey through different projects{" "}
        </Text>
        <Text mt="50px" fontSize="xl">
          experience = advanced;
        </Text>
        <SkillList level="Pro" />
        <Text mt="50px" fontSize="xl">
          experience = basic;{" "}
        </Text>
        <SkillList level="Medium" />
      </Box>
    </Flex>
  );
};

export default Skills;
