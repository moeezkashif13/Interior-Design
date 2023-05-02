
import { Footer, Navbar } from "@/components/smallcomponents";
import anime from "animejs";
import { useEffect } from "react";
import { AiTwotoneMail } from "react-icons/ai";

import {BsFillTelephoneFill} from 'react-icons/bs'

import {FaMapMarkerAlt} from 'react-icons/fa'

export default function Contactus(){


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


    return(

        <div className="bg-primary px-mobilePadding anothermobile:px-anothermobile md:px-tablet   lg:px-desktopPadding text-primary">


<Navbar/>



<div className="pt-10 pb-6 md:pb-0 lg:pt-6 mt-10 lg:mt-12 lg:pb-6 relative lg:flex ">

<div className=" absolute w-0 borderWidth h-[1px] bg-fourth top-0 left-0 "></div>

<div className=" absolute w-0 borderWidth h-[1px] bg-fourth bottom-0 left-0 "></div>



<div className="lg:w-1/2 lg:mr-8 lg:pr-8 relative ">

<div className="hidden lg:block absolute w-[1px] h-0 borderHeight bg-fourth  top-0 right-0 "></div>



        <a href="#!" className="text-third border border-secondary px-4 py-[4px] text-sm rounded-full">Get in touch</a>

<h1 className="text-primary font-semibold text-[1.7rem] anothermobile:text-[2.2rem] md:text-[2.7rem]    lg:text-[3.9rem]    mt-4 mb-6">CONTACT US</h1>

<p className="text-primary md:text-lg">Get in touch with us today to start your interior design journey. We are always eager to hear about your projects and help bring your vision to life. Please fill out the form below or contact us through one of the options below. We can't wait to hear from you!</p>


<div  className="text-sm ">

{/*  */}

<div className="flex gap-x-5 mt-8">
    <div className="w-8 min-w-[32px] h-8 text-fifth bg-secondary rounded-full flex justify-center items-center text-lg">

    <BsFillTelephoneFill/>

    </div>
    <a href="#!"  className=" rounded-2xl px-4  py-1 border border-[#535353] text-third">0748 775 027</a>
</div>

{/*  */}

<div className="flex gap-x-5 mt-8">
    <div className="w-8 min-w-[32px] h-8 text-fifth bg-secondary rounded-full flex justify-center items-center text-lg">

    <AiTwotoneMail/>

    </div>
    <a href="#!"  className=" rounded-2xl px-4  py-1 border border-[#535353] text-third">nextconcept.designn@gmail.com</a>
</div>


{/*  */}

<div className="flex gap-x-5 mt-8">
    <div className="w-8 min-w-[32px] h-8 text-fifth bg-secondary rounded-full flex justify-center items-center text-lg">

    <FaMapMarkerAlt/>

    </div>
    <p  className=" rounded-2xl pr-2  py-1 -mt-1 text-[1rem]  text-third">Alexandru Ioan Cuza Street, Nr. 14, Satu Mare, Romania</p>
</div>

{/*  */}

</div>



</div>




<div className="lg:w-1/2">


<div className="flex flex-col anothermobile:flex-row anothermobile:justify-between anothermobile:flex-wrap anothermobile:gap-x-4 gap-y-9 pt-16" > {/*  INPUT FIELDS CONTAINER starttt*/}

{[1,2,3,4].map((elem,index)=>{

    return <div className={`w-full text-primary relative  ${index==0&&'anothermobile:w-[47%]'} ${index==1&&'anothermobile:w-[47%]'}  
    
    
    ${index==2&&'md:w-[47%]'} ${index==3&&'md:w-[47%]'}
    
    
    
    
    `}>
        <label htmlFor="name" id="name"  >NAME*</label>
        <input  type="text" className="text-[1.1rem]  bg-transparent outline-none placeholder:text-[#7E7E7E]  px-2 py-2  block w-full  rounded-sm focus:border    " placeholder="Enter your name" />

        <div className="absolute w-0 h-[1px] borderWidth bg-fourth bottom-0 left-0 "></div>


    </div>

})}


<div className="w-full text-primary relative">
        <label htmlFor="name" id="name">MESSAGE*</label>
        <textarea  rows={8} className="text-[1.05rem]  bg-transparent outline-none  px-2 py-2  block w-full  rounded-sm focus:border placeholder:text-[#7E7E7E]  " placeholder="Type your message" />

        <div className="absolute w-0 h-[1px] borderWidth bg-fourth bottom-0 left-0 "></div>



    </div>



</div> {/*  INPUT FIELDS CONTAINER ENDDD*/}



<div className="md:flex md:py-4">
<div className="flex gap-x-3 items-center my-8 text-sm   " onClick={(event)=>{
        
        document.querySelector('.circle').classList.toggle('bg-white')

    }}>


    <div  style={{transition:'all 0.3s'}} className="circle w-5 h-5 bg-transparent border  rounded-full"></div>
    <p>I ACCEPT THE <a href="#!" className="underline">TERMS & CONDITIONS</a></p>

</div>


<a href="#!" className="bg-secondary md:ml-auto md:self-center md:px-6 text-black block text-center   rounded-full py-2.5">SUBMIT</a>

</div>


</div>



</div>




<div className="flex flex-col lg:flex-row gap-y-12 py-16 lg:gap-x-6">

    <div className="h-[209px] anothermobile:h-[46vw] lg:h-[370px] ">
        <div className="w-full h-full">
            <img src="/sixth.webp" className="h-full w-full max-w-full object-cover rounded-lg lg:rounded-xl" alt=""  />
        </div>
    </div>

    <div className="h-[209px] anothermobile:h-[46vw] lg:h-[370px] ">
        <div className="w-full h-full">
            <img src="/sixth.webp" className="h-full w-full max-w-full object-cover rounded-lg lg:rounded-xl" alt=""  />
        </div>
    </div>


</div>



<div>
    <Footer/>
</div>



        </div>

    )

}