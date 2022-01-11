import { GridItem } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import React from "react";
import projectData from "../data/projectData";
import projectOrder from "../data/projectOrder";
import ProjectPreview from "./ProjectPreview";

const ProjectList = ({ openProjectModal, home }) => {

  return (
    <Grid
      templateColumns={["1fr", "1fr", "repeat(4, 1fr)"]}
      templateRows="repeat(auto-fit, 1fr)"
      gap="20px"
      w="100%"
    >
      {home
        ? 
        projectOrder.home.map((elementName, index) => {
          let item;
          const projectObject = projectData.find((project) => project.name === elementName);
          item = (<GridItem
            colSpan={[1, 1, projectObject.colspan.home]}
            rowSpan={[1, 1, projectObject.rowspan ? projectObject.rowspan : 1]}
            minHeight="10vw"
            key={index}
            onClick={() => openProjectModal(projectObject.name)}
          >
            <ProjectPreview item={projectObject} />
          </GridItem>)

          return item;
        })
        : projectOrder.projectPage.map((elementName, index) => {
          let item;
          const projectObject = projectData.find((project) => project.name === elementName);
          item = (<GridItem
            colSpan={[1, 1, projectObject.colspan.project]}
            rowSpan={[1, 1, projectObject.rowspan ? projectObject.rowspan : 1]}
            minHeight="10vw"
            key={index}
            onClick={() => openProjectModal(projectObject.name)}
          >
            <ProjectPreview item={projectObject} />
          </GridItem>)

          return item;
        })}
    </Grid>
  );
};

export default ProjectList;
