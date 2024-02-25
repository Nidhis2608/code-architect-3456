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
import Womens from '../Pages/Women';
import SingleWomens from '../Pages/SingleWomen';
import Kids from '../Pages/Kids';
import Men from '../Pages/Men';
import Homepage from '../Pages/Homepage';
import  SingleKids  from '../Pages/SingleKids';
import PrivateRouting from './PrivateRouting';
import Loginsignup from '../Pages/signup';
import Login from '../Pages/Login';
import AboutUs from '../Pages/AboutUs';
import SingleMens from '../Pages/Menscard';  

  import CartPage from '../Pages/Cartpage';
const Allroutes = () => {




  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/Women" element={<Womens />} />
      <Route path="/singleWomens/:id" element={<PrivateRouting><SingleWomens /></PrivateRouting>} />
      <Route path="/singleKids/:id" element={<PrivateRouting><SingleKids /></PrivateRouting>} />

      <Route path="/singleMens/:id" element={<PrivateRouting><SingleMens /></PrivateRouting>} />

      <Route path="/Kids" element={<Kids />} />
      <Route path="/Men" element={<Men />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/about" element={<AboutUs />}/>
      <Route path="/signup" element={<Loginsignup />} />
      <Route path="/login" element={<Login />} />

    </Routes>

  );
};

export default Allroutes;
