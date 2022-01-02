import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <Container maxW="100%" py="100px" minH="90vh">
      <Flex d="column">
        <Title text="AboutMe" />
        <Box w="55%" mt="50px" pl="10vw" fontSize="lg">
          &lt;p&gt;
          <Text my="20px">
            I am a 24 year old student from Bochum, Germany. I propably wrote my
            first HTML and CSS while finishing my undergraduate degree in
            Economics. However, my interest for web development ignited in late
            2021, when working on my first font-end projects. Since late 2021, I
            focus mostly on learning how to create Full Stack applications. Ever
            since, i enjoy learning everything that helps me on my Journey to
            someday create valuably product from the JavaScirpt Basics and clean
            code to utility-first css.
            <br />
            <br />
            In summary, if you are interested to discuss how to center a div or
            what Keynesian economics are all about, hit me up.
          </Text>
          &lt;/p&gt;
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
