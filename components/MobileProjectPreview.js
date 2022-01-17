import { Box, Center, Text } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";

const MobileProjectPreview = ({ item }) => {
  return (
    <Box
      w="100%"
      h="100%"
      objectFit="cover"
      position="relative"
      objectFit="cover"
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bgColor="rgba(0,0,0,0.7)"
        zIndex="10"
        _hover={{ bgColor: "undefined" }}
      >
        <Center h="100%">
          <Text>{item.name}</Text>
        </Center>
      </Box>

      <Image src={item.imgs[0]} layout="fill" objectFit="cover" />
    </Box>
  );
};

export default MobileProjectPreview;
