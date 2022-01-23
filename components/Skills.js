import { Flex, Text, Box } from "@chakra-ui/layout";
import React from "react";
import SkillList from "./SkillList";
import Title from "./Title";

const Skills = () => {
  return (
    <Flex direction="column" id="skills" pt="50px">
      <Title text="SkillsAndTools" />
      <Box fontSize={["md", "lg", "xl"]}>
        <Text mt="50px">
          Technologies and tools I utilized and learned on my programing journey
          through different projects{" "}
        </Text>
        <Text mt="50px">
          <span style={{ color: "#a34b79" }}>let</span>{" "}
          <span style={{ color: "#AB0F62" }}>experience</span>; <br />
          <span style={{ color: "#AB0F62" }}>experience</span> = 'profound' ;
        </Text>
        <SkillList level="Pro" />
        <Text mt="50px">
          <span style={{ color: "#AB0F62" }}>experience</span> ='basic'
        </Text>
        <SkillList level="Medium" />
      </Box>
    </Flex>
  );
};

export default Skills;

let experience;
experience = "good";
