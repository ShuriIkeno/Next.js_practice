import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeFirebase } from '@src/lib/firebase/firebase'
import {getApp} from 'firebase/app'


initializeFirebase()
export default function App({ Component, pageProps }: AppProps) {
  // console.log(getApp())
  return (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

