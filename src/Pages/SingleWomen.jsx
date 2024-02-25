import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Box,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import axios from 'axios';

const bookingurl = "https://moke-api-server.onrender.com/Womens";
const cartUrl = "https://moke-api-server.onrender.com/Cart";
const wishlistUrl = "YOUR_WISHLIST_API_URL";
const url = "https://moke-api-server.onrender.com/Womens";

const SingleWomens = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [timer, setTimer] = useState(60 * 60);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [singleData, setSingleData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/${id}`);
        const data = res.data;
        setSingleData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleBooking = async () => {
    try {
      await axios.post(bookingurl, {
        location: singleData.title,
        description: singleData.price,
        image: singleData.image,
        price: singleData.price,
        ID: singleData.title,
      });
      navigate("/cart");
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      await axios.post(cartUrl, {
        location: singleData.title,
        description: singleData.price,
        image: singleData.image,
        price: singleData.price,
        ID: singleData.title,
      });
      setAlertVisible(true);
    } catch (error) {
      console.log("Error adding to cart", error);
    }
  };

  const handleAddToWishlist = async () => {
    try {
      await axios.post(wishlistUrl, {
        location: singleData.title,
        description: singleData.price,
        image: singleData.image,
        price: singleData.price,
        ID: singleData.title,
      });
      setAlertVisible(true);
    } catch (error) {
      console.log("Error adding to wishlist", error);
    }
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  if (error) {
    return <h1>Error loading Cart items</h1>;
  }

  return (
    <Box>
      <Box
        position="relative"
        minHeight="100vh"
        background={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${singleData.image})`}
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          maxWidth="800px"
          margin="auto"
          padding="20px"
          boxShadow="lg"
          borderRadius="md"
          marginTop="50px"
          marginBottom="50px"
          backgroundColor="gray.100"
        >
          <Flex direction={['column', 'row']} align="center">
            <Box width={['100%', '50%']} pr={[0, 4]}>
              <Image
               width="100%"
               height="100%"
               src={singleData.image}
               alt={singleData.title}
              />
            </Box>

            <Box width={['100%', '50%']} p={4} borderRadius="md">
              <Heading mb={2} size="lg">
                {singleData.title}
              </Heading>
              <Text fontSize="lg" color="black.500" mb={4}>
                {singleData.price}
              </Text>
              <Text>{singleData.description}</Text>
              <Text mt={4} fontWeight="bold">
                Price: {singleData.price}
              </Text>
            </Box>
          </Flex>

          <Box mt={4} textAlign="center">
            <Text mt={2} mb={4}>
              {timer > 0 ? (
                `Book now and get ${singleData.discount} off! (Offer ends in ${Math.floor(timer / 60)}:${timer % 60} minutes)`
              ) : (
                `Book now and get ${singleData.discount} off!`
              )}
            </Text>
            <Button
              onClick={handleAddToCart}
              colorScheme='teal'
              _hover={{ bg: 'teal.800' }}
              mt={2}
            >
              Add To Cart
            </Button>
          </Box>

          {isAlertVisible && (
            <Alert mt={6}>
              <AlertIcon />
              <Box textAlign="center">
                <AlertTitle>Added!</AlertTitle>
                <AlertDescription>
                Your favorite item has been added to Cart
                  <br />Few more steps to Styling!
                </AlertDescription>
                <Box>
                  <Button
                    colorScheme='teal'
                    _hover={{ bg: 'teal.800' }}
                    onClick={handleBooking}
                    mt={4}
                  >
                    Go To Cart
                  </Button>
                </Box>
              </Box>
              <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-2}
                top={-2}
                onClick={handleAlertClose}
              />
            </Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SingleWomens;






