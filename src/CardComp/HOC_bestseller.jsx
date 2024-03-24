import React from 'react'
import {ProductCard} from "./Filtercards"

export default function HOC_bestseller() {
  return (props)=>{
        const styleobj={
            position:"absolute",
            padding:"8px",
            backgroundColor:"black",
            color:"white",
            marginLeft:"15px"
        }
    return (
        <div>
            <div style={styleobj}>
                Promoted
            </div>
            <ProductCard {...props}></ProductCard>
        </div>
    )
  }
}
