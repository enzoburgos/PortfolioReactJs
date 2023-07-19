import React from 'react';
import { Header, Main, Footer } from "./components";
import { ChakraProvider } from '@chakra-ui/react';

import theme from './components/Them/Them';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
      <Header />
      <Main/>
      <Footer />
      </ChakraProvider>
    </>

    
  );
}

export default App;
