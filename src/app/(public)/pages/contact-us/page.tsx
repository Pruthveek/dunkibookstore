import NavigationBanner from '@/components/common/NavigationBanner'
import GetInTouch from '@/components/modules/contactus/GetInTouch'
import GoogleMapSection from '@/components/modules/contactus/GoogleMapSection'
import React from 'react'

export default function AboutUs() {
  return (
    <section className="flex flex-col items-center">
      <NavigationBanner
        title="Contect Us"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contect Us" }]}
      />
      <GoogleMapSection/>
      <GetInTouch/>
    </section>
  )
}