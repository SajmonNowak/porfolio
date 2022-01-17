import { extendTheme } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";

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
        sm: {
          h: 12,
          minW: "120px"
        },
        md: {
          h: 14,
          minW: "160px",
        },
      },
      variants: {
        primary: {
          bgColor: "mainRed",
          border: "1px solid #AB0F62",
          height: [10, 12, 14],
          minW: ["120px","120px", "160px"],
          _hover: {
            bgColor: darken("mainRed", 10),
          },
          _focus: {
            outline: "none",
            boxShadow: "0 0 10px #AB0F62",
          },
        },
        secondary: {
          color: "white",
          bgColor: "transparent",
          height: [10, 12, 14],
          minW: ["120px","120px", "160px"],
          border: "1px solid white",
          _hover: {
            color: darken("mainRed", 10),
            borderColor: darken("mainRed", 10),
          },
          _focus: {
            outline: "none",
            boxShadow: "0 0 10px #AB0F62",
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
          padding: ["10px !important","20px !important"],
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
