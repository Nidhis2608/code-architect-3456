import React, { useEffect, useState } from 'react'
import { Box,Heading,Flex } from '@chakra-ui/react'

import  axios  from 'axios';


import { useDispatch, useSelector } from 'react-redux';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Spacer } from '@chakra-ui/react'
// import { fetchDestinationData } from '../Redux/action';
// import Users from '../Components/AdminSide/Users';
import { AdminTable } from '../Admin/AdminTable';
import Users from '../Admin/Users';
import { AddWomens } from '../Admin/AddWomens';
import { AddMeens, AddMens } from '../Admin/AddMens';
import { AddKids } from '../Admin/AddKids';



 const Admin = () => {
        const [data,setData]=useState([]);
        const [users,setUsers]=useState([]);
        const [mens,setMens]=useState([]);

        const dispatch = useDispatch();
        const { isloading, iserror, destination } = useSelector((state) => state);
       
        // useEffect(() => {
        //   dispatch(fetchDestinationData());
        // }, [dispatch]);
        useEffect(() => {
          setMens()
        }, [destination]);
        // console.log("dispatch data ",isloading,destination)
      


   useEffect(()=>{
        async function fetchUsers(){
             try {
                let res= await axios.get("https://moke-api-server.onrender.com/Users");
                // console.log(res.data);
                setUsers(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers();
    },[])

    console.log(users);
  return (
    <Box>
        <Flex bgColor={'whitesmoke'} p={'4'} justifyContent={'space-evenly'}> 
        {/* <SideDrawer/> */}

        <Heading color='teal' >Admin Dashboard</Heading>
        </Flex>
       
       <Spacer/>
       <Spacer/>
<Tabs isFitted variant='soft-rounded' colorScheme='blue' >
  <TabList>
    <Tab>Women's Data</Tab>
    <Tab>Men's Data</Tab>
    <Tab>Kid's Data</Tab>
    <Tab>Users</Tab>
    
  
  </TabList>

  <TabPanels  >
    <TabPanel>
   {/* {data.length<=0?"loading......." : */}
    {/* <AdminTable props={data}/> */}
    <AddWomens props={users}/>
    {/* } */}
    </TabPanel>
    <TabPanel>
        <AddMens props={users} />
    </TabPanel>
    <TabPanel>
        <AddKids props={users} />
    </TabPanel>
    <TabPanel>
        <Users props={users} />
    </TabPanel>
  </TabPanels>
</Tabs>
        

    </Box>
  )
}

export default Admin;