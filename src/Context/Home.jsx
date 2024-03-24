import React, { createContext } from 'react'
import Dashboard from './Dashboard';
import JSONary from '../CardComp/JSONary'

const contextEmail=createContext();
const contextJson=createContext();

export default function Home() {
    const activeuser="bcebti@gmail.com";
    const {Provider}=contextEmail;//contextEmail created using createContext is a global object that returns a component called Provider
  return (
    <div>
        <contextJson.Provider value={JSONary}>
      <Provider value={activeuser}>
        <Dashboard/>
      </Provider>
      </contextJson.Provider>
    </div>
  )
}
export {contextEmail,contextJson}
