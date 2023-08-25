import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend,BiPhoneCall,BiSupport} from "react-icons/bi"


const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
            <div className='row contactus '>
              <div className='col-md-6'>
                <img 
                  src="/Images/contactus.jpeg"
                  alt='contatcus'
                  style={{width : "100%" }}
                />
                </div>
                <div className='col-md-4'>
                  <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
                  <p className='text-justify mt-2'>
                  Any queries or information about our products? Feel free to call us anytime, we're available 24/7.
                  </p>
                  <p className='mt-3'>
                    <BiMailSend/> : www.help@trendhaven.com
                  </p>
                  <p className='mt-3'>
                    <BiPhoneCall/> : 023-123654
                  </p>
                  <p className='mt-3'>
                    <BiSupport/> : 1800-800-008 (toll free)
                  </p>
                  
                  

                </div>
            </div>
    </Layout>
  )
}

export default Contact