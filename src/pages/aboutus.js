
import { Footer,Getintouch,Navbar,SectionIntro,Whatweuse } from '@/components/smallcomponents'
import {TfiRulerAlt} from 'react-icons/tfi'

import {FiArrowRight} from 'react-icons/fi'

import {AiOutlineArrowRight} from 'react-icons/ai'
import Link from 'next/link'
import { useState } from 'react'


export default function Aboutus(){

const [valueCheck,setValueCheck] = useState(0)


    return (
        <div className="bg-primary px-mobilePadding anothermobile:px-anothermobile md:px-tablet lg:px-desktopPadding text-primary">

<Navbar/>


<div className="pt-10 lg:pt-44 ">


<div >

<h1 className='text-primary text-[1.7rem] anothermobile:text-[2rem]  anothermobile:leading-9 



md:text-[6vw] md:leading-[6.5vw]

lg:text-[4.5vw] lg:leading-[5.5vw]



lg: leading-8   font-semibold'>
    
    
    
    
    
    
    
    DISCOVER OUR TAILORED FURNITURE AND INTERIOR DESIGN SERVICES</h1>










<div className='lg:flex lg:pt-12'>

<p className='lg:w-1/3 lg:my-0 my-8 text-third md:text-lg font-semibold'>FURNITURE AND DESIGN AGENCY BASED IN ROMANIA OFFERING SERVICES WORLDWIDE</p>

<p className='lg:w-2/3 lg:pl-20 lg:pr-12 text-secondary text-[0.95rem] md:text-[1.1rem] '>Welcome to our interior design page, where we believe that every space has the potential to become a beautiful and functional living or business environment.</p>

</div>


</div>



<div className='mt-8 pt-10 lg:pt-16 border-t border-secondary'>


<div className="w-full  h-[211px] md:h-[400px] lg:h-[480px] rounded-2xl bg-red-500">

        <div className='w-full h-full'>

        <img  src='/tenth.webp' className='w-full h-full max-w-full object-cover rounded-2xl' />

        </div>


</div>



</div>



</div>




{/* ABOUT SECTION STARTTT */}

<div className=' pt-16   '   >

<SectionIntro  number={1} text="About us"  />


<p className='font-medium text-[1.6rem] anothermobile:text-[2.3rem] md:text-[2.9rem] lg:text-[4rem] lg:leading-[4.2rem] anothermobile:leading-[2.5rem] md:leading-[3.2rem]  leading-8 mt-4  '>AT NEXT CONCEPT DESIGN, WE OFFER INTERIOR DESIGN AND TAILORED FURNITURE SERVICES, GUARANTEEING THAT THE FINAL PRODUCT TO EXCEED YOUR EXPECTATIONS.</p>


<div className="flex flex-col gap-y-7 relative pt-32 md:pt-8 md:flex-row md:gap-x-16  lg:gap-x-12 lg:justify-end">


<div className="text-[5.5rem] md:hidden lg:block lg:text-[11rem] anothermobile:text-[6.5rem]  text-[#383838] mt-7 absolute top-0 -left-3 lg:-top-8 lg:-left-8 rotate-[45deg] ">
    <AiOutlineArrowRight   />
</div>


<p className='text-fourth md:w-1/2 lg:w-[40%]  md:text-[1.1rem] lg:text-[1.15rem]'>We offer a wide range of services: tailored furniture, interior design including space planning, furniture selection, colour consultation, lighting design and much more. Whether you need a complete home renovation or a simple room makeover, we have the expertise and creativity to help transform your space into a beautiful and functional environment.</p>


<p className=' text-fourth md:w-1/2 lg:w-[40%]  md:text-[1.1rem] lg:text-[1.15rem]'>Our mission is to transform spaces into places that reflect the personality, lifestyle and preferences of our customers. We approach interior design through a collaborative process, working closely with our clients to understand their vision and create spaces that exceed their expectations.</p>


    
</div>



<div className="flex flex-col md:flex-row  gap-y-6  mt-7 py-6 border-t border-b border-secondary">

{['/twelvth.webp','/eleventh.webp'].map((elem)=>{
    return <div className=" md:w-1/2 md:even:pl-6 md:odd:pr-6 h-[211px] anothermobile:h-[332px] md:h-[210px] lg:h-[332px]  rounded-2xl md:rounded-none md:border-r md:border-secondary">  

<div className='w-full h-full'>

<img  src={elem} className='w-full h-full max-w-full object-cover rounded-2xl md:rounded-md' />

</div>


      </div>
})}




</div>







</div>


{/* ABOUT SECTION ENDDD */}



{/* SERVICES SECTION STARTT */}


<div className='py-16'>


<SectionIntro  number={2} text="Services" includeSecond={true} secondSectHeading="WHAT WE DO
" secondSectText="We invite you to explore our services and contact us to discuss your needs and ideas. We are here to help you make your dream a reality.

" />



<div className="flex flex-col lg:flex-row lg:gap-x-8 mt-12 border border-secondary  rounded-lg">


{/* ${index==0&&'[&:nth-child(1)]:bg-red-500'} */}
{[1,2,3,4].map((elem,index)=>{
    return <div className={`  cursor-pointer  lg:border-r  lg:border-r-secondary lg:h-[330px] lg:w-[80px] px-4 md:px-12 lg:px-0 lg:py-0 overflow-hidden relative`}>

<div className={`absolute lg:hidden    ${index==0&&'first:bg-transparent'}   w-[150%] h-0.5 bg-fourth   left-[-20%] top-0`}></div>



        <div className="flex relative  items-center lg:flex-col  py-4 lg:pb-16 md:py-6 text-primary">
                <p className="text-2xl md:text-3xl  font-bold ">0{elem}</p>
                <p className="lg:mt-32 lg:absolute lg:top-20 lg:-rotate-90 ml-3.5 font-semibold anothermobile:mx-auto text-[0.9rem]     anothermobile:text-[1.2rem] md:text-[1.5rem] lg:text-[1.5rem]  pt-1 lg:pt-0">TAILORED FURNITURE</p>
        </div>


{/* <div className="flex flex-col py-7 relative ">



<div className="absolute w-[150%] h-0.5 bg-orange-500  left-[-20%] top-0"></div>


<div>


    <p>Personalise your home with our furniture! Our experienced team creates unique and functional pieces of furniture that perfectly match your space and style. We use only the best quality materials and pay attention to detail to provide a great end product that will last for many years. Contact us today and turn your home into a personalised and comfortable space!</p>


<a href="#!" className="bg-yellow-500 uppercase text-sm px-5 py-2.5 rounded-3xl">get in touch <span>arr</span></a>



</div>




<div>

    <div className="w-full h-[211px] rounded-2xl bg-blue-500"></div>



</div>



</div> */}





    </div>
})}




</div>






</div>




{/* SERVICES SECTION ENDDD */}





{/* HOW WE DO IT STARTT */}


<div className="flex flex-col md:flex-row md:gap-x-12">



<div className='md:w-1/2 flex flex-col  gap-y-5 '>

<SectionIntro number={3} text="How we do it" includeSecond={true} secondSectHeading="OUR PROCESS"  secondSectText="We start with a detailed understanding of your needs, preferences and budget. We will take the time to listen to your ideas and vision, and work with you to create a design plan that reflects your unique style and personality."  fullwidthparagraph={true} columnOnDesktop={true} />



<Link href="/projects" className="flex items-center gap-x-1 self-start bg-secondary text-slate-950 uppercase text-sm px-6 py-2.5 rounded-3xl">projects <span > <FiArrowRight/></span></Link>



</div>




<div  className="md:w-1/2 flex flex-col gap-y-5 mt-12


bg-green-500





">
    

    <div className="px-5 py-9 flex flex-col gap-y-4 border rounded-lg">


    <div className="text-secondary text-5xl"><TfiRulerAlt/></div>
    
    
    <p className="text-xl anothermobile:text-2xl font-semibold">MEASUREMENTS ON SITE</p>
    
    <p className='md:text-[1.05rem]'>The first stage of any successful project is to collect accurate information about the space. This is a crucial step in the design process as it allows us to understand the characteristics and limitations of the space and create a design that suits your needs and preferences.</p>
    
    </div>

{[1,2,3,4,5].map(()=>{
    return <div  className=" bg-blue-500 px-5 py-9 flex flex-col gap-y-4 border rounded-lg">


    <div className="text-secondary text-5xl"><TfiRulerAlt/></div>
    
    
    <p className="text-xl anothermobile:text-2xl font-semibold">MEASUREMENTS ON SITE</p>
    
    <p className='md:text-[1.05rem]'>The first stage of any successful project is to collect accurate information about the space. This is a crucial step in the design process as it allows us to understand the characteristics and limitations of the space and create a design that suits your needs and preferences.</p>
    
    </div>
})}





</div>



</div>




{/* HOW WE DO IT ENDDDD */}




{/* WHATT WE USEEE STARTTT */}


<div className='mt-24'>

<Whatweuse/>



</div>



{/* WHATT WE USEEE ENDDDD */}


{/* GETT IN TOUCHH STARTTT */}


<div>

<Getintouch number={5}  />


</div>



{/* GETT IN TOUCHH END */}




{/* FOOTER START */}


<div>


<Footer/>




</div>




{/* FOOTER END */}





        </div>
    )

}