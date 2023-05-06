import { Footer, Getintouch, Navbar, SectionIntro } from "@/components/smallcomponents";
import Head from "next/head";
import Link from "next/link";
import div from "next/link";
import { useEffect } from "react";
import { EachProject } from ".";

export default function EachProjectPage(){

useEffect(()=>{

    const intervalFunction = setInterval(() => {
        
        document.querySelector('.checkingDiv').scrollLeft +=270

    }, 3000);


    return ()=>{
        clearInterval(intervalFunction)
    }


},[])

const title = "Elegant cashmere kitchen"

    return(
       
        <>

        <Head>

<title>{title} | Interior Design Agency</title>

</Head>


        <div className="bg-primary px-mobilePadding anothermobile:px-anothermobile md:px-tablet   lg:px-desktopPadding text-primary">


<Navbar/>


<div className="py-8 lg:pt-16 border-t border-b border-secondary">

<h1 className="uppercase text-[7vw] anothermobile:text-[5.7vw] lg:text-[6.2vw]  leading-[8vw] font-medium">{title}</h1>


<div className=" h-[330px] md:h-[400px] lg:h-[600px]  mt-8 mb-10">
    <div className="w-full h-full ">

        <img src="/sampleprojects.webp" alt="" className="w-full max-w-full h-full object-cover rounded-xl" />

    </div>
</div>


<div className="flex justify-between text-sm font-medium">


<a href="#!" className=" px-4 py-[1px]   border rounded-full  uppercase border-[#545454] text-primary">Kitchen</a>

<div className=" px-4 py-[1px]  text-[#ababab]  border rounded-full border-[#545454] ">2023</div>

<div className=" px-4 py-[1px]   border rounded-full  uppercase border-[#545454] text-primary">Romania</div>

</div>




</div>




<div className="flex flex-col border-b border-secondary py-8">


<div className="text-2xl anothermobile:text-3xl md:text-4xl font-semibold">PROJECT DETAILS</div>


<div>
    <p className="mt-6 text-primary md:text-lg">The doors and visible panels are made of ultramat painted MDF in the cashmere colour, providing you with a special finish and a pleasant texture to the touch. The countertop is made of postformed material from Egger, which is resistant to stains, heat, abrasion, and scratches, so it can serve you for a long time. To ensure optimal comfort and functionality, the furniture is complemented by premium hardware from Blum, including drawers, hinges, and lifting systems with damping and push-to-open.</p>


<p className="mt-6 text-[#ababab]  anothermobile:pl-14 md:pl-36 ">AND BECAUSE DETAILS MATTER, WE HAVE ALSO INCLUDED THE LOOX5 LIGHTING SYSTEM FROM HAFELE, WHICH, USING BLUETOOTH TECHNOLOGY, ALLOWS YOU TO CONTROL THE LIGHTING DIRECTLY FROM YOUR MOBILE PHONE OR REMOTE CONTROL, TO CREATE A PLEASANT AND RELAXING ATMOSPHERE WHILE COOKING OR DINING.</p>

</div>



</div>





<div className="py-10 border-t border-secondary">


<div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-x-8 gap-y-10">
{[1,2,3].map((elem,index)=>{
    return <div className={`h-[207px]  

${index==0&&'lg:w-[48.5%]  anothermobile:h-[260px] md:h-[350px]'}

    ${index==1&&' md:h-[220px] lg:h-[350px] lg:w-[48.5%]  anothermobile:w-2/3'}
    ${index==2&&' md:h-[220px] lg:h-[350px] lg:w-[48.5%]  anothermobile:w-2/3 anothermobile:ml-auto lg:ml-0'}
    
    
    rounded-xl`}>
        <div className="w-full h-full ">

<img src="/thirteenth.webp" alt="" className="w-full max-w-full h-full object-cover rounded-xl" />

</div>
    </div>
})}

<div className="lg:w-full">
<ul style={{scrollBehavior:'smooth'}} class="pb-8 w-full flex  whitespace-nowrap overflow-x-scroll checkingDiv">
 
{[1,2,3,4,5].map(()=>{
    return <div className="h-[370px] anothermobile:h-[422px] w-[250px]  anothermobile:w-[336px] basis-[250px] anothermobile:basis-[336px] mr-6 last:mr-0 rounded-lg  flex-grow-0 shrink-0  ">

<div className="w-full h-full ">

<img src="/sixth.webp" alt="" className="w-full max-w-full h-full object-cover rounded-xl" />

</div>



    </div>
})}



</ul>

</div>




</div>



</div>





<div>

<div className="py-4">
<SectionIntro number={1} text="Other projects" includeSecond={true} secondSectHeading="DISCOVER MORE" secondSectText="Explore more design projects to fuel your creativity and inspire your next interior design or furniture project.

" />

</div>




<div className=" border-t border-secondary  mt-8 md:flex">

{[1,2].map((elem,index)=>{
return <Link href="/projects" className="md:w-1/2">  

 <div className={`-mt-6 lg:mt-6  ${index==0&&'relative md:pr-6 '} ${index==1&&'md:pl-6'}   pb-8 border-b border-secondary mb-16 last:mb-0`}>

{index==0&&(
    <div className=" hidden md:block absolute w-[0.5px]  top-0 right-0 h-full bg-fourth"></div>
 )}

{index==0&&(
    <div className=" hidden md:block absolute w-[0.5px]  bottom-0 right-0 h-[20px] bg-primary"></div>
 )}

<EachProject   special={true} />


</div>

</Link>

})}


</div>



<div className=" flex  justify-center mt-5 lg:mt-10 text-sm">
    <Link href="/projects" className="bg-secondary  font-medium px-5 py-2.5 rounded-full text-[#333]">
    VIEW ALL PROJECTS
<span > arr</span>
    </Link>
</div>

</div>



<div className="pt-16">
    <Getintouch number={2} />
</div>


<div>
    <Footer/>
</div>





</div>


</>

        
    )

}