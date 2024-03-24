import React from 'react'
import './Cardstyle.css'
import HOC_bestseller from './HOC_bestseller'

export function ProductCard(props)
{
    return(
        <div className='card-outer'>
            <p>
                Company:{props.company}
            </p>
            <p>
                Model:{props.model}
            </p>
            <p>
                Price:{props.price}
            </p>
            <p>
                Owner:{props.owner}
            </p>
            <p>
                <b>Details</b>
                <p>
                    <img src={props.path} alt="" width={200} height={200}/>
                </p>
                <div>
                    {props.qty>0?(<><div>{props.qty==1?(<font className="singlestock">{"Hurry only 1 left in stock"}</font>):(<font className="available">{"Available"}</font>)}</div>{props.promoted&&<font className="discount">{"Discount "+props.children+"%"}</font>}</>):(<font className="outofstock">Out of stock</font>)}
                </div>
            </p>
        </div>
    )
}

export default function Filtercards({data:dataJsonArray}) {

    const BestsellerCard=HOC_bestseller(ProductCard);

    function genCard(obj)
    {
        return (
            obj.promoted?<BestsellerCard {...obj} key={obj.owner}>{obj.discount}</BestsellerCard>:<ProductCard {...obj} key={obj.owner}>{obj.path}</ProductCard>
        )
    }
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {
        dataJsonArray.map(genCard)
      }
    </div>
  )
}
