import { GridItem } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import React from "react";
import projectData from "../data/projectData";
import projectOrder from "../data/projectOrder";
import useWindowDimensions from "../hooks/useWindowDimensions";
import MobileProjectPreview from "./MobileProjectPreview";
import ProjectPreview from "./ProjectPreview";

const ProjectList = ({ openProjectModal, home }) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  if (windowWidth > 800) {
    return (
      <Grid
        templateColumns={["1fr", "1fr", "repeat(4, 1fr)"]}
        templateRows="repeat(auto-fit, 1fr)"
        gap="20px"
        w="100%"
      >
        {home
          ? projectOrder.home.map((elementName, index) => {
              let item;
              const projectObject = projectData.find(
                (project) => project.name === elementName
              );
              item = (
                <GridItem
                  colSpan={[1, 1, projectObject.colspan.home]}
                  rowSpan={[
                    1,
                    1,
                    projectObject.rowspan ? projectObject.rowspan : 1,
                  ]}
                  minHeight="10vw"
                  key={index}
                  onClick={() => openProjectModal(projectObject.name)}
                >
                  <ProjectPreview item={projectObject} />
                </GridItem>
              );

              return item;
            })
          : projectOrder.projectPage.map((elementName, index) => {
              let item;
              const projectObject = projectData.find(
                (project) => project.name === elementName
              );
              item = (
                <GridItem
                  colSpan={[1, 1, projectObject.colspan.project]}
                  rowSpan={[
                    1,
                    1,
                    projectObject.rowspan ? projectObject.rowspan : 1,
                  ]}
                  minHeight="10vw"
                  key={index}
                  onClick={() => openProjectModal(projectObject.name)}
                >
                  <ProjectPreview item={projectObject} />
                </GridItem>
              );

              return item;
            })}
      </Grid>
    );
  } else {
    return (
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)"]}
        templateRows="repeat(auto-fit, 1fr)"
        gap="10px"
      >
        {home
          ? projectOrder.home.map((elementName, index) => {
              let item;
              const projectObject = projectData.find(
                (project) => project.name === elementName
              );
              item = (
                <GridItem
                  key={index}
                  onClick={() => openProjectModal(projectObject.name)}
                  w="100%"
                  h={["100px", "120x"]}
                >
                  <MobileProjectPreview item={projectObject} />
                </GridItem>
              );

              return item;
            })
          : projectOrder.projectPage.map((elementName, index) => {
              let item;
              const projectObject = projectData.find(
                (project) => project.name === elementName
              );
              item = (
                <GridItem
                  key={index}
                  onClick={() => openProjectModal(projectObject.name)}
                  w="100%"
                  h={["120px", "120x"]}
                >
                  <MobileProjectPreview item={projectObject} />
                </GridItem>
              );

              return item;
            })}
      </Grid>
    );
  }
};

export default ProjectList;
