import Link from "next/link"

export const Navbar = ()=>{
  return <div className='flex gap-x-12 border-b border-secondary  pt-4 pb-4  relative  lg:pb-0'>

{/* <div className="absolute left-0 w-full h-0.5 bg-fourth top-14"></div> */}

  <div className=' flex items-center self-center w-52'>
  <a href='#!'>
  <img src='/logo.svg' />
  </a>
  </div>
  
  
  <div className='  flex-grow   flex justify-between items-center uppercase text-sm font-medium'>
  
  
  <div className=' gap-x-2  hidden lg:flex ' >
    <Link href='/' className='px-5 py-1 rounded-[20px] text-primary bg-red-500'>Home</Link>
  
    <Link href='/aboutus' className='px-5 py-1 rounded-[20px] text-primary bg-red-500'>About us</Link>
  
    <Link href='/projects' className='px-5 py-1 rounded-[20px] text-primary bg-red-500'>Projects</Link>
  
    <Link href='/getintouch' className='px-5 py-1 rounded-[20px] text-black bg-secondary'>get in touch <span>arr</span></Link>
  
  
  </div>
  
  <div className='flex  lg:mr-0 lg:ml-10 text-[0.8rem] anothermobile:text-lg border uppercase gap-x-3 lg:gap-x-6 py-1 px-1 lg:p-1.5 rounded-rounded text-black'>
  
  <a href='#!' className='bg-white  px-3 py-0 anothermobile:px-5  lg:px-4 lg:py-1  rounded-2xl flex justify-center items-center '>EN</a>
  <a href='#!' className='bg-white  px-3 py-0 anothermobile:px-5  lg:px-4 lg:py-1  rounded-2xl flex justify-center items-center '>RO</a>
  
  
  </div>


  <div onClick={()=>{

    document.querySelector('.showLinks').classList.toggle('top-[80px]')



  }}   className="lg:hidden flex flex-col gap-y-2 cursor-pointer">

    {[1,2,3].map(()=>{
      return <div className="w-6 h-0.5 bg-white"></div>
    })}

  </div>

<div style={{transition:'all 0.5s'}} className="showLinks lg:hidden absolute w-full bg-[#fff8f1] rounded-xl text-[#1d1d1d] left-0 -top-[500%]  py-12 flex flex-col gap-y-9 text-[1.2rem] font-normal items-center uppercase">


      <Link href="/">Home</Link>
      <Link href="aboutus">about us</Link>
      <Link href="#!">projects</Link>
      <Link href="#!" className="text-[1rem] border border-red-500 rounded-full px-5 py-2.5"  >get in touch <span>arr</span></Link>



</div>






  
  
  
  </div>
  
  
  
  </div>
}

export const SectionIntro = ({number,text,columnOnDesktop,fullwidthparagraph,includeSecond,secondSectHeading,secondSectText})=>{
    return <><div className='flex items-center'>
  
      <div className='w-6 h-6 flex justify-center items-center rounded-full bg-white text-sm text-black'>{number}</div>
    
    
      <div className='ml-4 px-5 py-1 self-start  border rounded-3xl text-xs  flex items-center'>{text}</div>
    
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
    
    
    <p className='text-[1.6rem] anothermobile:text-[2.45rem] anothermobile:leading-[2.7rem] md:text-[2.8rem] md:leading-[3.2rem] lg:text-[4.1rem] font-medium mt-6 leading-8  lg:leading-[5rem]'>IF YOU ARE INTERESTED IN ELEVATING YOUR HOME, DEVELOPING YOUR OFFICE SPACE OR BUILDING YOUR INTERIOR BRAND, DON'T HESITATE TO GET IN TOUCH.
    </p>
    
    
    <div className='flex flex-col lg:flex-row justify-end gap-x-10 items-center mt-8 lg:mt-12 mb-10 lg:mb-20 '>
    
      <p className={`mb-8 lg:mb:0 w-full lg:w-1/2  px-0 lg:pl-20 text-secondary text-[1.05rem]`}>By working with designers who truly understand you, you can feel confident that the end result will be a reflection of your personality and style.
    </p>
    
    <a href='#!' className=' uppercase bg-yellow-500 self-start px-5 py-2.5 rounded-3xl text-sm'>get in touch <span> &nbsp; arr</span></a>
    
    
    
    </div>
    
    
    
    
    
    </div>
}



export const Footer = ()=>{
  return <div className='relative border-secondary   '>


  <div className='borderWidth absolute w-0 h-[1px] bg-fourth top-0'></div>
  <div className='borderHeight hidden lg:block absolute w-[1px] h-full bg-fourth top-0 left-0'></div>
  <div className='borderHeight hidden lg:block absolute w-[1px] h-full bg-fourth top-0 right-0'></div>
  <div className='borderWidth absolute w-0 h-[1px] bg-fourth bottom-0'></div>
  
  
  
  
  <div className='flex flex-col lg:flex-row '>
  
      <div  className='w-full relative border-t border-b border-secondary  py-7 lg:w-1/2   lg:p-6'>
  
      <div className='absolute w-[1px] h-0 borderHeight bg-fourth ' style={{top:'50%',right:0,transform:'translate(0%,-50%)'}}></div>
  
  
  <div >
    <img src='/logo.svg' />
  </div>
  
  
  <p className='mt-10 lg:mt-72  text-secondary text-[1rem]  font-normal lg:font-light  lg:text-[1.2rem] pr-0 lg:pr-12 leading-6 lg:leading-7'>Transform your home or office with our custom tailored furniture & interior design services. Create personalised designs that reflects your unique style. From custom-made furniture to complete room makeovers, we bring your vision to life. <a href='#!' className='text-white font-medium underline'>Contact us today!</a>
  </p>
  
  
  
  
      </div>
  
  
  <div  className='w-full lg:w-1/4 p-0 lg:p-6  relative '>
  
  <div className='absolute w-[1px] h-0 borderHeight bg-fourth top-0 right-0'></div>
  
  
  {/*  */}
  
  <div className='pt-8 lg:-0'>
  
    <p className='uppercase  text-[1rem] lg:text-lg text-primary'>CONTACT US</p>

    
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
  
  
  
  
  <div className='w-full lg:w-1/4 mt-8 lg:mt-0 p-0 lg:p-6 pb-8 border-b border-secondary lg:border-none'>
  
  <p className='uppercase  text-[1rem] lg:text-lg text-primary'>QUICK LINKS</p>
  
  
  <div className='mt-5 gap-y-4 w-full lg:w-[65%] flex flex-wrap gap-x-4  text-sm text-third font-medium'>
      
  <a href='#!' className='px-5  py-1.5 border border-primary  rounded-2xl'>Home <span>arr</span></a>
  <a href='#!' className='px-5  py-1.5 border border-primary  rounded-2xl'>About us <span>arr</span></a>
  <a href='#!' className='px-5  py-1.5 border border-primary  rounded-2xl'>Works <span>arr</span></a>
      
  <a href='#!' className='px-5  py-1.5 border border-primary  rounded-2xl'>Contact us <span>arr</span></a>
      
      {/* <a href='#!' className='px-3.5 text-third  py-1 border border-primary  rounded-2xl'>Home <span>arr</span></a>
      <a href='#!' className='px-3.5 text-third  py-1 border border-primary  rounded-2xl'>About us <span>arr</span></a>
      <a href='#!' className='px-3.5 text-third  py-1 border border-primary  rounded-2xl'>Works <span>arr</span></a>
      <a href='#!' className='px-3.5 text-third  py-1 border border-primary  rounded-2xl'>Contact us <span>arr</span></a> */}
      
      
      </div>
  
  
  
  
  </div>
  
  
  </div>
  
  
  
  
  
  <div className=' px-0 lg:px-6 py-8 lg:py-2 relative  text-primary flex flex-col gap-y-4 md:flex-row   md:flex-wrap md:gap-x-10  items-start  lg:items-center    justify-between  uppercase  font-medium lg:font-normal text-sm'>
     
  <div className='absolute w-0 borderWidth h-[1px] bg-fourth top-0 left-0'></div>
  
  
    <span>© 2023. NEXT CONCEPT DESIGN</span>
  
  <a href='#!' className='uppercase p-0 lg:px-5 lg:py-2 rounded-3xl transition-all hover:bg-white-500 text-third'>Website by <span className='text-primary'>Abdul Moeez</span></a>
  
  <div className="flex justify-between w-full md:w-auto">
  
  <a className='text-primary' href='#!'>privacy policy</a>
  
  
  <a className='text-primary' href='#!'>terms & conditions</a>
  </div>
  
  
  </div>
  
  
  
  
  
  </div>
}