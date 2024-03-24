import React from 'react'
/*
function Item({name,importance,carry})
{
    let resp=name;
    if(importance>0)
    resp=resp+" ✔️";
else resp+=" ❌";
return(
    <li>{resp}</li>
)
}
*/

/*function Item({name,importance,carry})
{
    if(importance>0)
    return(
        <li>{name} ✔️😊</li>
)
else return(
    <li>{name} ❌😒</li>
)
}*/

/*function Item({carry,name,importance})
{
    return (
        <li>{name} {importance>0?"❤️":"😢"}</li>
    )
}*/

/*function Item({carry,name,importance})
{
    return(
        carry&&(<li>{name+" "+importance}</li>)
    )
}*/

/*function Item({carry,name,importance})
{
    return(
        <li>
            {name}
            <br />
            {importance>0&&carry?(<input type='button' value="Accept"></input>):(<input type='button' value="Reject"></input>)}
        </li>
    )
}*/

function Item({carry,name,importance})
{
    return (
        <li>
            {importance>0?(<u>{name+" "+"("+carry+")"}</u>):(<strike>{name+" "+"("+carry+")"}</strike>)}
        </li>
    )
}

export default function Conditionalrender() {
  return (
    <div>
      <h1>Packing list</h1>
      <ul>
        <Item carry={true} importance={9} name="books"></Item>
        <Item carry={false} importance={0} name="laptop"></Item>
        <Item carry={false} importance={6} name="pen"></Item>
        <Item carry={true} importance={13} name="sleeping bag"></Item>
      </ul>
    </div>
  )
}
