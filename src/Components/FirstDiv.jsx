
// FirstDiv.jsx
import { Box, Heading } from '@chakra-ui/react';
import backgroundImage from '../images/01.jpg';

const FirstDiv = () => {
  return (
    <Box
      className='home'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box marginBottom="auto" paddingTop="90px" textAlign="center">
        <Heading
          as="h1"
          size="4xl"
          color="black.500"
          mb={6}
          fontFamily="cursive"
          fontWeight="bold"
          marginTop="70px"
          letterSpacing="2px"
        >
         Class Elegance Style
        </Heading>
        <Heading as='h2' size='lg' color="teal.500" fontFamily="san-serif" fontWeight="bold">
          Fashion Has Two Purposes
        </Heading>
        <Heading as='h2' size='lg' color="teal.500" fontFamily="poppins" fontWeight="bold">
          Comfort and Love
        </Heading>
        <Heading as='h2' size='lg' color="teal.500" fontFamily="poppins" fontWeight="bold">
          Beauty Comes When Fashion Succeeds.
        </Heading>
      </Box>
      </Box>

      
  );
};

export default FirstDiv;
