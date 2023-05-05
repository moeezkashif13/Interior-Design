import { Footer, Getintouch, HeroSectIntro, Navbar } from "@/components/smallcomponents";
import Link from "next/link";

export const EachProject = ({nomargin,special,different,desktop,mid,left,right,reverse})=>{
   return <div className={` ${nomargin?'mt-0':'mt-12'} lg:mt-0 w-full
   
   ${mid&&`lg:px-6 relative lg:pt-24  `}

   ${left&&`lg:pr-6  ${reverse&&'lg:!pt-48'} `}


   ${right&&`lg:pl-6   lg:pt-48   ${reverse&&'lg:!pt-0'} `}
   

   `}>

{mid&&(
<>
<div className={` hidden lg:block absolute bg-fourth w-[1px] h-full top-0 left-0`}>    </div>

<div className={` hidden lg:block absolute bg-fourth w-[1px] h-full top-0 right-0`}>    </div>
</>

)

    }





    





   <div className={`w-full h-[210px] anothermobile:h-[50vw]
   
${special&&'md:h-[23vw]'}
${special&&'lg:h-[25vw]'}



    ${different&&'md:h-[23vw]'}

    lg:h-[19vw]



   
   `}>
       <div className="w-full h-full  ">

    <img src="/seventh.webp" className="rounded-xl w-full h-full max-w-full object-cover" alt=""  />

       </div>
   </div>

<div className="anothermobile:px-6 md:px-0">

   <div className="flex text-sm mt-5">
   <p className="text-third">KITCHEN DESIGN</p>
   <p className="ml-auto text-primary">2023</p>
   </div>

   <div >
       <p className="mt-3 mb-5 text-primary  font-semibold text-xl md:text-2xl"> ELEGANT CASHMERE KITCHEN </p>
       <span href="#!" className="bg-white px-5 py-[2px] text-sm rounded-3xl text-black">View</span>
   </div>


</div>


</div>
} 

export default function Projects(){


    return (


        <div className="bg-primary px-mobilePadding anothermobile:px-anothermobile md:px-tablet   lg:px-desktopPadding text-primary">


<Navbar/>


<HeroSectIntro/>


<div> {/* PROJECTSS CONTAINER STARTT */}

{[1,2,3,4].map((elem,index)=>{

    return <div  className="lg:flex relative  pb-6 lg:py-5"> 

{index==0&&<div className=" absolute w-full h-[1px] bg-fourth -top-6 left-0"></div>}

<div className="absolute w-full h-[1px] bg-fourth bottom-0 left-0"></div>


    <div className="lg:basis-2/6">
    <Link href="/projects/sampleproject">  

    <EachProject reverse={(index==1||index==3)&&true} left={true} desktop={true}  />
</Link>
    </div>
    
    
    <div className=" lg:basis-2/3 md:flex lg:justify-center lg:gap-0   md:gap-x-12 relative overflow-hidden">
    
    {/* <div className="hidden md:block  absolute top-12 left-[50%] w-[1px] h-full bg-fourth" style={{transform:'translateX(-50%)'}}></div> */}
  
  <Link href="/projects/sampleproject">  
    <EachProject reverse={(index==1||index==3)&&true} mid={true} desktop={true} different={true}  />
    </Link>
  
  <Link href="/projects/sampleproject">
    <EachProject reverse={(index==1||index==3)&&true} right={true} desktop={true} different={true}  />
    
    </Link>
    
    
    </div>
    
    
    
    
    
    </div> 

    
    

})}


































</div> {/* PROJECTSS CONTAINER ENDDD */}






<div className="pt-16">
<Getintouch number={1}/>
</div>


<div>
    <Footer/>
</div>



</div>


    )


}