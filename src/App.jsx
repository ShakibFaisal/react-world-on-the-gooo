

import { Suspense } from 'react';
import './App.css'

import Countries from './components/countries/Countries'
const countrypromise= fetch("https://openapi.programming-hero.com/api/all").then(res=>res.json());

function App() {
  

  return (
    <>
      
      <h1 className=" text-6xl font-bold text-center">Countries</h1>
      <Suspense fallback={<h1 className='text-center'>loading data......</h1>
      }>
        <Countries countriespromise={countrypromise}></Countries>
      </Suspense>
      
    
    </>
  )
}

export default App
