

import {Navbar, Footer,Getintouch,SectionIntro,Whatweuse } from '@/components/smallcomponents';

import anime from 'animejs';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image'
import { useEffect, useRef } from 'react'



export default function Home() {


useEffect(()=>{


//   var words = [

//     "TAILORED FURNITURE & INTERIOR DESIGN SERVICES"
//   ],
//   part,
//   i = 0,
//   offset = 0,
//   len = words.length,
//   forwards = true,
//   skip_count = 0,
//   skip_delay = 15,
//   speed = 70;

// const intervalFunc =   setInterval(function () {
//     if (forwards) {
//       if (offset >= words[i].length) {
//         ++skip_count;
//         if (skip_count == skip_delay) {
//           forwards = false;
//           skip_count = 0;
//         }
//       }
//     } else {
//       if (offset == 0) {
//         forwards = true;
//         i++;
//         offset = 0;
//         if (i >= len) {
//           i = 0;
//         }
//       }
//     }
//     part = words[i].substr(0, offset);
//     if (skip_count == 0) {
//       if (forwards) {
//         offset++;
//       } 
//       // else {
//       //   offset--;
//       // }
//     }
    
//     document.querySelector(".word").innerText = part;
//   }, speed);

  







  // return () => {
  //   clearInterval(intervalFunc);
  // };




},[])



useEffect(()=>{

  const common = {
    easing: 'easeInOutQuad',

  } 

  anime({
    targets: '.borderWidth',
    width: '100%', // -> from '28px' to '100%',
    ...common
  });

  anime({
    targets: '.borderHeight',
    height: '100%', // -> from '28px' to '100%',
    ...common
  });


},[])



const text = "AT NEXT CONCEPT DESIGN, WE OFFER INTERIOR DESIGN AND TAILORED FURNITURE SERVICES, GUARANTEEING THAT THE FINAL PRODUCT TO EXCEED YOUR EXPECTATIONS. "

// const transformingText = text.split(" ");

// console.log(transformingText);

// const mapped = transformingText.map(eachWord=>{

//   const splitEachWord = eachWord.split("")

//     return <span className='word mr-4' style={{display:'inline-block'}}>
//         {splitEachWord.map(eachChar=>{
//             return <span className='char opacity-30' style={{display:'inline-block'}}>{eachChar}</span>
//         })}
//     </span>

// })



// useMotionValueEvent(scrollY, "change", (latest) => {
//   console.log("Page scroll: ", latest)

//  console.log( document.querySelectorAll('.char'));


// })




  return (

    
<div className='bg-primary px-desktopPadding text-white'>


{/* NAVBAR */}


<Navbar/>



{/* NAVBAR */}



<div className='pt-48'>


<h1 className=' text-[6.2rem] leading-[7rem] font-medium  word'>TAILORED FURNITURE & INTERIOR DESIGN SERVICES</h1>



<div className='flex mt-12 mb-16'>

<div className='ml-auto flex  justify-end'>

<p className='w-1/2 text-lg'>When you need a professional interior design for your home, you want to work with designers who truly understand you.</p>


<div className='flex uppercase self-start text-sm gap-x-10'>
  <a  className='py-1.5 px-5 rounded-3xl bg-white'  href='#!'>Get in touch <span>arr</span></a>
  <a  className='py-1.5 px-5 rounded-3xl border '  href='#!'>services <span>arr</span> </a>
</div>


</div>


</div>


<div className='w-full h-[600px] bg-orange-500'></div>




</div>



{/* SECTION START */}

<div className=' pt-40 '>


<SectionIntro  number={1} text={"What we do  &  About us"} />


<p className='font-medium text-[4.2rem] mt-6 mb-12 leading-[4.7rem]'>
{/* AT NEXT CONCEPT DESIGN, WE OFFER INTERIOR DESIGN AND TAILORED FURNITURE SERVICES, GUARANTEEING THAT THE FINAL PRODUCT TO EXCEED YOUR EXPECTATIONS. */}


{text}


</p>



<div className='flex gap-x-6 border-t border-b py-6'>



<div className='w-1/2  h-[500px] '>

    <div className='w-full h-full bg-purple-500 rounded-2xl'>

    <img src='https://uploads-ssl.webflow.com/63cc467bfbf4f5ebbd16107a/63d10ba4e4971439077bda6f_Kitchen%206-p-1080.webp'  className='w-full max-w-full h-full object-cover' />

    </div>

  
</div>



<div className='w-0.5  bg-third'></div>


<div className='w-1/2 text-primary pr-24 flex flex-col justify-between'>

<h2 className='uppercase text-2xl font-medium '>
WE ARE PROUD OF OUR TEAM OF DESIGNERS, PLANNERS AND CRAFTSMEN, CAPABLE OF REALISING ANY PROJECT, REGARDLESS OF COMPLEXITY.

</h2>

<div className='text-[1.05rem] font-light flex flex-col gap-y-6'> 

<p>We are dedicated to offering quality, durable and aesthetically pleasing products, at an optimal quality-price ratio. We like to work in close collaboration with our clients, to ensure that we understand and respect their needs and ideas, so that we can deliver a final product that exceeds their expectations.
</p>

<p>In addition, through our interior design services, we ensure that the furniture and the general design complement each other harmoniously, creating a pleasant and functional environment.
</p>



</div>






<div className='flex gap-x-10 text-sm'>

{[1,2].map(()=>{

return <a href='#!' className='bg-white uppercase px-7  py-2 rounded-2xl' >
  Read More <span>arr</span>
</a>

})}



</div>




</div>





</div>







</div>
{/* SECTION ENDDD*/}



{/* SECTION START */}



<div className='pt-28'>



<SectionIntro  number={2} text="Projects" includeSecond={true} secondSectHeading="OUR LATEST WORKS
" secondSectText="Each project is custom tailored, based on each client needs. We are ready to take on any kind of projects, be that small or complex." />





<div className='py-20 '>


{[1,2,3,4].map(()=>{
  return <div className='border-t-orange-500 last:border-b-orange-500 last:border-b border-t  flex flex-wrap'>


{[1,2].map(()=>{
  return   <div className='w-1/2 odd:border-r odd:border-r-yellow-500 odd:pr-6 even:pl-6  my-6'>

        <div className='w-full h-[332px] bg-pink-500 rounded-2xl'></div>

<div className='pl-2'>

<div className='flex pt-8'>

<p className='uppercase text-third'>kitchen design</p>

<p className='ml-auto text-primary'>2023</p>

</div>


<div className='flex text-primary items-center'>

<p className='text-2xl font-medium'>ELEGANT CASHMERE KITCHEN</p>


<a href='#!' className='ml-auto px-6 bg-white  self-start  rounded-3xl'>View</a>


</div>



</div>



  </div>
})}

  
  
  

  </div>


})}


<div className='flex justify-center text-sm mt-10'>
<a href="#!"  className=' uppercase px-5 text-black py-2 rounded-3xl bg-white' >View All Projects <span>arr</span> </a>
</div>




</div>






</div>






{/* SECTION ENDDD*/}




{/* SECTIONN STARTTTT */}

<div className='mt-6'>

<Whatweuse/>

</div>


{/* SECTIONNN ENDDDD */}





{/* SECTIONNN STARTTTT */}


<div>

<Getintouch/>


</div>





{/* SECTIONNN ENDDDD */}



{/* SECTIONNN STARTTT */}

<div className='pb-8'>


<Footer/>


</div>






{/* SECTIONNN ENDDDD */}




</div>



  )
}
