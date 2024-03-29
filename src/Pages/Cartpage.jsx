

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBookingData, fetchBookingsData } from '../Redux/action';
import { Box, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const CartPage = () => {
  const dispatch = useDispatch();
  const { isloading, iserror, mybooking } = useSelector((state) => state);
  console.log(mybooking);

  useEffect(() => {
    dispatch(fetchBookingsData());
  }, [dispatch]);

  const handleDeleteBooking = (id) => {
    dispatch(deleteBookingData(id));
  };

  const navigate = useNavigate();

  const handleNavi = (item) => {
    navigate("/payment", { state: { amount: item.price } });
  };
  useEffect(()=> {
    document.title = "Foggy | Cart";
    },[]);

  return (
    <div>
      
      {isloading ? (
        <h3>Loading....</h3>
      ) : iserror ? (
        <h1>Error loading cart items</h1>
      ) : mybooking.length === 0 ? (
        <h2>No items in the cart ! </h2>
      ) : (
        <div>
          {mybooking.map((item, index) => (
            <div key={item.id} className="booking-card">
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                style={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: index % 2 === 0 ? '#EDEDED' : '#FFFFFF',
                }}
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src={item.image}
                  alt='Caffe Latte'
                />

                <Stack align="left" justify="center">

                  <CardBody>
                    <Heading size='md'>{item.location}</Heading>
                    <Box py='2'>
                      <Text align="left">{item.country}</Text>

                    </Box>
                    <Box py='2'>

                      <Text align="left">Price(INR):₹ {item.price}</Text>

                  

                    </Box>
                  </CardBody>

                  <CardFooter>
                    <Button onClick={() => handleDeleteBooking(item.id)} variant='solid' colorScheme='teal'>
                      DELETE
                    </Button>
                    <Button onClick={() => handleNavi(item)} variant='solid' colorScheme='blue' ml="2">
                      Proceed To Pay
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </div>
          ))}
        </div>
      )}
     
    </div>
  );

};

export default CartPage;