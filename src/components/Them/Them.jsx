import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    //base: desde 0 hasta     -
    sm: "480px", // 480px  
    md: "768px", // 768px     -
    lg: "1024px", // 992px    
    xl: "1920px", // 1280px     -
    "2xl": "1536px", // 1536px
    custom: "45em", // Medida personalizada
  },
});

export default theme;