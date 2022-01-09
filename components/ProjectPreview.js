import React, { useState } from "react";
import { Flex, Text, Box, Center } from "@chakra-ui/layout";
import { darken } from "@chakra-ui/theme-tools";

const ProjectPreview = ({ item }) => {
  const [activated, setActivated] = useState(false);

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      onMouseEnter={() => setActivated(true)}
      onMouseLeave={() => setActivated(false)}
      transition="0.5s"
      _focus={{
        color: darken("mainRed", 10),
        boxShadow: "0 0 15px #AB0F62",
        border: "none",
        outline: "none",
      }}
      _hover={{
        color: darken("mainRed", 10),
        boxShadow: "0 2px 15px #383735",
      }}
      tabIndex="1"
    >
      {!activated && (
        <Box
          bgColor="rgba(0,0,0,0.8)"
          position="absolute"
          w="100%"
          h="100%"
          zIndex="99"
        >
          <Center h="100%">
            <Text fontSize={item.colspan > 1 ? "4xl" : "xl"}>{item.name}</Text>
          </Center>
        </Box>
      )}

      <video
        src={item.videoURL}
        onMouseOver={(e) => {
          e.target.play();
          e.target.playbackRate = 2;
        }}
        onMouseOut={(e) => e.target.pause()}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        muted
        loop
      ></video>
    </Box>
  );
};

export default ProjectPreview;
