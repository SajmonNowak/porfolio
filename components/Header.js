import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/layout";
import Typewriter from "typewriter-effect";
import React, { useState } from "react";
import theme from "../styles/theme";
import Logo from "./Logo";

const Header = () => {
  const [displayHeading, setDisplayHeading] = useState(false);

  const stopTypewriter = () => {
    setDisplayHeading(true);
  };

  return (
    <Box w="100%" h="100vh" paddingTop="25vh" paddingLeft="10vw">
      <Flex direction="column">
        <Box h="200px">
          <Heading as="h1" size="3xl">
            {displayHeading === false ? (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `Hey, my name is <span style="color:#AB0F62">Sajmon</span>`
                    )
                    .start()
                    .callFunction(() => stopTypewriter());
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 60,
                }}
              />
            ) : (
              <span>
                Hey, my name is <span style={{ color: "#AB0F62" }}>Sajmon</span>
              </span>
            )}
          </Heading>
          <Heading
            as="h1"
            size="xl"
            fontWeight="normal"
            fontFamily="inconsolata"
            mt="6"
          >
            {displayHeading && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `I am a self-tought full-stack webdeveloper <br> with a passion for coding`
                    )
                    .pauseFor(1000)
                    .deleteChars(6)
                    .changeDelay(80)
                    .typeString("developing")
                    .pauseFor(1000)
                    .deleteChars(10)
                    .typeString("creating stuff.")
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 20,
                  deleteSpeed: 60,
                }}
              />
            )}
          </Heading>
        </Box>
        <Box w="20%;" minW="150px" mt="50px">
          <Divider border="2px" borderColor={theme.colors.mainRed} />
          <Flex d="row" mt="20px">
            <Logo site="GitHub" size="30px" />
            <Logo site="LinkedIn" size="30px" ml="20px" />
            <Logo site="HackerRank" size="30px" ml="20px" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
