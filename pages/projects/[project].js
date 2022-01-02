import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { useRouter } from "next/dist/client/router";
import React from "react";
import Layout from "../../components/Layout";
import projectData from "../../data/projectData";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

SwiperCore.use([FreeMode, Pagination, Mousewheel]);

const ProjectPage = () => {
  const { query } = useRouter();
  const itemData = projectData.find((elem) => elem.name === query.project);

  const generateTags = () => {
    const tagArray = itemData.tags.map((tag, index) => (
      <Tag ml={index === 0 ? undefined : "6px"}>{tag}</Tag>
    ));

    return tagArray;
  };

  return (
    <Layout>
      <Box>
        <Icon mt="20px" as={IoIosArrowRoundBack} w="40px" h="40px"></Icon>
        <Heading mt="20px">{itemData.name}</Heading>
        <Flex mt="20px">{generateTags()}</Flex>
        <Flex
          width="800px"
          height="400px"
          my="20px"
          border="1px solid #5A5A5A"
          borderRadius="10px"
        >
          <Swiper
            style={{ width: "100%", height: "100%" }}
            spaceBetween={50}
            slidesPerView={1}
            direction={"vertical"}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
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
        <Text fontSize="xl" w="50%">{itemData.desc}</Text>
        <Flex>
          <Button>Live Preview</Button>
          <Button>GitHub</Button>
        </Flex>
      </Box>
    </Layout>
  );
};

export default ProjectPage;
