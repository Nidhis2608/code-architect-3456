import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
          <Homepage />
   </div>

</ChakraProvider>
  );
}

export default App;
