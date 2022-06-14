import { Flex, Text, Box, Link } from "@chakra-ui/layout";
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
          through different projects. Most of them were part of{" "}
          <Link
            href="theodinproject.com"
            isExternal
            display="inline-block"
            fontSize="inherit"
            color="#a34b79"
          >
            {" "}
            The Odin Project
          </Link>{" "}
          curriculum. During my studies, I have developed several web pages with
          Wordpress (Pagebuilders but also custom themes). Currently I am
          working on a Bucket List that
        </Text>
        <Text mt="50px">
          <span style={{ color: "#a34b79" }}>let</span>{" "}
          <span style={{ color: "#AB9A20" }}>experience</span>; <br />
          <span style={{ color: "#AB9A20" }}>experience</span> = 'Proficient' ;
        </Text>
        <SkillList level="Pro" />
        <Text mt="50px">
          <span style={{ color: "#AB9A20" }}>experience</span> = 'Exposure' ;
        </Text>
        <SkillList level="Medium" />
      </Box>
    </Flex>
  );
};

export default Skills;

let experience;
experience = "good";
