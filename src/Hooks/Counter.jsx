import { useState } from "react";

export default function Counter()
{
    // let count=1;
    const [hcount,doUpdfx]=useState(1);

    function doIncrement()
    {
        console.log("render in inc");
        // count+=1;
        // console.log(count);
        doUpdfx(hcount+1);
    }

    function doDecrement()
    {
        console.log("render in dec");
        doUpdfx(hcount-1);
    }

    function doIncrement3()
    {
        console.log("render in inc3");
        doUpdfx((hcount)=>hcount+1);
        doUpdfx((hcount)=>hcount+1);
        doUpdfx((hcount)=>hcount+1);
    }
    
    return (
        <>
            <input type="button" value="Increment" onClick={doIncrement}/>
            <input type="button" value="Decrement" onClick={doDecrement}/>
            <input type="button" value="Increment3" onClick={doIncrement3}/>
            <div>{hcount}</div>
        </>
    )
}