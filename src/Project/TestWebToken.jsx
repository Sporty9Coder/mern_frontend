import React from 'react'
import { doValidateTokenWithAxios } from '../services/user-controller'

export default function TestWebToken() {
    async function clickHandler()
    {
        const servermsg=await doValidateTokenWithAxios();
        if(servermsg.data.status===true)
        {
            const obj=JSON.stringify(servermsg.data.item);
            alert("token validated"+" "+servermsg.data.message+" "+obj);
        }
    }

  return (
    <div>
      <button className='w-40 h-16 p-2 border border-black' onClick={clickHandler}>Do Validate Token</button>
    </div>
  )
}
