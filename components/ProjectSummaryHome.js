import { Flex, Grid, GridItem, Box, Center, Heading } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
import Title from "./Title";
import projectData from "../data/projectData";
import { Button } from "@chakra-ui/button";
import theme from "../styles/theme";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import ProjectList from "./ProjectList";

const ProjectSummary = ({ openProjectModal }) => {
  return (
    <Flex direction="column" id="portfolio">
      <Title text="Projects" />
      <Box pl="2vw" mt="50px">
        <ProjectList home={true} openProjectModal={openProjectModal} />
        <Center>
          <Link href="/projects">
            <Button
              variant="primary"
              bgColor={theme.colors.mainRed}
              w="200px"
              mt="80px"
              tabIndex="1"
            >
              See more
            </Button>
          </Link>
        </Center>
      </Box>
    </Flex>
  );
};

export default ProjectSummary;
