import { extendTheme } from "@chakra-ui/react";
import { darken, whiten } from "@chakra-ui/theme-tools";
import { VscNoNewline } from "react-icons/vsc";

const theme = extendTheme({
  fonts: {
    heading: "Roboto Mono",
    body: "inconsolata",
  },
  colors: {
    mainRed: "#AB0F62",
  },
  components: {
    Button: {
      baseStyle: {},
      sizes: {
        md: {
          h: 14,
          minW: "160px",
        },
      },
      variants: {
        primary: {
          bgColor: "mainRed",
          border: "1px solid #AB0F62",
          _hover: {
            bgColor: darken("mainRed", 10),
          },
          _focus: {
            outline: "none",
            boxShadow: "0 0 0 4px #b35989",
          },
        },
        secondary: {
          color: "white",
          bgColor: "transparent",
          border: "1px solid white",
          _hover: {
            color: darken("mainRed", 10),
            borderColor: darken("mainRed", 10),
          },
          _focus: {
            outline: "none",
            boxShadow: "0 0 0 4px #b35989",
          },
        },
      },
    },
    Tag: {
      baseStyle: {
        container: {
          bgColor: "transparent",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.24)",
          h: 14,
          padding: "20px !important",
          textAlign: "center",
        },
      },
      defaultProps: {
        variant: "none",
      },
    },
  },
});

export default theme;
