import Image from 'next/image'
import { Inter } from 'next/font/google'
import Content from '../app/message.mdx'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

// export default function Contact() {
//   return (    
//    <>
//     contacts info!  nuts! 
//     <Content />
//    </>
//   )
// }

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
    </>
  )
}

export default Page