import React, { useContext } from 'react'
import { contextEmail } from './Home'
import Listitems from './Listitems';

export default function Dashboard() {
    const activeuser=useContext(contextEmail);
  return (
    <div>
      <h1>Welcome: {activeuser}</h1>
      <Listitems/>
    </div>
  )
}
