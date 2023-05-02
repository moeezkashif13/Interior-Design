import '@/styles/globals.css'


import localFont from 'next/font/local'


const SatoshiFont = localFont({ src: './Satoshi-Variable.woff2', })



// import {Epilogue} from 'next/font/google'


// const epilogue = Epilogue({ subsets: ['latin'],   variable: '--font-epilogue',
// })



export default function App({ Component, pageProps }) {
  return       <main className={SatoshiFont.className} >

  <Component {...pageProps} />
</main>


}
