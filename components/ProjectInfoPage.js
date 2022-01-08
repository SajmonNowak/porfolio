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
    <Box >
      <Box p="20px">
        <Title text={itemData.name} white/>
        <Box mt="20px">
        <Text opacity="0.6" >Tech</Text>
        <Flex mt="10px" flexWrap="wrap" gridGap="5px">{generateTags()}</Flex>
        </Box>
      </Box>
      <Flex width="100%"  >
        <Slider slides={1.2} freeMode>
          {itemData.imgs.map((path, index) => {
            return (
              <SwiperSlide style={{padding:"2px 0"}}>
                <Box w="100%" h="100%" 
                   display="flex" boxShadow="0 1px 6px #171717, 0 3px 6px #171717;" bgColor="#030303" borderRadius="10px"  > 
                <Box
                  maxW="1000px"
                  minW="300px"
                  w="100%"
                  position="relative"
                  borderRadius="10px"
                  overflow="hidden"
                  >
                  <Image
                    src={path}
                    width={1918}
                    height={980}
                    key={index}
                    layout="responsive"
                  />
                </Box>

                </Box>
              </SwiperSlide>
            );
          })}
        </Slider>
      </Flex>
      <Box p="20px" mt="20px">
        <Text fontSize={["md", "lg", "xl"]} w="80%">
          {itemData.desc}
        </Text>
        <HStack mt="40px" spacing={5}>
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
