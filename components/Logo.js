import { Image } from "@chakra-ui/image";
import { Icon, Link } from "@chakra-ui/react";
import data from "../data/socialData";
import React from "react";
import theme from "../styles/theme";

const Logo = ({ site, size, ml, mx }) => {
  return (
    <Link href={data[site].url} marginLeft={ml} marginX={mx}>
      <Icon
        as={data[site].icon}
        w={size}
        h={size}
        _hover={{ color: theme.colors.mainRed }}
        transition="0.3s"
      />
    </Link>
  );
};

export default Logo;
