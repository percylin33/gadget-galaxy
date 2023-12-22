"use cliend"
import React from 'react';
import Image from 'next/image';
import loadi from "@/access/ZNeT.gif"

const Loading = () => {
    
  return (
    <div
        className="toast"
        style={{
         display: "flex" ,
         position: "fixed",
         top: "50%",
         left: "55%",
         transform: "translate(-50%, -50%)",
         borderRadius: "5px",
         padding: "20px",
         
        color: "#000",
        zIndex: 1000,
      }}
    >
      <Image src={loadi} alt='loading'  className='w-24 h-24'/>
    </div>
  );
};

export default  Loading;