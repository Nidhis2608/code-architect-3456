import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import axios from 'axios';

const Women = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Replace 'YOUR_ENDPOINT_HERE' with the specific endpoint for women's products if available
    axios.get('https://moke-api-server.onrender.com/products')
      .then(res => {
        // Assuming the response has the data directly; adjust if nested
        setProducts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // Placeholder login check; replace with actual logic
  const isLoggedIn = () => {
    // Example: Check for an auth token in local storage
    return localStorage.getItem('authToken') ? true : false;
  };

  const handleViewDetails = (productId) => {
    if (!isLoggedIn()) {
      navigate('/login');
    } else {
      navigate(`/product/${productId}`);
    }
  };

  const handleAddToCart = (productId) => {
    // Implement add to cart functionality
    // This could involve dispatching a Redux action with the product ID
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <Box>
      {products.map((product) => (
        <Box key={product.id} p="5" boxShadow="md" borderWidth="1px" mb="4">
          <Image src={product.image} alt={product.title} boxSize="200px" objectFit="cover" />
          <Text mb="2">{product.title}</Text>
          <Button colorScheme="blue" mr="4" onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>
          <Button onClick={() => handleViewDetails(product.id)}>View Details</Button>
        </Box>
      ))}
    </Box>
  );
};

export default Women;
