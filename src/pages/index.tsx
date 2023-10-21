import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Box,Heading} from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <Box>
      <Heading>Chakra UI</Heading>
    </Box>
  )
}

export default Page
