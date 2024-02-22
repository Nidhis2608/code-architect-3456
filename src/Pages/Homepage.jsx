
import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
  Flex,
} from '@chakra-ui/react';

export const Homepage = () => {
  return (
    <>

      <Box className='footerMain' bg='#159895' py={6} width='100%' >
        <VStack
          className="footer"
          spacing={6}
          align="start"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-around"
          display="flex"
          wrap="wrap"
          width="100%"
        >
          <Flex
            justify={{ base: 'center', md: 'space-between' }}
            flexWrap="wrap"
          >
            <VStack
              className='content'
              spacing={4}
              textAlign={{ base: 'center', md: 'start' }}
            >
              <Heading color="white" size="md">
                Mens
              </Heading>
              <Text>Help Center</Text>
              <Text>Safety information</Text>
              <Text>Cancellation Option</Text>
              <Text>Our Covid-19 Response</Text>
              <Text>Supporting people with disabilities</Text>
              <Text>Report a neighborhood concern</Text>
            </VStack>

            <VStack
              className='content'
              spacing={4}
              textAlign={{ base: 'center', md: 'start' }}
            >
              <Heading color="white" size="md">
                Womens
              </Heading>
              <Text>Disaster relief housing</Text>
              <Text>Support</Text>
              <Text>Celebrating diversity & belonging</Text>
              <Text>Combating discrimination</Text>
            </VStack>

            <VStack
              className='content'
              spacing={4}
              textAlign={{ base: 'center', md: 'start' }}
            >
              <Heading color="white" size="md">
                Kids
              </Heading>
              <Text>Try Housing</Text>
              <Text>Protection from Homeowner</Text>
              <Text>Explore housing resources</Text>
              <Text>Visit our community forum</Text>
              <Text>How to homeowner responsibly</Text>
            </VStack>

            <VStack
              className='content'
              spacing={4}
              textAlign={{ base: 'center', md: 'start' }}
            >
              <Link href="/about">
                <Heading color="white" size="md">
                  About
                </Heading>
              </Link>
              <Text>Newsroom</Text>
              <Text>Learn about new features</Text>
              <Text>Letter from our founder</Text>
              <Text>Careers</Text>
              <Text>Investors</Text>
              <Text>WorldTravelLuxe</Text>
            </VStack>

            <HStack className='content' spacing={4}>
              <Link href="https://play.google.com" isExternal>
                <Button
                  className='playstore'
                  border="2px"
                  borderColor="#77adbb"
                  borderRadius="8px"
                  display="flex"
                  gap={3}
                >
                  <Image
                    width="35px"
                    height="35px"
                    src="https://img.icons8.com/fluency/48/google-play.png"
                    alt="google-play"
                  />
                  <VStack textAlign="start">
                    <Text fontSize="10px" marginBottom="0px">
                      GET IT ON
                    </Text>
                    <Heading fontSize="sm" fontWeight="600" marginTop="-5px">
                      Google Play
                    </Heading>
                  </VStack>
                </Button>
              </Link>

              <Link href="https://www.apple.com/in/app-store/" isExternal>
                <Button
                  className='Appstore'
                  border="2px"
                  borderColor="#77adbb"
                  borderRadius="8px"
                  display="flex"
                  gap={10}
                >
                  <Image
                    width="35px"
                    height="35px"
                    src="https://img.icons8.com/ios-glyphs/30/mac-os.png"
                    alt="mac-os"
                  />
                  <VStack textAlign="start">
                    <Text fontSize="10px" marginBottom="0px">
                      GET IT ON
                    </Text>
                    <Heading fontSize="sm" fontWeight="600" marginTop="-5px">
                      App Store
                    </Heading>
                  </VStack>
                </Button>
              </Link>
              <HStack className="icon" spacing={12}>
                <Link href="https://www.facebook.com/login/" isExternal>
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link href="https://twitter.com/login" isExternal>
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  isExternal
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </HStack>
            </HStack>
          </Flex>
        </VStack>

        <hr className='horizontalrule' />

        <HStack
          className='copyright'
          spacing={{ base: 'auto', md: '74%' }}
          width="92%"
          margin="auto 0 0 auto"
        >
          <VStack className="sub1copyright">
            <Text fontSize="15px" color="white">
            &copy; 2024 Your Foggy Fashion Website. All rights reserved.
            </Text>
          </VStack>
          <VStack className="sub2copyright">
            <Text color="white">
              English(US)
              <span style={{ color: 'white' }}>€</span>Euro
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default Homepage;
