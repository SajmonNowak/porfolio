import { Box, Container, Flex, Text, Grid, GridItem } from "@chakra-ui/layout";
import React, { Suspense } from "react";
import Title from "./Title";
import { Canvas, useFram } from "@react-three/fiber";
import Model from "./ObjectModel";
import {
  Environment,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  SpotLight,
} from "@react-three/drei";
import { Camera } from "three";
import { Spinner } from "@chakra-ui/react";

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
            <Box  color="#AB9A20">
            &lt;p&gt;
            </Box>
            <Text my="20px">
              I am a 24 years old self-taught developer from Bochum, Germany. My
              first HTML and CSS lines were propably written while finishing my
              undergraduate degree in Economics. However, my interest in web
              development ignited after the world entered into a global
              pandemic, leaving me with more time for learning my first
              programing language. Since then, I focused on creating different
              front-end and full-stack projects. Some of them are presented on
              this site and present my learnings and lessons during my journey.
              Apart from building things, I am always working on improving my
              code by studying the fundamentals, catching up with methodologies
              (BEM, CSS in JS ...), architectural patterns (MVC, OOP ...) or
              trying out new technologies and frameworks.
              <br />
              At the moment I am looking for an opportunity that enables me to
              take responsibility, learn and find people with whom I can build
              inspiring products and grow from challanges.
              <br />
            </Text>
            <Box  color="#AB9A20">
            &lt;p&gt;
            </Box>
          </GridItem>
          <GridItem minHeight="400">
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
