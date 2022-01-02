import { Link, Text } from "@chakra-ui/layout";
import React from "react";
import theme from "../styles/theme";

const MenuItem = ({ name, path, stressed }) => {
  return (
    <Link href={path} padding="4">
      <Text color={stressed ? theme.colors.mainRed : ""}>{name}</Text>
    </Link>
  );
};

export default MenuItem;
