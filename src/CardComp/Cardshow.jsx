import React from 'react';
import "./Cardstyle.css";
import JsonArray from './JSONary';
/*
function ProductCard2({company,model,owner,price,design,children})
{
    return (
        <div className='card-outer'>
            <p style={design}>
                Company:{company}
            </p>
            <p style={{backgroundColor:design.backgroundColor,padding:design.padding}}>
                Price:{price}
            </p>
            <p>
                Model:{model}
            </p>
            <p>
                Owner:{owner}
            </p>
            <p>
                <b>Details</b>
            </p>
            <p>
                {children}
            </p>
        </div>
    )
}
*/

function ProductCard(props)
{
    return (
        <div className='card-outer'>
            <p>
                company:{props.company}
            </p>
            <p>
                model:{props.model}
            </p>
            <p>
                price:{props.price}
            </p>
            <p>
                owner:{props.owner}
            </p>
            <p>
                <b>Details</b>
            </p>
            <p>
                <center>
                    <img src={props.path} alt="" width={200} height={200} />
                </center>
                <p style={{overflow: "auto"}}>
                    {props.children}
                </p>
            </p>
        </div>
    )

}

export default function Cardshow(comp) {

    var specificCompAry=JsonArray.filter((obj)=>{
        if(obj.company===comp)
        return obj;
    })
    console.log(specificCompAry);
    function genCard(obj)
    {
        return (
            <ProductCard {...obj} key={obj.owner}>
                {obj.path}
            </ProductCard>
        )
    }
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {/* <ProductCard2 key="dell" company="dell" price="50000" model="inspiron" owner="raman" design={{backgroundColor:"yellow",padding:"15px",border:"1px solid red"}}>
        its the best of all. high speed super fast processor. you must buy it. 10 years warranty. high quality graphics and sound system.
      </ProductCard2>
      <ProductCard2 key="HP" company="HP" price="60000" model="pavilion" owner="maninder" design={{backgroundColor:"yellow",color:"purple",fontSize:"50px"}}>its the toughest of all laptops. small and compact. gives shigh performance. best working laptop for office use.</ProductCard2>  */}
      {
        /*
        JsonArray.map((obj)=>
        {
            return (
                <ProductCard {...obj} key={obj.owner}>
                    {obj.path}
                </ProductCard>
            )
        })
        */
        // specificCompAry.map(genCard)// better method for above approach
        specificCompAry.map(genCard)
      }
    </div>
  )
}
