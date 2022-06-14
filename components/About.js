import { Box, Container, Flex, Text, Grid, GridItem } from "@chakra-ui/layout";
import React, { Suspense } from "react";
import Title from "./Title";
import { Canvas, useFram } from "@react-three/fiber";
import Model from "./ObjectModel";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
} from "@react-three/drei";
import { Camera } from "three";

const About = () => {
  return (
    <Container maxW="100%" py="100px" minH="90vh">
      <Flex d="column">
        <Title text="AboutMe" />
        <Grid
          mt="50px"
          templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
          templateRows={["auto auto", "auto auto", "auto auto", "1fr"]}
          gap="70px"
        >
          <GridItem fontSize="lg">
            &lt;p&gt;
            <Text my="20px">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
              <br />
              <br />
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
            &lt;/p&gt;
          </GridItem>
          <GridItem>
            <Canvas>
              <Suspense fallback={null}>
                <Model />
                <PerspectiveCamera
                  makeDefault
                  fov={75}
                  position={[0, 7, 10]}
                  near={1}
                  far={100}
                />
                <OrbitControls autoRotate />
                <Environment preset="sunset" />
              </Suspense>
            </Canvas>
          </GridItem>
        </Grid>
      </Flex>
    </Container>
  );
};

export default About;
