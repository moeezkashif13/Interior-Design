import Link from "next/link"
import { AiOutlineArrowRight, AiOutlineRight } from "react-icons/ai"

const MobileNavigation = ()=>{
  return <div style={{transition:'all 0.4s'}} className="   mobileNavigation bg-secondary absolute py-12  left-0 rounded-lg w-full text-[#333] flex flex-col items-center gap-y-6 text-xl  -top-[800%]  ">

  <Link href="/">HOME</Link>
  <Link href="/aboutus">ABOUT US</Link>
  <Link href="/projects">PROJECTS</Link>

<Link className="px-5 py-1.5 border-secondary flex items-center text-[1rem] rounded-full border" href="/contactus">

GET IN TOUCH <span className="ml-2 text-xs "><AiOutlineArrowRight/></span>

</Link>

</div>
}


export const Navbar = ()=>{
  return <div className="pb-8 ">

<div className='z-20 bg-primary  flex px-mobilePadding anothermobile:px-anothermobile md:px-tablet   lg:px-desktopPadding pt-3 pb-3 justify-between border-b border-secondary    fixed w-full left-0 mb-8'>


<MobileNavigation/>



  <Link href="/" className=" w-[160px]  anothermobile:w-[190px] lg:w-[250px]">

  <img className="w-full h-full max-w-full " src="/logo.svg" alt="" />

  </Link>


{/* DESKTOPP NAVIGATION STARTTT  */}

<div className="flex gap-x-8 ml-auto mr-6  text-[14px] font-medium  items-center text-primary ">
  
  <Link className="pt-[2.5px]" href="/" >HOME</Link>
  <Link className="pt-[2.5px]" href="/aboutus" >ABOUT US</Link>
  <Link className="pt-[2.5px]" href="/projects" >PROJECTS</Link>

<Link href="/contactus" className="self-center text-sm bg-secondary rounded-full px-5 py-2 flex items-center text-[#333]">

  GET IN TOUCH  <span className="ml-2 text-xs"><AiOutlineArrowRight/></span>

</Link>


</div>


{/* DESKTOPP NAVIGATION ENDDD  */}





  <div  className="  px-1.5 py-1.5 rounded-full text-black flex gap-x-2 anothermobile:gap-x-3 border border-secondary text-xs anothermobile:text-[1.2rem] lg:text-sm">

    <div className="px-3 md:px-5 lg:px-4 anothermobile:px-4 anothermobile:py-1   rounded-full  bg-secondary ">EN</div>
    <div className="px-3 md:px-5 lg:px-4 anothermobile:px-4 anothermobile:py-1   rounded-full  bg-secondary ">RO</div>


  </div>



    <div  onClick={()=>{

      document.querySelector('.mobileNavigation').classList.toggle('!top-20')


    }}    className=" lg:hidden  flex flex-col anothermobile:justify-center gap-y-1.5 cursor-pointer">

        <div className="h-0.5 w-6 bg-secondary"></div>
        <div className="h-0.5 w-6 bg-secondary"></div>
        <div className="h-0.5 w-6 bg-secondary"></div>

    </div>




  
  </div>

  </div>


}

export const SectionIntro = ({number,text,columnOnDesktop,fullwidthparagraph,includeSecond,secondSectHeading,secondSectText})=>{
    return <><div className='flex items-center'>
  
      <div className='w-6 h-6 flex justify-center items-center rounded-full bg-white text-sm text-black'>{number}</div>
    
    
      <div className='ml-4 px-4 py-0.5 self-start  border rounded-3xl text-[0.8rem]  flex items-center'>{text}</div>
    
    </div>
    
    
    {includeSecond&& <div className={`flex flex-col ${columnOnDesktop?'lg:flex-col':'lg:flex-row'} gap-x-16 lg:gap-x-0 items-center md:items-start  ${columnOnDesktop?'lg:items-start':'lg:items-end'} text-primary lg:mt-6`}>
    
      <h1 className={`my-4 lg:my-0 w-full ${columnOnDesktop?'lg:w-full':'lg:w-[55%]'}  text-2xl anothermobile:text-3xl md:text-5xl lg:text-[4.2rem] font-semibold`}>{secondSectHeading}</h1>
      
      
      <p className={`w-full  ${fullwidthparagraph?'md:w-full':'md:w-3/4 lg:flex-grow'} font-light px-0 lg:pl-12 ${columnOnDesktop&&'lg:pl-0 lg:my-8'} text-[1.05rem] lg:text-[1.15rem]`}>{secondSectText}</p>
      
      </div>
    }
    
    
    
    
    </>
    
    
    }


export const Whatweuse = ()=>{

return <div className='mt-6'>

<SectionIntro  number={3} text="Materials  &  Products" includeSecond={true} secondSectHeading="WE USE THE BEST
"  secondSectText="We try to use only the best products and materials to make sure whatever we do for you it will last for a long time.
" />



<div className='pt-16 pb-16' >

{[1,2,3,4,5,].map(()=>{

return <div className='py-4 flex items-center border-t border-b border-secondary'>

  <div className='w-32'>
    <img src='https://uploads-ssl.webflow.com/63cc467bfbf4f5ebbd16107a/63cf1cfe15dd4e67846ff27c_Blum.svg'  className='rounded-lg w-full h-full object-cover max-w-full'   />
  </div>


<p className='ml-auto uppercase text-primary'>HARDWARE</p>


</div>

})}




</div>





</div>

}



export const Getintouch = ({number,extraWidth})=>{
    return <div className='text-primary md:pr-16'>


    <SectionIntro number={number} text="Get in touch"  /> 
    
    
    <p className='text-[1.6rem] anothermobile:text-[2.45rem] anothermobile:leading-[2.7rem] md:text-[2.8rem] md:leading-[3.2rem] lg:text-[4.1rem] font-medium mt-6 leading-8  lg:leading-[4.5rem]'>IF YOU ARE INTERESTED IN ELEVATING YOUR HOME, DEVELOPING YOUR OFFICE SPACE OR BUILDING YOUR INTERIOR BRAND, DON'T HESITATE TO GET IN TOUCH.
    </p>
    
    
    <div className='flex flex-col lg:flex-row justify-end gap-x-10 items-center mt-8 lg:mt-12 mb-10 lg:mb-20 '>
    
      <p className={`mb-8 lg:mb:0 w-full lg:w-1/2  px-0 lg:pl-20 text-secondary text-[1.05rem]`}>By working with designers who truly understand you, you can feel confident that the end result will be a reflection of your personality and style.
    </p>
    
    <Link href='/contactus' className=' uppercase bg-white text-black flex items-center self-start px-5 py-2.5 rounded-3xl text-sm'>get in touch <span className="ml-2 text-xs"><AiOutlineArrowRight/></span></Link>
    
    
    
    </div>
    
    
    
    
    
    </div>
}



export const Footer = ()=>{
  return <div className='footerParent relative   mb-8 '>


  <div className=' absolute w-0 borderWidth h-[1px] bg-fourth top-0'></div>


  <div className=' hidden lg:block absolute w-[1px] h-full bg-fourth top-0 left-0'></div>
  
  
  <div className=' hidden lg:block absolute w-[1px] h-full bg-fourth top-0 right-0'></div>



  <div className=' absolute w-0 borderWidth h-[1px] bg-fourth bottom-0'></div>
  
  
  
  
  <div className='flex flex-col lg:flex-row '>
  
      <div  className='w-full relative border-t border-b lg:border-none border-secondary  py-7 lg:w-1/2   lg:p-6'>
  
      <div className='absolute hidden lg:block w-[1px] h-full bg-fourth ' style={{top:'50%',right:0,transform:'translate(0%,-50%)'}}></div>
  
  
  <div >
    <img src='/logo.svg' />
  </div>
  
  
  <p className='mt-10 lg:mt-72  text-secondary text-[1rem]  font-normal lg:font-light  lg:text-[1.2rem] pr-0 lg:pr-12 leading-6 lg:leading-7'>Transform your home or office with our custom tailored furniture & interior design services. Create personalised designs that reflects your unique style. From custom-made furniture to complete room makeovers, we bring your vision to life. <a href='#!' className='text-white font-medium underline'>Contact us today!</a>
  </p>
  
  
  
  
      </div>
  
  
  <div  className='w-full lg:w-1/4 p-0 lg:p-6  relative '>
  
  <div className='absolute hidden lg:block w-[1px] h-full  bg-fourth top-0 right-0'></div>
  
  
  {/*  */}
  
  <div className='pt-8 lg:pt-0'>
  
    <p className='uppercase  text-[1rem] lg:text-lg text-primary'>CONTACT Us</p>

    
    <div className='mt-5 gap-y-4 w-[85%] flex flex-wrap  text-sm text-third '>
      <span className='relative cursor-pointer hover:bg-white hover:left-2 hover:-top-0.5   transition-all px-3.5  py-1.5 border border-primary  rounded-2xl'>0748 775 027</span>
      
      <span className='relative cursor-pointer hover:bg-white hover:left-2 hover:-top-0.5   transition-all px-3.5 py-1.5 border border-primary  rounded-2xl'>nextconcept.designn@gmail.com</span>
      </div>
    
    
    
    
    
    </div>
  
  {/*  */}
  <div className='mt-8 lg:mt-12 '>
  
    <p className='uppercase  text-[1rem] lg:text-lg text-primary'>Social links</p>
    
    <div className='mt-5 gap-y-4 gap-x-4 w-full lg:w-[65%] flex flex-wrap  text-sm text-third '>
      <span className='relative cursor-pointer hover:bg-white hover:left-2 hover:-top-0.5   transition-all px-5  py-1.5 border border-primary  rounded-2xl'>Instagram</span>
      
      <span className='relative cursor-pointer hover:bg-white hover:left-2 hover:-top-0.5   transition-all px-5  py-1.5 border border-primary  rounded-2xl'>Facebook</span>
      </div>
    
    
    
    
    
    </div>
  {/*  */}
  
  
  </div>
  
  
  
  
  <div className='w-full lg:w-1/4 mt-8 lg:mt-0 p-0 lg:p-6 pb-8 '>
  
  <p className='uppercase  text-[1rem] lg:text-lg text-primary'>QUICK LINKS</p>
  
  
  <div className='mt-5 gap-y-4 w-full lg:w-[65%] flex flex-wrap gap-x-4  text-sm text-third font-medium'>
      
  <Link href='/' className='px-5  py-1.5 border border-primary  rounded-2xl flex items-center'>Home <span className="ml-2 text-xs"><AiOutlineArrowRight/></span> </Link>

  <Link href='/aboutus' className='px-5  py-1.5 border border-primary  rounded-2xl flex items-center'>About us <span className="ml-2 text-xs"><AiOutlineArrowRight/></span> </Link>

  <Link href='/projects' className='px-5  py-1.5 border border-primary  rounded-2xl flex items-center'>Projects <span className="ml-2 text-xs"><AiOutlineArrowRight/></span> </Link>

  <Link href='/contactus' className='px-5  py-1.5 border border-primary  rounded-2xl flex items-center'>Contact us <span className="ml-2 text-xs"><AiOutlineArrowRight/></span> </Link>

      
      
      </div>
  
  
  
  
  </div>
  
  
  </div>
  
  
  
  <div className=' px-0 lg:px-6 py-8 lg:py-2 relative  text-primary flex flex-col gap-y-4 md:flex-row   md:flex-wrap md:gap-x-10  items-start  lg:items-center    justify-between  uppercase  font-medium lg:font-normal text-sm'>
     
  <div className='absolute w-full h-[1px] bg-fourth top-0 left-0'></div>
  
  
<span>© 2023. NEXT CONCEPT DESIGN </span>
  
  <a href='https://www.facebook.com/abdulmoeez121367' target="_blank" className='uppercase p-0 lg:px-5 lg:py-2 rounded-3xl transition-all hover:bg-white-500 text-third'>Website by <span className='text-primary'>Abdul Moeez</span></a>
  
  <div className="flex justify-between w-full md:w-auto md:gap-x-4 ">
  
  <Link className='text-primary' href='/privacy-policy'>privacy policy</Link>
  
  
  <Link className='text-primary' href='/terms-and-conditions'>terms & conditions</Link>
  </div>
  
  
  </div>
  
  
  
  
  
  </div>
}



export const HeroSectIntro = ()=>{

  return (
    <div className="py-10  md:py-24 lg:py-44">


    <p className="mb-8 text-[1.62rem]  anothermobile:text-[6.2vw] anothermobile:leading-[7.5vw]   font-semibold  lg:text-[4.5vw] lg:leading-[5.5vw]  leading-8">BROWSE OUR PORTFOLIO OF STUNNING WORKS, FROM CONCEPT TO COMPLETION</p>

<div className=" lg:flex ">

      <div className=" lg:flex  lg:gap-x-28 lg:w-[85%]">
        <p className="text-third lg:w-[35%] font-medium md:text-lg">TRANSFORM YOUR SPACE WITH THE HELP OF OUR EXPERT INTERIOR DESIGNERS AND CRAFTSMEN</p>

        <p className="my-8  lg:my-0 text-secondary lg:w-1/2 md:text-lg md:w-3/4">When it comes to seeking professional interior design services for your home, it is crucial to collaborate with designers who have a deep understanding of your unique style and needs.</p>
      </div>

      <a href="#!" className="lg:self-end  font-medium   text-black flex items-center  bg-white px-5 text-sm uppercase py-2.5 rounded-full">get in touch <span className="ml-2 text-xs"><AiOutlineArrowRight/></span></a>



</div>



    </div>
  )


}