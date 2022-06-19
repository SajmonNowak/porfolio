import { Flex, Text, Box, Link } from "@chakra-ui/layout";
import React from "react";
import SkillList from "./SkillList";
import Title from "./Title";

const Skills = () => {
  return (
    <Flex direction="column" id="skills" pt="50px">
      <Title text="SkillsAndTools" />
      <Box fontSize={["md", "lg", "xl"]}>
      <Box  mt="50px" color="#f2fa61" fontWeight="bold">
            &lt;p&gt;
            </Box>
        <Text pl="15px" py="10px" borderLeft="1px solid lightgrey">
          Technologies and tools I utilized and learned on my programming journey
          through different projects. Most projects were part of{" "}
          <Link
            href="https://www.theodinproject.com/"
            isExternal
            display="inline-block"
            fontSize="inherit"
            color="#a34b79"
          >
            The Odin Project
          </Link>{" "}
          curriculum.
          <br />
          Currently, I am working on two custom WordPress
          themes for my clients.{" "}
          <br />
          <Link
            href="https://github.com/SajmonNowak/BucketList"
            isExternal
            display="inline-block"
            fontSize="inherit"
            color="#a34b79"
          >
            Here{" "}
          </Link>{" "}
          is my current hobby project I am working on. A bucket list application
          involving redux state management, JWT authentication, and more.
        </Text>
        <Box  color="#f2fa61" fontWeight="bold">
            &lt;p&gt;
            </Box>
        <Text mt="50px" fontWeight="bold">
          <span style={{ color: "#f2fa61" }}>let</span>{" "}
          <span style={{ color: "#24FAF1" }}>experience</span>; <br />
          <span style={{ color: "#24FAF1" }}>experience</span> = 'Proficient' ;
        </Text>
        <SkillList level="Pro" />
        <Text mt="50px" fontWeight="bold">
          <span style={{ color: "#24FAF1" }}>experience</span> = 'Exposure' ;
        </Text>
        <SkillList level="Medium" />
      </Box>
    </Flex>
  );
};

export default Skills;

let experience;
experience = "good";
