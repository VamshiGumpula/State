// import "@fontsource/inter";
import { PaletteColor, PaletteColorOptions, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    accentGreen: PaletteColor;
    accentYellow: PaletteColor;
    backgroundGrey: PaletteColor;
  }
  interface PaletteOptions {
    accentGreen: PaletteColorOptions;
    accentYellow: PaletteColorOptions;
    backgroundGrey: PaletteColorOptions;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    Caption1: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    Caption1: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    Caption1: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#224DFF",
    },
    accentGreen: {
      main: "#17A076",
      light: "#e8f6f1",
    },
    accentYellow: {
      main: "#A08817",
      light: "#f6f3e8",
    },
    backgroundGrey: {
      main: "#F7F8FA",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Inter",
    },
    Caption1: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "grey",
    },
  },
});

export default theme;
