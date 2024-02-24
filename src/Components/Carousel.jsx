import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Text, Flex } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const carouselData = [
    {
      image: 'https://www.realsimple.com/thmb/vDQYdFGqp9s_Gvr4wyCdFh0O8Ag=/4000x2667/filters:no_upscale()/how-to-clean-microfiber-cloth-GettyImages-1314720631-dfb583e54f9e40dea2fea26b6dfaf26f.jpg',
      title: 'Woolen clothes',
      description: `
      Keep yourself warm and stylish with our cozy collection of woolen clothes. 
      Embrace the softness and comfort of high-quality fabrics that are perfect for chilly days. 
      From snug sweaters to chic scarves, our woolen clothes combine warmth with style, making every cold day a fashionable adventure.
      Whether it's a classic sweater or a trendy scarf, our woolen collection ensures you stay fashionable while beating the cold.
      `,
    },
    {
      image: 'https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Jeans',
      description: `
      Dive into casual elegance with our versatile jeans collection. 
      From classic blue denim to trendy cuts, our jeans are designed for comfort and style. 
      Experience the perfect fit and durability that makes our jeans a wardrobe essential for every fashion enthusiast.
      `,
    },
    {
      image: 'https://m.media-amazon.com/images/I/718J1laiICL._AC_UY1100_.jpg',
      title: 'Frocks',
      description: `
      Elevate your look with our charming frocks collection. 
      Whether it's a playful floral pattern or a sophisticated design, our frocks are perfect for any occasion. 
      Experience the joy of twirling in our carefully curated selection that combines style and grace.
    `,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2c__fmEl1K-qJpPX9aKSAwzsYI3KWt0dm5g&usqp=CAU',
      title: 'Dresses',
      description: `
      Make a statement with our elegant dreeses collection. 
      Make a lasting statement with our elegant dresses collection. Crafted for formal occasions or chic events, 
      our dresses are designed to perfection. Explore timeless designs and impeccable tailoring that exude confidence and sophistication.
      `,
    },
    {
      image: 'https://5.imimg.com/data5/XS/DT/MY-3747740/mens-shirts.jpg',
      title: 'Shirts',
      description: `
      Immerse yourself in the world of effortless style with our meticulously curated shirts collection. 
      Crafted for the modern individual, these shirts redefine casual elegance, offering a perfect 
      balance of sophistication and comfort. Whether you're enjoying a relaxed weekend getaway or navigating through a 
      laid-back office day, our diverse range of patterns and fabrics ensures you make a lasting impression. Elevate every occasion with the
       versatility and timeless appeal of our shirt collection, where fashion meets functionality.
      `,
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    const nextIndex = (currIndex + 1) % carouselData.length;
    setCurrIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currIndex, nextSlide]);

  return (
    <Box p={8} 
    // backgroundImage={'https://img.freepik.com/free-vector/watercolor-mint-background_23-2150241023.jpg'} 
     backgroundImage={'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://img.freepik.com/free-vector/watercolor-mint-background_23-2150241023.jpg")'} 
    borderRadius="lg" boxShadow="xl" textAlign="center" >
      <Text fontWeight="bold" mb={10} color="teal.500" fontFamily="cursive" fontSize="50px" > 
        Explore Our Designs
      </Text>
      <Carousel
        selectedItem={currIndex}
        onChange={index => setCurrIndex(index)}
        style={{ width: "80%", margin: "0 auto", marginTop: "2rem" , height:"10px"}}
      >
        {carouselData.map((data, index) => (
          <Flex key={index} direction={['column', 'row']} alignItems="center" justifyContent="center">
            <Box
              flex="1"
              mr={[0, 4]}
              mb={[4, 0]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={data.image}
                alt={data.title}
                style={{ width: '60%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              />
            </Box>
            <Box flex="1">
              <Box p={4} bg="white" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  {data.title}
                </Text>
                <Text fontSize="md" color="gray.600">
                  {data.description}
                </Text>
              </Box>
            </Box>
          </Flex>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageCarousel;