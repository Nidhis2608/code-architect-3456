
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
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn19huyZi0lz4H6Xa0rar1R6OiDK0cX5n1UJyYP--9EGLf1eJWvegZsEtcNPBCgexR2s8&usqp=CAU'
              alt='...'
              objectFit='cover'
              w='120%'
              p={4}
              h='10%'
              style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
            />
            <Text textAlign='center' fontSize='xl' fontWeight='bold' mt='2'>
              Men's Clothing
            </Text>
          </Box>

          <Box w={['100%', '60%']} mb={[2, 0]} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius="12px">
            <Image
              src='https://www.babycouture.in/blog/wp-content/uploads/2022/01/Children-clothing.png'
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