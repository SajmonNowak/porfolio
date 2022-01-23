import { Flex, Box, Center, Heading } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
import Title from "./Title";
import { Button } from "@chakra-ui/button";
import theme from "../styles/theme";
import ProjectList from "./ProjectList";

const ProjectSummary = ({ openProjectModal }) => {
  return (
    <Flex direction="column" id="portfolio">
      <Title text="Projects" />
      <Box mt="50px">
        <ProjectList home={true} openProjectModal={openProjectModal} />
        <Center>
          <Link href="/projects" passHref>
            <Button
              variant="primary"
              bgColor={theme.colors.mainRed}
              tabIndex="1"
              mt={[12, 16]}
            >
              View more
            </Button>
          </Link>
        </Center>
      </Box>
    </Flex>
  );
};

export default ProjectSummary;
