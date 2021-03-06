import Icon from "@chakra-ui/icon";
import { Box, Center } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React, { useState } from "react";
import SkillLogo from "./SkillLogo";

const SkillTag = ({ tag }) => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <Tag
      position="relative"
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
    >
      <Box color={showIcon ? "black" : "white"}>{tag}</Box>
      {showIcon && (
        <Center position="absolute" margin="0 auto" left="0" right="0">
          <SkillLogo skillName={tag} noName />
        </Center>
      )}
    </Tag>
  );
};

export default SkillTag;
