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
      <Flex d="column" id="about">
        <Title text="AboutMe" />
        <Grid
          mt="50px"
          templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
          templateRows={["auto auto", "auto auto", "auto auto", "1fr"]}
          gap="70px"
        >
          <GridItem fontSize="lg">
            <Box color="#f2fa61" fontWeight="bold">
              &lt;p&gt;
            </Box>
            <Text  py="10px" pl="15px" borderLeft="1px solid lightgrey">
              I am a 24 years old{" "}
              <span style={{ color: "#a34b79" }}>
                {" "}
                self-taught developer from Bochum, Germany
              </span>
              . My first HTML and CSS lines were written while finishing my
              undergraduate degree in Economics.
              <br />
              <br />
              Since then, I focused on creating different{" "}
              <span style={{ color: "#a34b79" }}>front-end</span> and
              <span style={{ color: "#a34b79" }}> full-stack projects</span>. I
              mostly work with{" "}
              <span style={{ color: "#a34b79" }}>JavaScript, React </span>
              <span style={{ color: "#a34b79" }}>and NodeJS</span>. The projects
              included on this site present my learnings and lessons during my
              journey. Apart from building things, I am always working on
              improving my code by studying the fundamentals, catching up with
              methodologies (e.g., BEM, CSS in JS), architectural patterns
              (e.g., MVC, OOP) or trying out new technologies and frameworks.
              <br />
              <br />
              At the moment, I am looking for an opportunity that enables me to
              take responsibility, learn and find people with whom I can build
              inspiring products and grow through challenges.
              <br />
            </Text>
            <Box color="#f2fa61" fontWeight="bold">
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
