import React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Flex, HStack, List, ListItem, Text } from "@chakra-ui/layout";
import projectData from "../data/projectData";
import Image from "next/image";
import Title from "./Title";
import { BsGithub } from "react-icons/bs";
import {  SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import SkillTag from "./SkillTag";
import {BiRadioCircle} from "react-icons/bi"
import { ListIcon } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";

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
      <Box p={4}>
        <Title text={itemData.name} />
        <Box mt={4}>
        <Text opacity="0.6" >Tech</Text>
        <Flex mt={2} flexWrap="wrap" gridGap="5px">{generateTags()}</Flex>
        </Box>
      </Box>
      <Flex width="100%" mt={2}>
        <Slider slides={ itemData.dim.x > 1400 ? 1.2 : 2.2} freeMode>
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
                    width={itemData.dim.x}
                    height={itemData.dim.y}
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
      <Box p="20px" mt={8}>
        <Text fontSize={["md", "lg", "xl"]} w="80%">
          {itemData.desc}
        </Text>
        <Text mt={8} opacity="0.6" >Functionality / Skills</Text>
          <List mt={2}> 
          {itemData.bullets.map((bullet, index) =>  <ListItem pt={ index === 0 ? 0 : 2}>
            <ListIcon as={BiRadioCircle} color="mainRed"/>
            {bullet}
            </ListItem>)}
          </List>
        <HStack mt={16} spacing={5}>
          <Link href={itemData.live} isExternal _hover={{textDecoration:"none"}} >
          <Button variant="primary">Live Preview</Button>
          </Link>
          <Link href={itemData.gitHub} isExternal _hover={{textDecoration:"none"}}>
          <Button leftIcon={<BsGithub />} variant="secondary">
            GitHub
          </Button>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectInfoPage;
