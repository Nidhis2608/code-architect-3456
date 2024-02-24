import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Text, Flex } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const carouselData = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYgoU04pHUUv_ICXGzwDBYSWcS-bNytdi3A&usqp=CAU',
      title: 'Woolen clothes',
      description: `
      
Introducing our cozy and chic Woolen Clothes Collection, where warmth meets style in perfect harmony. 
Embrace the colder days with the luxurious softness and comfort of high-quality fabrics meticulously crafted to keep you both snug and fashionable.
Our collection features an array of winter essentials, from classic sweaters to trendy scarves, designed to elevate your cold-weather wardrobe. 
Immerse yourself in the sumptuous textures and warmth of our woolen clothes, creating a fashion-forward experience for every chilly day.
Indulge in the timeless appeal of our snug sweaters, where classic designs meet contemporary trends. Each piece is a testament to both craftsmanship and style,
 ensuring that you stay cozy without compromising on fashion. Our woolen sweaters provide the perfect
 blend of comfort and elegance, making them a must-have for the winter season.
      `,
    },
    {
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/2/tr:w-270,/32e5d72Urbano_URFS0069_1.jpg?rnd=20200526195200',
      title: 'Jeans',
      description: `
      Dive into casual elegance with our versatile jeans collection. 
      From classic blue denim to trendy cuts, our jeans are designed for comfort and style. 
      Experience the perfect fit and durability that makes our jeans a wardrobe essential for every fashion enthusiast.
      Immerse yourself in the timeless appeal of classic blue denim, a wardrobe staple that effortlessly transitions from day to night. 
      The versatility of our jeans extends beyond the conventional, 
      featuring trendy cuts and designs that cater to the preferences of every fashion enthusiast.
      Designed for those who prioritize both style and ease, our jeans provide the perfect fit that accentuates your 
      silhouette while ensuring unparalleled comfort throughout the day. 
      `,
    },
    {
      image: 'https://m.media-amazon.com/images/I/718J1laiICL._AC_UY1100_.jpg',
      title: 'Frocks',
      description: `
      Indulge in the enchanting world of fashion with our delightful frocks collection, designed to elevate your style and infuse a touch of grace into every moment. 
      Immerse yourself in the allure of our charming frocks, where each piece is a manifestation of timeless elegance and contemporary flair.
      From playful floral patterns that exude a sense of whimsy to sophisticated designs that embody refined glamour, 
      our frocks are the epitome of versatile fashion. Whether you're attending a special event, a casual outing, 
      or simply want to add a touch of flair to your everyday look, our carefully curated selection has the perfect frock for every occasion.
    Experience the joy of movement as you twirl in our thoughtfully crafted frocks, where each design embraces the essence of femininity 
    and celebrates the beauty of individual style. The meticulous attention to detail in the construction ensures a flattering fit, making you feel confident and radiant.

    `,
    },
    {
      image: 'https://imagescdn.planetfashion.in/img/app/product/7/749569-8468750.jpg?auto=format&w=494.40000000000003',
      title: 'Dresses',
      description: `
      Step into the spotlight with our exquisite Dresses Collection, where each piece is a testament to elegance, sophistication, and timeless style. 
      Elevate your fashion quotient and make a lasting statement with our meticulously crafted dresses designed for formal occasions, 
      chic events, or any moment that calls for a touch of glamour.Immerse yourself in a world of unparalleled beauty as you explore our diverse range of dresses, 
      each crafted with precision and attention to detail.From flowing silhouettes that capture the essence of romance to tailored designs that exude confidence,
       our collection is a celebration of femininity and individual style.Our dresses are not just garments; they are expressions of grace and refinement. Experience the transformative power of fashion as you slip into our carefully curated selection, where every stitch is a work of art. Impeccable tailoring ensures a perfect fit, allowing you to move with confidence and poise at any event.
      `,
    },
    {
      image: 'https://5.imimg.com/data5/XS/DT/MY-3747740/mens-shirts.jpg',
      title: 'Shirts',
      description: `
      Discover the epitome of effortless style with our meticulously curated Shirts Collection. 
      Tailored for the modern individual, our shirts redefine casual elegance, striking the perfect balance between sophistication and comfort. 
      Whether you find yourself on a relaxed weekend getaway or navigating through a laid-back office day, our diverse range of patterns and fabrics guarantees a lasting impression.
      Immerse yourself in a world where every shirt is a statement piece, meticulously crafted to enhance your wardrobe with versatility and timeless appeal. 
      From classic button-downs to contemporary designs, our collection caters to a wide range of tastes, ensuring there's a perfect shirt for every occasion.
      Experience the luxury of high-quality fabrics that not only feel good against your skin but also stand the test of time. 
      Our shirts are designed to be more than just clothing; they are a reflection of your personal style and a commitment to impeccable fashion.
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