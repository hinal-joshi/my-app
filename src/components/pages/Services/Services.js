import React from 'react'
import HeroSection from '../../HeroSection'

import {homeObjTwo,homeObjThree} from '../Data'

function Home() {
    return (
        <>

           <HeroSection {...homeObjThree}/> 
           <HeroSection {...homeObjTwo}/> 

        </>
    )
}

export default Home
