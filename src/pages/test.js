import { useEffect } from "react";


import Head from "next/head";
import { TfiRulerAlt } from "react-icons/tfi";


const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");





export default function Test() {


  useEffect(()=>{

      gsap.registerPlugin(ScrollTrigger);

      console.log(gsap);

      gsap.to(".square",{
        x:500,
        duration:2,

        scrollTrigger : {
          trigger:".square",
          start:400,
          markers:true
        }


      })
      
    
    


  },[])


  return (
    
<>

<Head>

<title>GSAP PAGE</title>

</Head>



<div className="h-screen bg-pink-500 "></div>


<div className="h-screen bg-lime-500 relative">

<div className="absolute h-[400px] bg-red-500 w-40"></div>

  <div className="square w-[150px] h-[150px] bg-fuchsia-500"></div>
</div>











    {/* <div>

<h1 className="header-section">Scroll to construct a shoe</h1>

<section className="shoe">
  <img src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da29b46cb1403688b139_outsole.png" className="outsole piece" alt="outsole" />
  <img src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84d9ecb32e46bc5f1f8a8a_component.png?" className="heel piece" alt="heel" />
  <img src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da293b7f75e5a42bcacd_midsole.png?" className="midsole piece" alt="midsole" />
</section>

<h1 className="header-section">Cool, right?</h1>




<header>
   <a href="https://greensock.com/scrolltrigger">
     <img className="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
  </a> 
</header>


    </div> */}
    
    </>

  );
}
