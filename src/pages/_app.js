import '@/styles/globals.css'

import '@/styles/test.css'


import localFont from 'next/font/local'
import { useEffect } from 'react'



const SatoshiFont = localFont({ src: './Satoshi-Variable.woff2', })



// import {Epilogue} from 'next/font/google'


// const epilogue = Epilogue({ subsets: ['latin'],   variable: '--font-epilogue',
// })



export default function App({ Component, pageProps }) {


  // i ammmm checkingggg brrrooooooo




  return       <main className={SatoshiFont.className} >

  <Component {...pageProps} />
</main>


}
