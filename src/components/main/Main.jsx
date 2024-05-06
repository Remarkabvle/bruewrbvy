import React from 'react'
import { bannerData } from '../../static/bannerData'
import Banner from '../banners/Banners'



const Main = () => {
    let banner = bannerData?.map((card)=>(
        <Banner
            key={card.id}
            {...card}
        />
    ))
  return (
    <>
  {banner}
    
    </>
  )
}

export default Main
