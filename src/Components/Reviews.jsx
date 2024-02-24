
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Avatar,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { StarIcon} from '@chakra-ui/icons'






const Reviews = () => {
  // Dummy data for reviews
  const reviewsData = [
    {
        "id": 1,
        "username": "FashionFanatic23",
        "rating": 5,
        "title": "Amazing Dress!",
        "comment": "I bought this dress last week, and I absolutely love it! The quality is excellent, and it fits perfectly. Can't wait to wear it to the upcoming party.",
        "date": "2024-02-23",
        "imageUrl":"https://images.meesho.com/images/products/71211818/jzyor_512.webp",
      },
      {
        "id": 2,
        "username": "TrendyShopper",
        "rating": 4,
        "title": "Stylish Jeans",
        "comment": "These jeans are so stylish and comfortable. The only reason I gave it 4 stars is because the sizing is a bit larger than expected. Make sure to check the size chart before ordering.",
        "date": "2024-02-22",
        "imageUrl":"https://sslimages.shoppersstop.com/sys-master/images/hd4/had/16355510550558/S21HIGHDFPBC636_BLACK_alt1.jpg_1000Wx1500H",
      },
      {
        "id": 3,
        "username": "CasualChic",
        "rating": 3,
        "title": "Average T-Shirt",
        "comment": "The T-shirt is okay, but the fabric feels a bit thin. It's good for casual wear, but I expected better quality for the price.",
        "date": "2024-02-21",
        "imageUrl":"https://assets.ajio.com/medias/sys_master/root/20230720/C9J8/64b92159a9b42d15c9643ba0/-473Wx593H-410372565-8ek-MODEL5.jpg",
      },
      {
        "id": 4,
        "username": "Fashionista123",
        "rating": 5,
        "title": "Fantastic Customer Service!",
        "comment": "Had an issue with my order, but the customer service was amazing! They resolved it quickly, and I'm impressed with their professionalism. The clothes are great too!",
        "date": "2024-02-20",
        "imageUrl":"https://www.soch.com/media/catalog/product/c/w/cwa2ku0081d_01.jpg",
      },
      {
        "id": 5,
        "username": "ChicExplorer",
        "rating": 4,
        "title": "Elegant Blouse",
        "comment": "I adore this blouse! It's so elegant and versatile. The fabric feels luxurious, and it's perfect for both casual and formal occasions.",
        "date": "2024-02-19",
        "imageUrl":"https://www.soch.com/media/catalog/product/b/l/blslbge00170b_01.jpg",
      },
      {
        "id": 6,
        "username": "KidFashionista",
        "rating": 5,
        "title": "Adorable Dinosaur Pajamas",
        "comment": "My child absolutely loves these dinosaur pajamas! The design is adorable, and the fabric is soft. Bedtime has become a fun adventure with these cute PJs. Highly recommended for little ones!",
        "date": "2024-02-17",
        "imageUrl":"https://images.meesho.com/images/products/286010672/dsrdh_512.webp",
      }
  ];
  
  

  return (
    <Box mx="auto" maxW="1200px" mb="5" px="4">
     <Text fontWeight="bold" mb={4} color="teal.500" fontFamily="cursive" fontSize="50px" p={"50px"}> 
        Testimonials
        </Text>
    <SimpleGrid gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}
                style={{ display: 'grid'  , gap: '16px', justifyContent: 'center' }}>
      {reviewsData.map((review, index) => (
        <Card
          key={index}
          // maxW="sm"
          width="350px"
          // height="300px"
          borderRadius="20px" 
          // columnGap={"-5px"}
          // w={"300px"}
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.4)"
          mx="auto" // Center the card
          // maxH="sm"
        >
          <CardHeader maxH="120px">
            <Box>
              <Avatar name={review.username} src={review.username} />
              <Heading size="sm">{review.username}</Heading>
              <Text>{review.date}</Text>
              <Box>  
              {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} color="yellow.500" />
                  ))}
</Box>

            </Box>
          </CardHeader>
          <CardBody>
            <Text>{review.comment}</Text>
          </CardBody>
          <Image
            objectFit="cover"
            src={review.imageUrl}
            alt="Chakra UI"
            height="300px"
            borderRadius={"20px"}
            p={2}
          />
          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          ></CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  </Box>
);
};

export default Reviews;
