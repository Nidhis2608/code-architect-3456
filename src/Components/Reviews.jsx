
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
        "date": "2024-02-23"
      },
      {
        "id": 2,
        "username": "TrendyShopper",
        "rating": 4,
        "title": "Stylish Jeans",
        "comment": "These jeans are so stylish and comfortable. The only reason I gave it 4 stars is because the sizing is a bit larger than expected. Make sure to check the size chart before ordering.",
        "date": "2024-02-22"
      },
      {
        "id": 3,
        "username": "CasualChic",
        "rating": 3,
        "title": "Average T-Shirt",
        "comment": "The T-shirt is okay, but the fabric feels a bit thin. It's good for casual wear, but I expected better quality for the price.",
        "date": "2024-02-21"
      },
      {
        "id": 4,
        "username": "Fashionista123",
        "rating": 5,
        "title": "Fantastic Customer Service!",
        "comment": "Had an issue with my order, but the customer service was amazing! They resolved it quickly, and I'm impressed with their professionalism. The clothes are great too!",
        "date": "2024-02-20"
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
              <Avatar name={review.name} src={review.face} />
              <Heading size="sm">{review.name}</Heading>
              <Text>{review.country}</Text>
              <Box>  
              {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} color="yellow.500" />
                  ))}
</Box>

            </Box>
          </CardHeader>
          <CardBody>
            <Text>{review.review}</Text>
          </CardBody>
          <Image
            objectFit="cover"
            src={review.imageUrl}
            alt="Chakra UI"
            height="150px"
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
