import { GridItem } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import React from "react";
import projectData from "../data/projectData";
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
        ? projectData.map((item, index) => {
            if (item.mainPage) {
              return (
                <GridItem
                  colSpan={[1, 1, item.colspan]}
                  rowSpan={[ 1, 1, item.rowspan ? item.rowspan : 1]}
                  minHeight="10vw"
                  key={index}
                  onClick={() => openProjectModal(item.name)}
                >
                  <ProjectPreview item={item} />
                </GridItem>
              );
            }
          })
        : projectData.map((item, index) => (
            <GridItem
              colSpan={[1, 1, item.colspan]}
              rowSpan={[ 1, 1, item.rowspan ? item.rowspan : 1]}
              minHeight="10vw"
              bgColor="red"
              key={index}
              onClick={() => openProjectModal(item.name)}
            >
              <ProjectPreview item={item} />
            </GridItem>
          ))}
    </Grid>
  );
};

export default ProjectList;
