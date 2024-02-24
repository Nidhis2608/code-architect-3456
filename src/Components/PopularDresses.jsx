
import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const PopularPlaces = () => {
  return (
    <div style={{ marginBottom: '60px', marginTop:"20px" }}>
     <Text fontWeight="bold" mb={4} color="teal.500" fontFamily="cursive" fontSize="50px" p={"50px"}> 
        Dresses
        </Text>
      <div style={{ width: '100%', height: '20%', marginBottom: '8px' }}>
        <Flex
          direction={['column', 'row']}
          justify="space-between"
          align="center"
          style={{ borderRadius: '5px', marginBottom: '0px', marginLeft: '160px', marginRight: '80px', gap: "5%" }}
        >
          <Box w={['100%', '60%']} mb={[2, 0]} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius="12px">
            <Image
              src='https://static3.azafashions.com/tr:w-317/uploads/product_gallery/1699087331908_1.jpg?noopt=true'
              alt='...'
              objectFit='cover'
              w='100%'
              p={4}
              h='30%'
              style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
            />
            <Text textAlign='center' fontSize='xl' fontWeight='bold' mt='2'>
              Women's Clothing
            </Text>
          </Box>

          <Box w={['120%', '100%']} mb={[2, 0]} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius="12px">
            <Image
              src='https://cdn17.nnnow.com/web-images/medium/styles/XWYVJY1LFEI/1668599080148/1.jpg'
              alt='...'
              objectFit='cover'
              w='120%'
              p={4}
              h='10%'
              style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
            />
            <Text textAlign='center' fontSize='xl' fontWeight='bold' mt='2'>
              Men's Clothing Dresses
            </Text>
          </Box>

          <Box w={['100%', '60%']} mb={[2, 0]} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius="12px">
            <Image
              src='https://i.pinimg.com/736x/85/fd/6c/85fd6cd5d80a291ed0abb70d80b3dbda.jpg'
              alt='...'
              objectFit='cover'
              w='100%'
              p={4}
              h='30%'
              style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
            />
            <Text textAlign='center' fontSize='xl' fontWeight='bold' mt='2'>
              Kid's Clothing
            </Text>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default PopularPlaces;