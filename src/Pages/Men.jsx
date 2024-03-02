



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { fetchDestinationData2 } from '../Redux/action';
import SingleMen from './Menscard';
import { Box, Button, Select, HStack, Center } from '@chakra-ui/react';

const Men = () => {
  const dispatch = useDispatch();
  const { isloading, iserror, destination } = useSelector((state) => state);
  const [filteredTours, setFilteredTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [sortOrder, setSortOrder] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [filterByText, setFilterByText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const location = useLocation();
  const searchInput = new URLSearchParams(location.search).get('country');

  useEffect(() => {
    dispatch(fetchDestinationData2());
  }, [dispatch]);

  useEffect(() => {
    setFilteredTours(destination);
  }, [destination]);

  useEffect(() => {
    let sortedTours = [...destination];

    if (sortOrder === 'asc' || sortOrder === 'desc') {
      sortedTours = sortedTours.sort((a, b) => {
        const costA = parseInt(a.price);
        const costB = parseInt(b.price);
        return sortOrder === 'asc' ? costA - costB : costB - costA;
      });
    }

    if (selectedCountry) {
      const filteredByCountry = sortedTours.filter((tour) => {
        const countryValue = tour.country.toLowerCase();
        return countryValue.includes(selectedCountry.toLowerCase());
      });
      sortedTours = filteredByCountry;
    }

    if (selectedCategory) {
      const filteredByCategory = sortedTours.filter((tour) => {
        const categoryValue = tour.category.toLowerCase();
        return categoryValue.includes(selectedCategory.toLowerCase());
      });
      sortedTours = filteredByCategory;
    }

    if (searchInput) {
      const filtered = destination.filter((tour) =>
        tour.country.toLowerCase().includes(searchInput.toLowerCase()) ||
        tour.country && tour.country.toLowerCase().includes(searchInput.toLowerCase())
      );
      sortedTours = filtered;
    }

    if (filterByText) {
      const filteredByText = destination.filter((tour) =>
        tour["title"] &&
        tour["title"].toLowerCase().includes(filterByText.toLowerCase())
      );
      sortedTours = filteredByText;
    }

    setFilteredTours(sortedTours);
  }, [destination, sortOrder, selectedCountry, selectedCategory, searchInput, filterByText]);

  const getUniqueCategories = () => {
    const uniqueCategories = [...new Set(destination.map((tour) => tour["category"]))];
    return uniqueCategories;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTours.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <Box>
      <Box>
        {isloading ? (
          <p>Loading...</p>
        ) : iserror ? (
          <p>Error loading destination data.</p>
        ) : (
          <Box>
            <Center>
              <HStack spacing={4} mt={13}>
                <Select
                  border="1px solid teal"
                  placeholder="Sort by cost"
                  onChange={(e) => setSortOrder(e.target.value)}
                  value={sortOrder}
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </Select>


                <Select
                  border="1px solid teal"
                  placeholder="Filter by category"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  value={selectedCategory}
                >
                  <option value="">All Categories</option>
                  {getUniqueCategories().map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </HStack>
            </Center>

            <Box data-cy="tour-list" className="tour-list" mt="10" style={{ marginLeft: '90px' }}>
              <Box
                gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
                style={{ display: 'grid', gap: '16px', justifyContent: 'center' }}
              >
                {currentItems.map((item) => (
                  <SingleMen key={item.id} tour={item} />
                ))}
              </Box>

              <Center mt={4}>
                <HStack spacing={4} mt={3} mb={3} ml={-20}>
                  <Button onClick={prevPage} disabled={currentPage === 1} border="1px solid teal" colorScheme="teal">
                    Previous
                  </Button>
                  <Button
                    onClick={nextPage}
                    disabled={indexOfLastItem >= filteredTours.length}
                    border="1px solid teal"
                    colorScheme="teal"
                  >
                    Next
                  </Button>
                </HStack>
              </Center>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Men;
