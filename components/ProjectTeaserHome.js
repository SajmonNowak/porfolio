import { Flex, Heading } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React from "react";
import projectData from "../data/projectData";

const ProjectTeaser = ({ project, openProjectModal }) => {
  const generateTags = () => {
    const tagArray = project.tags.map((tag, index) => (
      <Tag ml={index === 0 ? undefined : "6px"}>{tag}</Tag>
    ));

    return tagArray;
  };

  const handleClick = () => {
    console.log(project.name)
    openProjectModal(project.name)
  }

  return (
    <Flex direction="column">
      <Heading as="h4" fontSize="xl" mt="20px" onClick={handleClick}>
        {project.name}
      </Heading>
      <Flex mt="10px" mb="10px" gap="5px">
        {generateTags()}
      </Flex>
      <video
        src={project.videoURL}
        width="100%"
        onMouseOver={(e) => e.target.play()}
        onMouseOut={(e) => e.target.pause()}
        onClick={handleClick}
        muted
      ></video>
    </Flex>
  );
};

export default ProjectTeaser;
