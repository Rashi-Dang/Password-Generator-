import React, { useEffect, useRef, useState } from 'react'

const Passgenerate = () => {
    const [input,setInput]=useState("");
    const [length,setLength]=useState(20);
    const [special,setSpecial]=useState(false);
    const [number,setNumber]=useState(false);
    const passref=useRef(null);

     //Generate password when input

     function  handlepassword(){
        let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(special){
            chars+="#@&$";
        }
        if(number){
            chars+= "0123456789";
        }
        let pass="";
        for (let i=0;i<length;i++){
            let ind=Math.floor(Math.random()*chars.length);
            pass+=chars[ind];
        }
        console.log(pass)
        setInput(pass);
    }

    const copy=()=>{
        window.navigator.clipboard.writeText(input)
        // passref.current.style.backgroundColor="green";
        passref.current.select()
        // alert(" password copied")
    }

    useEffect(()=>{
        handlepassword();
    },[length,special,number])

  return (
    <>
    <div className='main'>
        <h1 className='icon'><i class="fa-solid fa-lock"></i></h1>
        <h1 className='h1'>Password Generator</h1>
        <p className='p'> Create strong and secure passwords to keep your account safe online.</p>

    <div className='wrapper'>
    <div className="input-wrapper">
        <input type="text" name="password" className='input' placeholder='' value={input} ref={passref} readOnly />
    </div>
    <div className="button-wrapper">
        <button className='copy-btn' onClick={copy}><i class="fa-solid fa-copy"></i> Copy</button>
    </div>
    </div>

    <div className="features">
    <div className="">
        <label htmlFor="" className='length-label'>Password Length: {length}</label>
    </div>
    <div>
        <input type="range" name="length" id="" className='length' min={5} max={20}  onChange={(e)=>{setLength(e.target.value)}}/>
    </div>
    <div className='more-function'>
        <label htmlFor="" className='numbers-label'>Numbers</label>  
        <input type="checkbox" name="numbers" id="" className='numbers' onChange={()=>setNumber(!number)}/> 
    </div>
    <div>
        <label htmlFor="" className='special-label'>Special Characters</label>
        <input type="checkbox" name="special" id="" className='special' onChange={()=>setSpecial(!special)}/>
    </div>
    </div>


    </div>

    </>
  )
}

export default Passgenerate
