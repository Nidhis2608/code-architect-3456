import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    Input,
    FormLabel,
    Flex,
    Textarea ,
    useToast,
    Toast,
  } from '@chakra-ui/react'
import axios from 'axios';

export const AddMens=({props})=>{
    const {isOpen , onOpen , onClose}=useDisclosure();

    const initialRef=React.useRef(null);
    const finalRef=React.useRef(null);
    const [price,setPrice]=useState(0);
    const [image,setImage]=useState("");
    const [description,setDescription]=useState("");
    const [name,setName]=useState("");

    console.log(price,image,description,name);

    const handleSubmit=()=>{
        async function postData(cred){
            try{
              let res= await axios.post("https://moke-api-server.onrender.com/Mens");
              console.log(res.data);
            }
            catch(error){
                console.error(error);
            }
        }
        AddMens({image,price,description,name})
        console.log("data posted successfully");

        Toast({
            title:"Data Added",
            description:"We've added new data",
            status:'success',
            duration:5000,
            isClosable:true,
            position:'top-center',
        })
        onClose()
    }
    return(
        <>
        <Flex direction={'column'}>
            <Button colorScheme='green' onClick={onOpen}>Add Men's Data</Button>
        </Flex>
        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Add Men's Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} placeholder='Name' onChange={(e) => setName(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
               <FormLabel>Price</FormLabel>
               <Input placeholder='Price' onChange={(e) => setPrice(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input placeholder='Image' 
              onChange={(e)=>setImage(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea  
              placeholder='Description about the Location' 
              onChange={(e)=>setDescription(e.target.value)}/>
            </FormControl>
            </ModalBody>
            <ModalFooter>
            <Button colorScheme='blue' mr={3}
            onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    )
}