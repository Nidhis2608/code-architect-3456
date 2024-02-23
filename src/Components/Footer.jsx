
// Footer.js
import React from 'react';
import { Text, IconButton, Divider, SimpleGrid ,Box} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaGooglePlay, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            as="footer"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="2rem"
            bg="#2d2d2d"
            color="white"
        >
            <SimpleGrid
                as="Flex"
                placeItems="center"
                justifyContent="space-evenly"
                columns={{ base: 1, md: 4, lg: 7 }}
            >
                <Flex direction="column" mr={8}>
                    <Text fontSize="lg" mb={2} fontWeight="bold" color="#61dafb">
                        Women
                    </Text>
                    <Link to="/women" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Tops & Tees
                    </Link>
                    <Link to="/women" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Dresses & Jumpsuits
                    </Link>
                    <Link to="/women" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Jeans & Jeggings
                    </Link>
                    <Link to="/women" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                       Hoodies & Sweaters
                    </Link>
                    <Link to="/women" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                       Nightwear
                    </Link>
                </Flex>

                <Flex direction="column" mr={8}>
                    <Text fontSize="lg" mb={2} fontWeight="bold" color="#61dafb">
                        Men
                    </Text>
                    <Link to="/Men" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        T-Shirts
                    </Link>
                    <Link to="/Men" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Shirts
                    </Link>
                    <Link to="/Men" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Jeans & Trousers
                    </Link>
                    <Link to="/Men" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                    Hoodies & Sweaters
                    </Link>
                    <Link to="/Men" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                    Bags and wallets
                    </Link>
                </Flex>

                <Flex direction="column" mr={8}>
                    <Text fontSize="lg" mb={2} fontWeight="bold" color="#61dafb">
                        Kids
                    </Text>
                    <Link to="/Kids" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Tops
                    </Link>
                    <Link to="/Kids" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Dresses
                    </Link>
                    <Link to="/Kids" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Bottoms
                    </Link>
                    <Link to="/Kids" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                       Clothing sets
                    </Link>
                    <Link to="/Kids" style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                       Coats & Jackets
                    </Link>
                </Flex>

                <Flex direction="column" mr={8}>
                    <Text fontSize="lg" mb={2} fontWeight="bold" color="#61dafb">
                        Explore
                    </Text>
                    <Text  style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Sale
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Gift Card
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Store Locator
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                       Home
                       belonging
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                      
                       belonging
                    </Text>
                </Flex>

                <Flex direction="column" mr={8}>
                    <Text fontSize="lg" mb={2} fontWeight="bold" color="#61dafb">
                        About
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Feedback
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Careers
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Take a tour
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Affiliate program
                        Investors
                    </Text>
                 
                </Flex>

                <Flex direction="column" mr={8}>
                    <Text fontSize="lg" mb={1} fontWeight="bold" color="#61dafb">
                        Help
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Contact us
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Shipping
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Return Process
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        Return Policy
                    </Text>
                    <Text style={{ textDecoration: 'none', color: '#61dafb', marginBottom: '0.5rem' }}>
                        know more
                    </Text>
                </Flex>

                <Flex direction="column" align="center">
                    <Flex direction="column">
                        <Text fontSize="lg" mb={2} fontWeight="bold" color="#61dafb">
                            Connect with us
                        </Text>
                        <Flex>
                            <IconButton
                                as="a"
                                href="https://www.facebook.com/"
                                target="_blank"
                                aria-label="Facebook"
                                icon={<FaFacebook />}
                                mr={2}
                                color="#61dafb"
                                bg="white"
                                _hover={{ color: '#1a8cf4' }}
                            />
                            <IconButton
                                as="a"
                                href="https://twitter.com/"
                                target="_blank"
                                aria-label="Twitter"
                                icon={<FaTwitter />}
                                mr={2}
                                color="#61dafb"
                                bg="white"
                                _hover={{ color: '#1a8cf4' }}
                            />
                            <IconButton
                                as="a"
                                href="https://www.instagram.com/"
                                target="_blank"
                                aria-label="Instagram"
                                icon={<FaInstagram />}
                                color="#61dafb"
                                bg="white"
                                _hover={{ color: '#1a8cf4' }}
                            />
                        </Flex>
                    </Flex>

                    <Flex direction="column" ml={8}>
                        <Text fontSize="lg" mb={2} fontWeight="bold" color="#61dafb">
                            Download our App
                        </Text>
                        <Flex>
                            <IconButton
                                as="a"
                                href="https://play.google.com/store/apps/"
                                target="_blank"
                                aria-label="Google Play"
                                icon={<FaGooglePlay />}
                                mr={2}
                                color="#61dafb"
                                bg="white"
                                _hover={{ color: '#1a8cf4' }}
                            />
                            <IconButton
                                as="a"
                                href="https://apps.apple.com/us/app/"
                                target="_blank"
                                aria-label="App Store"
                                icon={<FaApple />}
                                color="#61dafb"
                                bg="white"
                                _hover={{ color: '#1a8cf4' }}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            </SimpleGrid>

            <Divider my={4} w="100%" borderColor="white" />

            <Flex direction="row" textAlign="center" align="center" justify="center" mx="auto" width="100%">
                <Text fontSize="sm" color="#888" mt={2} width="100%">
                    Foggy Fashion is a trademark of Foggy Fashion Company. © 2024 Foggy Fashion.
                </Text>
            </Flex>
        </Box>
    );
};

export default Footer;
