import React from 'react'
import "./banner.css"
import Bannerdes from './Bannerdes'

export default function Banner() {
  return (
    <div className='banner'>
        <div className='banner-left'></div>
        <div className='banner-right'>
                <Bannerdes></Bannerdes>
        </div>
    </div>
  )
}
