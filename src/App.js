import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './Pages/Homepage';
function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
