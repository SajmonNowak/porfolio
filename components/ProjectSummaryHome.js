import { Flex, Grid, GridItem, Box, Center } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link"
import ProjectTeaser from "./ProjectTeaserHome";
import Title from "./Title";
import projectData from "../data/projectData";
import { Button } from "@chakra-ui/button";
import theme from "../styles/theme";

const ProjectSummary = ({openProjectModal}) => {
  return (
    <Flex direction="column">
      <Title text="Projects" />
      <Box pl="5vw;">
        <Grid
          templateColumns="repeat(2, 1fr)"
          mt="50px"
          rowGap="50px"
          columnGap="100px"
        >
          {projectData.map((item) => {
            if (item.mainPage === true) {
              return (
                <GridItem>
                  <ProjectTeaser project={item} openProjectModal={openProjectModal}/>
                </GridItem>
              );
            }
          })}
        </Grid>
        <Center>
          <Link href="/projects">
          <Button bgColor={theme.colors.mainRed} w="200px" mt="80px">
            See more
          </Button>
          </Link>
        </Center>
      </Box>
    </Flex>
  );
};

export default ProjectSummary;
