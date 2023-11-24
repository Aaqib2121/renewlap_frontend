import React,{useState} from 'react'
import {ReactComponent as EmptyS} from "./Empty.svg"
import { Link } from "react-router-dom";
// Import 'RiArrowRightSLine' from 'react-icons/ri' namespace
import { RiArrowRightSLine } from 'react-icons/ri';

// Import 'TiArrowRight' from 'react-icons/ti' namespace
import { TiArrowRight } from 'react-icons/ti';

// Import 'BsArrowBarRight' from 'react-icons/bs' namespace
import { BsArrowBarRight } from 'react-icons/bs';

// ... rest of your code



const Empty = () => {
    const [arrow, setarrow] = useState(false)
    return (
        <div className = 'Emptycart'>
            <EmptyS className = 'illustration'/>
            <div className = 'textempty'>
            <h1>
                Wow Such an empty Cart
            </h1>
             
            <Link to = '/shop' className ='goshop' onMouseOver = {()=>{setarrow(true)}} onMouseLeave = {()=>{setarrow(false)}}>
            Go Shop
            {!arrow ? <RiArrowRightSLine className = 'arrow' /> : <BsArrowBarRight className = 'arrow'/> }
            </Link>
            </div>

            

        </div>
    )
}

export default Empty
