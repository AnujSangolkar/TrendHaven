import React from 'react'
import Header from './Header'
import Footer from './Footer';
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';
 
const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
        <Helmet>
       
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
  <title>{title}</title>

                
            </Helmet>
        <Header/>
        <main style={{minHeight: '70vh'}}>
        <Toaster />
        {children}
        </main>
        <Footer/> 
        
    </div>
  )
}

Layout.defaultProps = {

  title: 'TrendHaven - Shop Now',
  description: 'A user-friendly online shopping e-commerce website designed for easy discovery, shopping, and management, powered by a MERN-based platform. This platform enables customers to seamlessly explore trending products, shop securely, and empowers administrators to oversee inventory, orders, and customer experiences.',
  keywords: 'mern,react,node,mogodb',
  author: 'WinashInfoTech'
}
export default Layout