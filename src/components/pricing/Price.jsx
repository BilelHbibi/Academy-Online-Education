import React from 'react'
import "./price.css"
import Back from '../common/back/Back'
import PriceCard from './PriceCard'
import Faqs from './Faqs'

const Price = () => {
  return (
    <>
     <Back title="Choose The Right Plan"/>
     <section className="price padding">
        <div className="container grid">
            <PriceCard />
        </div>
     </section>
     <Faqs />
    </>
  )
}

export default Price