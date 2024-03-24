/*export default function Card()
{
    return (
        <div style={{width:"200px",height:"300px",border:"1px solid black"}}>
            <center>
            <h4>Product details</h4>
            <h4>Details</h4>
            </center>
        </div>
    )
}
export default function Card()
{
    const styobj={
        width:"200px",
        height:"300px",
        backgroundColor:"pink",
        border:"1px solid black"
    }
    return (
        <div style={styobj}>
             <center>
            <h4>Product details</h4>
            <h4>Detailing</h4>
            </center>
        </div>
    )
}*/
import "./Cardstyle.css"
import obj from "./card.module.css"
import obj2 from "./diff.module.css"
import Image from "./Image";

function Details()
{
    return (
       <> 
       <h2>Electricity Repair Services</h2>
       <br />
        <p>
            24*7 available services 
            <p>
                100% guarenteed 
            </p>
        </p>
        </>
    )
}

function Bookbutton()
{
    return (
        <button className="btn">Book Now</button>
    )
}

export default function Card()
{
    const path="./pics/ece.jpg";
    return (
        <div className="card-outer">
            {/* <h4>Product details</h4>
            <center><div className={obj.btn}>Next</div>
            <div className={obj2.btn}>Prev</div>
            </center> */}
            <center>
                <Image/>
                <Details/>
                <br />
                <Bookbutton></Bookbutton>
            </center>
        </div>
    )
}