


import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link as ChakraLink,
  Stack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserInjured, FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../Redux/action';
import BONVOYAGELOGO from '../images/Foggy_logo.jpg';

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan768] = useMediaQuery('(max-width: 767px)');
  const users = useSelector((store) => store.users);
  const isAuth = useSelector((store) => store.isAuth);
  const token = useSelector((store) => store.token);
  const location = useLocation();

  const [activeSection, setActiveSection] = useState(location.pathname);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout);
  };

  return (
    <Box
      style={{
        position: 'sticky',
        width: '100%',
        zIndex: 1,
        backgroundColor: '#159895',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '10px 20px',
      }}
    >
      <Flex maxWidth='container.xl' alignItems='center' justify='space-between'>
        <Box>
          <Heading size='md' ml='20' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            <img style={{ height: '60px', width: '70px' }} src={BONVOYAGELOGO} alt='' />
          </Heading>
        </Box>

        <Flex
          gap={isSmallerThan768 ? '0' : '10'}
          ml={isSmallerThan768 ? '0' : '100'}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: isSmallerThan768 ? '0' : '10px',
            fontWeight: 'bold',
          }}
        >
          {isSmallerThan768 ? (
            <>
              <IconButton
                icon={<FaBars />}
                aria-label='Open Menu'
                onClick={onOpen}
                variant='outline'
                border='1px solid teal'
                mr='2'
              />
              <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Menu</DrawerHeader>
                  <DrawerBody>
                    <Stack spacing='4'>
                      <ChakraLink
                        as={Link}
                        to='/'
                        style={{
                          textDecoration: 'none',
                          color: activeSection === 'white',
                          fontWeight: 'bold',
                          borderBottom: activeSection === '/' && '2px solid white',
                        }}
                        onClick={() => setActiveSection('/')}
                      >
                        Home
                      </ChakraLink>
                      <ChakraLink
                        as={Link}
                        to='/men'
                        style={{
                          textDecoration: 'none',
                          color: activeSection === 'white',
                          fontWeight: 'bold',
                          borderBottom: activeSection === '/men' && '2px solid white',
                        }}
                        onClick={() => setActiveSection('/men')}
                      >
                        Men
                      </ChakraLink>
                      <ChakraLink
                        as={Link}
                        to='/women'
                        style={{
                          textDecoration: 'none',
                          color: activeSection === 'white',
                          fontWeight: 'bold',
                          borderBottom: activeSection === '/women' && '2px solid white',
                        }}
                        onClick={() => setActiveSection('/women')}
                      >
                        Women
                      </ChakraLink>
                      <ChakraLink
                        as={Link}
                        to='/kids'
                        style={{
                          textDecoration: 'none',
                          color: activeSection === 'white',
                          fontWeight: 'bold',
                          borderBottom: activeSection === '/kids' && '2px solid white',
                        }}
                        onClick={() => setActiveSection('/kids')}
                      >
                        Kids
                      </ChakraLink>
                      <ChakraLink
                        as={Link}
                        to='/cart'
                        style={{
                          textDecoration: 'none',
                          color: activeSection === 'white',
                          fontWeight: 'bold',
                          borderBottom: activeSection === '/cart' && '2px solid white',
                        }}
                        onClick={() => setActiveSection('/cart')}
                      >
                        Cart
                      </ChakraLink>
                      <ChakraLink
                        as={Link}
                        to='/about'
                        style={{
                          textDecoration: 'none',
                          color: activeSection === 'white',
                          fontWeight: 'bold',
                          borderBottom: activeSection === '/about' && '2px solid white',
                        }}
                        onClick={() => setActiveSection('/about')}
                      >
                        About
                      </ChakraLink>
                      <ChakraLink
        as={Link}
        to='/signup'
        style={{
          textDecoration: 'none',
          color: activeSection === '/signup' ? 'white' : 'inherit',
          fontWeight: 'bold',
        }}
        onClick={() => {
          setActiveSection('/signup');
          onClose(); // Close the drawer after clicking on an item
        }}
      >
        Signup
      </ChakraLink>
      <ChakraLink
        as={Link}
        to='/login'
        style={{
          textDecoration: 'none',
          color: activeSection === '/login' ? 'white' : 'inherit',
          fontWeight: 'bold',
        }}
        onClick={() => {
          setActiveSection('/login');
          onClose(); // Close the drawer after clicking on an item
        }}
      >
        Login
      </ChakraLink>
      {isAuth && (
        <ChakraLink
          as={Link}
          to='/'
          style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
          }}
          onClick={() => {
            handleLogout();
            onClose(); // Close the drawer after clicking on an item
          }}
        >
          Logout
        </ChakraLink>
      )}


                    </Stack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
            
          ) : (
            <>
              <ChakraLink
                as={Link}
                to='/'
                style={{
                  textDecoration: 'none',
                  padding: '10px',
                  color: activeSection === 'white',
                  transition: 'color 0.3s',
                  fontWeight: 'bold',
                  fontSize: '21px',
                  borderBottom: activeSection === '/' && '2px solid white',
                }}
                onClick={() => setActiveSection('/')}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={Link}
                to='/men'
                style={{
                  textDecoration: 'none',
                  padding: '10px',
                  color: activeSection === 'white',
                  transition: 'color 0.3s',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  borderBottom: activeSection === '/men' && '2px solid white',
                }}
                onClick={() => setActiveSection('/men')}
              >
                Men
              </ChakraLink>
              <ChakraLink
                as={Link}
                to='/women'
                style={{
                  textDecoration: 'none',
                  padding: '10px',
                  color: activeSection === 'white',
                  transition: 'color 0.3s',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  borderBottom: activeSection === '/women' && '2px solid white',
                }}
                onClick={() => setActiveSection('/women')}
              >
                Women
              </ChakraLink>
              <ChakraLink
                as={Link}
                to='/kids'
                style={{
                  textDecoration: 'none',
                  padding: '10px',
                  color: activeSection === 'white',
                  transition: 'color 0.3s',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  borderBottom: activeSection === '/kids' && '2px solid white',
                }}
                onClick={() => setActiveSection('/kids')}
              >
                Kids
              </ChakraLink>
              <ChakraLink
                as={Link}
                to='/cart'
                style={{
                  textDecoration: 'none',
                  padding: '10px',
                  color: activeSection === 'white',
                  transition: 'color 0.3s',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  borderBottom: activeSection === '/cart' && '2px solid white',
                }}
                onClick={() => setActiveSection('/cart')}
              >
                Cart
              </ChakraLink>
              <ChakraLink
                as={Link}
                to='/about'
                style={{
                  textDecoration: 'none',
                  padding: '10px',
                  color: activeSection === 'white',
                  transition: 'color 0.3s',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  borderBottom: activeSection === '/about' && '2px solid white',
                }}
                onClick={() => setActiveSection('/about')}
              >
                About
              </ChakraLink>
              
              {isAuth ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <h2>Hello, {users[0].firstName}</h2>
              <Link to='/'>
                <Button onClick={handleLogout}> Log out</Button>
              </Link>
            </div>
          ) : (
            <Stack direction='row' spacing={2}>
              <ChakraLink
                as={Link}
                to='/signup'
                style={{ textDecoration: 'none' }}
                onClick={() => setActiveSection('/signup')}
              >
                <Button
                  leftIcon={<FaUserInjured />}
                  colorScheme='#159895'
                  variant='solid'
                  fontWeight='bold'
                  size='md'
                  backgroundColor='black'
                  color='white'
                  _hover={{
                    backgroundColor: 'white',
                    color: 'black',
                  }}
                >
                  SignUp
                </Button>
              </ChakraLink>
              <ChakraLink
                as={Link}
                to='/login'
                style={{ textDecoration: 'none' }}
                onClick={() => setActiveSection('/login')}
              >
                <Button
                  leftIcon={<FaUserInjured />}
                  colorScheme='gray'
                  variant='solid'
                  fontWeight='bold'
                  size='md'
                  backgroundColor='black'
                  color='white'
                  _hover={{
                    backgroundColor: 'white',
                    color: 'black',
                  }}
                >
                  Login
                </Button>
              </ChakraLink>
            </Stack>
          )}


            </>
          )}

          {/* {isAuth ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <h2>Hello, {users[0].firstName}</h2>
              <Link to='/'>
                <Button onClick={handleLogout}> Log out</Button>
              </Link>
            </div>
          ) : (
            <Stack direction='row' spacing={2}>
              <ChakraLink
                as={Link}
                to='/signup'
                style={{ textDecoration: 'none' }}
                onClick={() => setActiveSection('/signup')}
              >
                <Button
                  leftIcon={<FaUserInjured />}
                  colorScheme='#159895'
                  variant='solid'
                  fontWeight='bold'
                  size='md'
                  backgroundColor='black'
                  color='white'
                  _hover={{
                    backgroundColor: 'white',
                    color: 'black',
                  }}
                >
                  SignUp
                </Button>
              </ChakraLink>
              <ChakraLink
                as={Link}
                to='/login'
                style={{ textDecoration: 'none' }}
                onClick={() => setActiveSection('/login')}
              >
                <Button
                  leftIcon={<FaUserInjured />}
                  colorScheme='gray'
                  variant='solid'
                  fontWeight='bold'
                  size='md'
                  backgroundColor='black'
                  color='white'
                  _hover={{
                    backgroundColor: 'white',
                    color: 'black',
                  }}
                >
                  Login
                </Button>
              </ChakraLink>
            </Stack>
          )} */}
        </Flex>
      </Flex>
    </Box>
  );
};
