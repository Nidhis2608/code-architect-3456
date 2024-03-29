import React, { useEffect, useState } from 'react'
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
//         let res= await axios.delete(`https://moke-api-server.onrender.com/Users/${id}`);
//         console.log(res.data)
//         console.log(id)
//     } catch (error) {
//         console.log(error)
//     }
// }

export const Users = ({props,setState,state}) => {
  // const [state,setState]=useState(true);
   async function DeleteUser(id){
    try {
        let res= await axios.delete(`https://moke-api-server.onrender.com/Users/${id}`);
        console.log(res.data);
        setState(!state)
        console.log(id)
    } catch (error) {
        console.log(error)
    }
}
   
  // useEffect(()=>{

  // },[state]);
  return (
    <TableContainer p={'10'}>
    <Table variant='striped' >
      <TableCaption>Users Available</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Password</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
       { props.map(item=>{
        return (
          <Tr key={item.id} >
          <Td >
           {`${item.firstName} ${item.lastName}`}
          </Td>
          <Td>{item.email}</Td>
          <Td>{item.password}</Td>
         
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

export default Users