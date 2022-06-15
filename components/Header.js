import { Box, Divider, Flex, Heading } from "@chakra-ui/layout";
import Typewriter from "typewriter-effect";
import React, { useState } from "react";
import theme from "../styles/theme";
import Logo from "./Logo";
import { keyframes } from "@chakra-ui/system";

const grow = keyframes`
0% {
  width: 0%
}
100%{
  width: 100%
}
`;

const fadein = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity 1;
}
`;

const Header = () => {
  const [displayHeading, setDisplayHeading] = useState(false);
  const [finished, setFinished] = useState(false);

  const stopTypewriter = () => {
    setDisplayHeading(true);
  };

  return (
    <Box w="100%" h="100vh" paddingTop="25vh" id="about">
      <Flex direction="column">
        <Box>
          <Heading as="h1" fontSize={["4xl", "5xl", "5xl", "5xl", "6xl"]}>
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
            fontSize={["xl", "2xl", "2xl", "2xl", "3xl"]}
            fontWeight="normal"
            fontFamily="inconsolata"
            mt="6"
          >
            {displayHeading && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `I'm a self-tought full-stack webdeveloper <br> with a passion for coding`
                    )
                    .pauseFor(500)
                    .deleteChars(6)
                    .changeDelay(80)
                    .typeString("developing")
                    .pauseFor(500)
                    .deleteChars(10)
                    .typeString("creating awesome things.")
                    .callFunction(() => setFinished(true))
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 20,
                  deleteSpeed: 40,
                }}
              />
            )}
          </Heading>
        </Box>
        {finished && (
          <Box w="20%;" minW="150px" mt="50px">
            <Divider
              border="2px"
              borderColor={theme.colors.mainRed}
              animation={`${grow} 1.25s linear`}
            />
            <Flex direction="row" mt="20px" animation={`${fadein} 2s linear `}>
              <Box w={["24px", "32px"]} h={["24px", "32px"]}>
                <Logo site="GitHub" />
              </Box>
              <Box ml="20px" w={["24px", "32px"]} h={["24px", "32px"]}>
                <Logo site="LinkedIn" />
              </Box>
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
