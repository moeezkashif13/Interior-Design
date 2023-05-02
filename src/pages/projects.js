import { Footer, Getintouch, HeroSectIntro, Navbar } from "@/components/smallcomponents";

const EachProject = ({right,reverse})=>{
    console.log(reverse);
    return <div className={`lg:w-1/2   ${right?`md:pl-6  ${reverse&&'lg:pr-6 lg:border-r lg:border-secondary'} pt-12 md:pt-0 lg:pt-48 md:border-l md:border-secondary`:`   ${reverse?'lg:pl-0':'lg:pl-6'} lg:pt-24 md:pr-6    `}
    
    `} >

    <div className={`w-full h-[210px] anothermobile:h-[315px] md:h-[210px]      


lg:h-[210px]

    

    `}>

    <div className="w-full h-full ">

    <img src="/fifth.webp" className="w-full h-full max-w-full object-cover rounded-lg" alt="" />

    </div>

    </div>


    <div className="anothermobile:px-5 md:px-0 flex text-xs anothermobile:text-sm font-medium mt-4 mb-2.5">

<p className="uppercase text-third">kitchen design  </p>

<p className="ml-auto">2023</p>

    </div>


<div className="anothermobile:px-5 md:px-0 flex flex-col gap-y-6 anothermobile:gap-y-8 ">

<p className=" text-xl md:text-2xl font-medium" >MODERN KITCHEN {String(reverse)} </p>

<a href="#!" className="bg-white text-black self-start px-6 py-0.5  text-sm rounded-full">View</a>


</div>



    </div>
} 

export default function Projects(){


    return (


        <div className="bg-primary px-mobilePadding anothermobile:px-anothermobile md:px-tablet   lg:px-desktopPadding text-primary">


<Navbar/>


<HeroSectIntro/>



<div className="border-t border-secondary  flex flex-col md:flex-wrap md:flex-row ">


{[1,2].map((elem,index)=>{

return (
<div className={`relative    lg:flex ${index==1&&'lg:flex-row-reverse'} lg:w-full    lg:border-b lg:border-secondary`}>



    <div className={` mt-6 mb-6 flex-grow    lg:flex-grow-0 lg:w-1/3 ${index==1?'lg:pl-6':'lg:pr-6  lg:border-r lg:border-secondary '}
    
    
    
    `} >

    <div className={`w-full h-[210px] anothermobile:h-[315px] md:h-[384px]      

    

    ${index==1?'lg:h-[18.5vw]':'lg:h-[14.5vw]'}


    `}>

    <div className="w-full h-full ">

    <img src="/fourth.webp" className="w-full h-full max-w-full object-cover rounded-lg" alt="" />

    </div>

    </div>


    <div className="anothermobile:px-5 flex text-xs anothermobile:text-sm font-medium mt-4 mb-2.5">

<p className="uppercase text-third">kitchen design </p>

<p className="ml-auto">2023</p>

    </div>


<div className="anothermobile:px-5 flex flex-col gap-y-6 anothermobile:gap-y-8 ">

<p className=" text-xl md:text-2xl font-medium" >ELEGANT CASHMERE KITCHEN </p>

<a href="#!" className="bg-white text-black self-start px-6 py-0.5  text-sm rounded-full">View</a>


</div>



    </div>


<div className="lg:w-2/3  flex flex-col md:flex-row pb-10 mt-10 border-b border-secondary lg:border-none  ">

<EachProject  reverse={index==1?true:false} />
     <EachProject  reverse={index==1?true:false}  right={true} />



</div>


    </div>


)


})}







</div>



<div className="pt-16">
<Getintouch number={1}/>
</div>


<div>
    <Footer/>
</div>



</div>


    )


}