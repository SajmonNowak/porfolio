import React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import projectData from "../data/projectData";
import Image from "next/image";
import Title from "./Title";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import SkillTag from "./SkillTag";

const ProjectInfoPage = ({ projectName }) => {
  const itemData = projectData.find((elem) => elem.name === projectName);

  const generateTags = () => {
    const tagArray = itemData.tags.map((tag, index) => (
      <SkillTag index={index} tag={tag} />
    ));

    return tagArray;
  };

  return (
    <Box>
      <Box p="20px">
        <Title mt="20px" text={itemData.name} />
        <Flex mt="20px">{generateTags()}</Flex>
      </Box>
      <Flex width="100%" height="400px" my="50px">
        <Slider slides={1.5} freeMode>
          {itemData.imgs.map((path, index) => {
            return (
              <SwiperSlide>
                <Box
                  w="100%"
                  h="100%"
                  position="relative"
                  borderRadius="10px"
                  overflow="hidden"
                >
                  <Image
                    src={path}
                    layout="fill"
                    key={index}
                    objectFit="cover"
                  />
                </Box>
              </SwiperSlide>
            );
          })}
        </Slider>
      </Flex>
      <Box p="20px">
        <Text fontSize="xl" w="80%">
          {itemData.desc}
        </Text>
        <HStack mt="50px" spacing={5}>
          <Button variant="primary">Live Preview</Button>
          <Button leftIcon={<BsGithub />} variant="secondary">
            GitHub
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectInfoPage;
