import React, { useEffect, useState } from 'react'
import { Box,Heading,Flex } from '@chakra-ui/react'
import  axios  from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Spacer } from '@chakra-ui/react'
// import { fetchDestinationData } from '../Redux/action';
// import Users from '../Components/AdminSide/Users';
// import { AdminTable } from '../Admin/AdminTable';
import Users from '../Admin/Users';
// import Women from './Women';
// import Men from './Men';
// import Kids from './Kids';
import { AddMens } from '../Admin/AddMens';
import { AddWomens } from '../Admin/AddWomens';
import { AddKids } from '../Admin/AddKids';
import WomenAdmin from './WomensAdmin';
import MenAdmin from './MensAdmin';
import KidsAdmin from './KidsAdmin';
// import { AddMens } from '../Admin/AddMens';
// import { AddKids } from '../Admin/AddKids';
// import { AddWomens } from '../Admin/AddWomens';




 const Admin = () => {
        const [data,setData]=useState([]);
        const [users,setUsers]=useState([]);
        const [mens,setMens]=useState([]);
        const [womens,setWomens]=useState([]);
        const [kids,setKids]=useState([]);
        const [state,setState]=useState(true);

        console.log(mens);
        console.log(womens);
        console.log(kids);
        

        const dispatch = useDispatch();
        const { isloading, iserror, destination } = useSelector((state) => state);
       
        // useEffect(() => {
        //   dispatch(fetchDestinationData());
        // }, [dispatch]);
        const menUrl="https://moke-api-server.onrender.com/Mens";
        const womenUrl="https://moke-api-server.onrender.com/Womens";
        const kidsUrl="https://moke-api-server.onrender.com/Kids";
        const usersUrl="https://moke-api-server.onrender.com/Users";


        // async function getData({setData,url}){
        //     try{
        //         let res= await axios.get(url);
        //         console.log(res.data);
        //         console.log("Res:",res);
        //         console.log("data:",data);
        //         setData(res.data);
        //       } catch(error){
        //           console.log(error);
        //       }
        // }
        // useEffect(() => {
        //     getData(setWomens,menUrl);
        //     getData(setMens,womenUrl);
        //     getData(setKids,kidsUrl);
        //    getData(setData,usersUrl);
        // }, []);
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
    },[state])
    
   useEffect(()=>{
    async function fetchKids(){
         try {
            let res= await axios.get("https://moke-api-server.onrender.com/Kids");
            // console.log(res.data);
            setKids(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    fetchKids();
},[])

useEffect(()=>{
    async function fetchWomens(){
         try {
            let res= await axios.get("https://moke-api-server.onrender.com/Womens");
            // console.log(res.data);
            setWomens(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    fetchWomens();
},[])

useEffect(()=>{
    async function fetchMens(){
         try {
            let res= await axios.get("https://moke-api-server.onrender.com/Mens");
            // console.log(res.data);
            setMens(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    fetchMens();
},[])

    console.log(users);
  return (
    <Box>
        <Flex bgColor={'whitesmoke'} p={'4'} justifyContent={'space-evenly'}> 
        {/* <SideDrawer/> */}

        <Heading color='teal'>Admin Dashboard</Heading>
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
    <WomenAdmin props={womens} setState={setState} state={state}/>
    <AddWomens />
    {/* } */}
    </TabPanel>
    <TabPanel>
        <MenAdmin props={mens} setState={setState} state={state}/>
        <AddMens />
    </TabPanel>
    <TabPanel>
        <KidsAdmin props={kids} setState={setState} state={state}/>
        <AddKids />
    </TabPanel>
    <TabPanel>
        <Users props={users} setState={setState} state={state}/>
    </TabPanel>
  </TabPanels>
  
</Tabs>
{/* <AddWomens />
<AddMens /> */}
        

    </Box>
  )
}

export default Admin;