// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Homepage from '../Pages/Homepage';
// import Loginsignup from '../Pages/signup';
// import Login from '../Pages/Login';
// const Allroutes = () => {



//     return (
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/signup" element={<Loginsignup />} />
//       <Route path="/login" element={<Login />} />
//       </Routes>
//   );
// };

// export default Allroutes;


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Women from '../Pages/Women';
import Kids from '../Pages/Kids';
import Men from '../Pages/Men';
import AboutUs from '../Pages/AboutUs';
import Homepage from '../Pages/Homepage';
import  SingleKids  from '../Pages/SingleKids';
import PrivateRouting from './PrivateRouting';
import Loginsignup from '../Pages/signup';
import Login from '../Pages/Login';
const Allroutes = () => {



  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/booking" element={<Bookingpage />} /> */}
      <Route path="/Women" element={<Women />} />
      <Route path="/singleKids/:id" element={<PrivateRouting><SingleKids /></PrivateRouting>} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/Men" element={<Men />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/aboutus" element={<AboutUs />}/>
      <Route path="/signup" element={<Loginsignup />} />
//       <Route path="/login" element={<Login />} />

    </Routes>
  );
};

export default Allroutes;