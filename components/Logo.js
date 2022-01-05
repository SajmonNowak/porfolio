import { Image } from "@chakra-ui/image";
import { Box, Icon, Link } from "@chakra-ui/react";
import data from "../data/socialData";
import React from "react";
import theme from "../styles/theme";
import { darken } from "@chakra-ui/theme-tools";

const Logo = ({ site, size, ml, mx }) => {
  return (
      <Link
        href={data[site].url}
        marginLeft={ml}
        marginX={mx}
        _focus={{
          color: darken("mainRed", 10),
          boxShadow: "0 4px 2px -2px #AB0F62",
          outline: "none",
        }}
        tabIndex="1"
      >
        <Icon
          as={data[site].icon}
          w={size}
          h={size}
          _hover={{ color: theme.colors.mainRed, transform: "scale(1.1)" }}
          transition=".3s"
        />
      </Link>
  );
};

export default Logo;
