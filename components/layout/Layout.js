import React from 'react'
import Head from 'next/head'
import { Header, Footer } from '../component'
import { footerMenuData } from '../../data/Data'

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' | Flipkart' : 'Flipkart'}</title>
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <header><Header /></header>
        <main>{children}</main>
        <footer><Footer data={footerMenuData} /></footer>
      </div>


    </>
  )
}

export default Layout