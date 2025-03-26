import Startanimation from '@/components/startanimation'
import Aboutus from '@/sections/aboutus/aboutus'
import Agency from '@/sections/aboutus/agency'
import Journey from '@/sections/aboutus/journey'
import Footer from '@/sections/home/footer'
import Readytotransform from '@/sections/home/readytotransform'
import Faqs from '@/sections/services/faqs'
import Navigate from '@/sections/services/navigate'
import Testimonials from '@/sections/services/testimonials'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Startanimation/>
        <Aboutus/>
        <Agency/>
        <Journey/>
      <Navigate/>
      <Testimonials/>
      <Faqs/>
      <Readytotransform/>
      <Footer/>
    </div>
  )
}

export default Page
