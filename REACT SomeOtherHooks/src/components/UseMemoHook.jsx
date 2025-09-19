import React,{useState,useMemo} from 'react';
import {fibonacciBigInt} from './constants/helper'

function UseMemoHook() {

    const [isDarkTheme,setIsDarkTheme] = useState(false);
    const [number,setNumber] = useState(0);

    const fibonacci = useMemo(()=>fibonacciBigInt(number));

    function toggleDarkTheme(){

        setIsDarkTheme(!isDarkTheme);
    }
  
  return (
    <div className=
    
    {isDarkTheme ? 
    ('w-1/2 h-[500px] border-solid border-black border-2 p-5 ')
     : 
     ('w-1/2 h-[500px] bg-black border-solid border-white border-2 p-5 ')}>
    
     <button className='cursor-pointer'
      onClick={toggleDarkTheme}
     >{isDarkTheme ? "🌚" : "☀️"}</button>

     <div className='mt-5'>
     <input 
     type="number"
     className={isDarkTheme ?
        ('bg-gray-700 text-white rounded-3xl pl-2')
         : 
         ('bg-white text-black rounded-3xl pl-2')}
     value={number}
     onChange={(event)=>setNumber(event.target.value)}

     />

     <h1 className={isDarkTheme ? 
        ('mt-5 text-black text-2xl') : 
        ('mt-5 text-white text-2xl')}>
            The fibonacci series for {number} is : {fibonacci}</h1>
     </div>
    
    </div>
  )
}

export default UseMemoHook