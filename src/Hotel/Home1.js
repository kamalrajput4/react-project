import React from 'react';
import Head from './Head';
import Para from './Para';
import Pre from './Pre';
import Customer from './Customer';
import Cus from './Cus';
import Footer from './Footer';
import Front from './Front';


const Home1 = () => {
  return (
    <div >
      <img
        src="/images/pool2.jpg"
        alt="Description of image"
        className="w-full h-full mt-0 mb-0 ml-0 object-cover"
      />

       <div className="absolute inset-0 flex items-center justify-center  " style={{marginLeft:'600px',fontSize:'22px'}} >
        <Front></Front>
      </div>

      <div className="absolute inset-0 flex items-center justify-center  mb-80">
        <Head></Head>
      </div>

      <div className="absolute inset-0 flex items-center justify-center  mb-50">
        <Para></Para>
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white" style={{marginBottom:'-300px',marginRight:'500px' ,fontSize:'20px'}}>
        <Pre></Pre>
      </div>


       <div className="absolute inset-0 flex items-center justify-center text-white" style={{marginTop:'300px',marginLeft:'800px' ,fontSize:'50px'}}>
        <Customer></Customer>
      </div>


       <div className="absolute inset-0 flex items-center justify-center text-white" style={{marginTop:'400px',marginLeft:'800px' ,fontSize:'24px'}}>
        <Cus></Cus>
      </div>


     <div className="absolute inset-0 flex items-center justify-center text-white" style={{marginTop:'900px',marginLeft:'0px' ,fontSize:'24px' , background:'black'}}>
        <Footer></Footer>
      </div>
       
    </div>
  )
}
export default Home1;
