

import {Navbar, Footer,Getintouch,SectionIntro,Whatweuse } from '@/components/smallcomponents';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { EachProject } from './projects';

import {AiOutlineArrowRight} from 'react-icons/ai'
import Link from 'next/link';
import Head from 'next/head';



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

    <>

<Head>

    <title>Apna Page  {new Date().getMonth()} </title>


</Head>



    <div className="bg-primary px-mobilePadding anothermobile:px-anothermobile md:px-tablet   lg:px-desktopPadding text-primary">


{/* NAVBAR */}


<Navbar/>



{/* NAVBAR */}



<div className='pt-10 lg:pt-44'>


<h1 className=' text-[8.3vw] anothermobile:text-[6.2vw] leading-[9.5vw] anothermobile:leading-[7vw] font-medium  word   lg:text-[6.9vw] lg:leading-[7.5vw]   '>TAILORED FURNITURE & INTERIOR DESIGN SERVICES</h1>



<div className='flex mt-8   '>

<div className=' flex flex-col lg:flex-row   '>


<p className='text md:w-[85%]  md:text-lg lg:pl-24 lg:pr-12'>When you need a professional interior design for your home, you want to work with designers who truly understand you.</p>


<div className='   mt-8 lg:mt-2 flex flex-wrap lg:flex-nowrap   gap-y-5 uppercase self-start text-sm gap-x-10 text-[#333]'>


  <Link  className='py-2  px-3 lg:px-0 lg:w-40 lg:justify-center anothermobile:px-5 rounded-3xl flex items-center  bg-white'  href='/contactus'>Get in touch <span className='ml-1 md:ml-2 text-xs'><AiOutlineArrowRight/></span></Link>



  <Link  className='py-2  px-3 lg:px-0 lg:w-40 lg:justify-center anothermobile:px-5 rounded-3xl border flex items-center text-primary'  href='/about'>services <span className='ml-1 md:ml-2 text-xs'><AiOutlineArrowRight/></span> </Link>




</div>


</div>


</div>


<div className='mt-12 w-full h-[450px] lg:h-[600px] rounded-lg  bg-orange-500'></div>




</div>



{/* SECTION START */}

<div className=' pt-20 '>


<SectionIntro  number={1} text={"What we do  &  About us"} />


<p className='font-semibold text-[1.4rem] anothermobile:text-[2rem] anothermobile:leading-[2.5rem]   md:text-[2.6rem] md:leading-[3.2rem] lg:text-[3.8rem] lg:leading-[4.3rem]    mt-6 mb-12 '>
{/* AT NEXT CONCEPT DESIGN, WE OFFER INTERIOR DESIGN AND TAILORED FURNITURE SERVICES, GUARANTEEING THAT THE FINAL PRODUCT TO EXCEED YOUR EXPECTATIONS. */}


{text}


</p>



<div className='flex flex-col-reverse lg:flex-row gap-x-6 border-t border-b border-secondary py-6'>



<div className='lg:w-1/2  h-[58vw] lg:h-[500px] '>

    <div className='w-full h-full  '>

    <img src='https://uploads-ssl.webflow.com/63cc467bfbf4f5ebbd16107a/63d10ba4e4971439077bda6f_Kitchen%206-p-1080.webp'  className='w-full max-w-full h-full object-cover rounded-lg' />

    </div>

  
</div>



<div className='w-0.5  bg-fourth'></div>


<div className='lg:w-1/2 text-primary flex flex-col justify-between'>

<h2 className='uppercase text-xl lg:text-2xl font-medium '>
WE ARE PROUD OF OUR TEAM OF DESIGNERS, PLANNERS AND CRAFTSMEN, CAPABLE OF REALISING ANY PROJECT, REGARDLESS OF COMPLEXITY.

</h2>

<div className='text-[1.05rem] lg:text-[1.15rem] font-light flex flex-col '> 

<p className='mt-8 mb-8 lg:mt-0'>We are dedicated to offering quality, durable and aesthetically pleasing products, at an optimal quality-price ratio. We like to work in close collaboration with our clients, to ensure that we understand and respect their needs and ideas, so that we can deliver a final product that exceeds their expectations.
</p>

<p>In addition, through our interior design services, we ensure that the furniture and the general design complement each other harmoniously, creating a pleasant and functional environment.
</p>



</div>






<div className='flex gap-x-10 text-xs anothermobile:text-sm py-8 '>


<Link href='/aboutus' className='bg-secondary flex items-center uppercase  px-6 py-3 anothermobile:py-2.5 text-[#333333] rounded-full' >
  Read More <span className='ml-1 text-xs'><AiOutlineArrowRight/></span>
</Link>

<Link href='/projects' className='border-[#555] border text-primary flex items-center uppercase  px-6 py-3 anothermobile:py-2.5  rounded-full' >
  Projects <span className='ml-1 text-xs'><AiOutlineArrowRight/></span>
</Link>


</div>




</div>





</div>







</div>
{/* SECTION ENDDD*/}



{/* SECTION START */}



<div className='pt-12'>



<SectionIntro  number={2} text="Projects" includeSecond={true} secondSectHeading="OUR LATEST WORKS
" secondSectText="Each project is custom tailored, based on each client needs. We are ready to take on any kind of projects, be that small or complex." />





<div className='mt-10 '>


{[1,2].map(()=>{
  return <div className='md:flex '>

{[1,2].map((elem,index)=>{
  return   <div className={`md:w-1/2 pt-7 border-t 


  ${index==0&&'relative md:pr-6 '} ${index==1&&'md:pl-6'}
  
  
  
  
  border-secondary pb-12 `}>
    
    {index==0&&(
    <div className=" hidden md:block absolute w-[0.5px]  top-0 right-0 h-[90%]  bg-fourth" style={{top:'50%',transform:'translateY(-50%)'}}></div>
 )}

<Link href="/projects/sampleproject">
    
    <EachProject
  
  
  
  special={true}  nomargin={true} />    
  
  </Link>
  
  
  </div>





})}

  
  
  

  </div>


})}


<div className='flex justify-center text-sm  border-secondary border-t pt-10'>
<Link href="/projects"  className=' uppercase flex items-center px-5 text-black py-2 rounded-3xl bg-white' >View All Projects <span className='ml-1 text-xs'><AiOutlineArrowRight/></span> </Link>
</div>




</div>






</div>






{/* SECTION ENDDD*/}




{/* SECTIONN STARTTTT */}

<div className='mt-6 py-4'>

<Whatweuse/>

</div>


{/* SECTIONNN ENDDDD */}





{/* SECTIONNN STARTTTT */}


<div>

<Getintouch number={4}/>


</div>





{/* SECTIONNN ENDDDD */}



{/* SECTIONNN STARTTT */}

<div >


<Footer/>


</div>






{/* SECTIONNN ENDDDD */}




</div>



</>



  )
}
