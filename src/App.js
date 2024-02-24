
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Allroutes from './Routing/Allroutes';
import { Navbar } from './Components/Navbar';
import {useSelector} from 'react-redux'
import Footer from './Components/Footer';

function App() {
  const state=useSelector(state=>state.users);
  console.log("state",state);

  const mail=state.email;
  return (
    <ChakraProvider>
        <div className="App">
        { (mail==='admin@gmail.com')?<Allroutes />:
     <>
    
       <Navbar/>
      <Allroutes />
        <Footer/>
          </>
}
       </div>

    </ChakraProvider>
    
  );
}

export default App;
