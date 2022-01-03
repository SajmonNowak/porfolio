import React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import projectData from "../data/projectData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Title from "./Title";
import { BsLinkedin, BsGithub } from "react-icons/bs";

SwiperCore.use([FreeMode]);

const ProjectInfoPage = ({ projectName }) => {
  const itemData = projectData.find((elem) => elem.name === projectName);

  const generateTags = () => {
    const tagArray = itemData.tags.map((tag, index) => (
      <Tag ml={index === 0 ? undefined : "6px"} >{tag}</Tag>
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
        <Swiper
          style={{ width: "100%", height: "100%" }}
          spaceBetween={30}
          slidesPerView={1.5}
          freeMode={true}
          preloadImages={true}
          slidesOffsetBefore={20}
          slidesOffsetAfter={20}
        >
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
        </Swiper>
      </Flex>
      <Box p="20px">
        <Text fontSize="xl" w="80%">{itemData.desc}</Text>
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
