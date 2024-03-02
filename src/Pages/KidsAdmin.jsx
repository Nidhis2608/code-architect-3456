import React, { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image ,
    Button,
  } from '@chakra-ui/react'
import axios from 'axios';

//    export async function DeleteUser(id){
//     try {
//         let res= await axios.delete(`https://moke-api-server.onrender.com/Mens/${id}`);
//         console.log(res.data)
//         console.log(id)
//     } catch (error) {
//         console.log(error)
//     }
// }

const KidsAdmin = ({props,setState,state}) => {
  // const [state,setState]=useState(true);
  async function DeleteUser(id){
    try {
        let res= await axios.delete(`https://moke-api-server.onrender.com/Kids/${id}`);
        console.log(res.data);
        setState(!state)
        console.log(id)
    } catch (error) {
        console.log(error)
    }
}
  return (

    <TableContainer p={'10'}>
    <Table variant='striped' >
      <TableCaption>Kid's Available</TableCaption>
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Title</Th>
          <Th>Price</Th>
          <Th>Category</Th>
          <Th>Rating</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {/* {
    "image": "https://rukminim2.flixcart.com/image/850/1000/jmccb680/sweater/g/q/m/10-11-years-ujsw5232-us-polo-kids-original-imaf995dw8sczyfr.jpeg?q=90&crop=false",
    "title": "V-Neck Sweater",
    "price": "$59.99"
  }, */}
       { props.map(item=>{
        return (
          <Tr key={item.id} >
          <Td >
           <Image src={item.image} style={{width:"50px"}}/>
          </Td>
          <Td>{item.title}</Td>
          <Td>{item.price}</Td>
          <Td>{item.category}</Td>
          <Td>{item.rating}</Td>
          <Td><Button colorScheme='red' 
          onClick={()=>{DeleteUser(item.id)}} 
          >Delete</Button></Td>
        </Tr>
       
        )
       })}
       
      </Tbody>
      
    </Table>
  </TableContainer>

  )
}

export default KidsAdmin