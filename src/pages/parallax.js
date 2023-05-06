import { useEffect } from "react"

const { gsap } = require("gsap/dist/gsap");


// const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");




export default function ParallaxPage(){

    useEffect(()=>{


        // gsap.registerPlugin(ScrollSmoother)




    },[])



    return(
      <div className="bg-primary">
      

        <div className="bgImageContainer overflow-hidden bg-pink-500 w-full h-[600px] ">
            <div className="w-full h-full py-4   bg-cover bg-no-repeat " style={{backgroundImage:'url(/tenth.webp)',transform:"translateY(150px)"}} >                        </div>
        
        
        </div>


<div className=" h-[600px] bg-green-500"></div>



        </div>
      

    )

}