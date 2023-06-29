import React from "react";

import Generate from "../component/Generate.js"
import HexaColor from "../component/HexaColor.js"
import Subscribe from "../component/Subscribe.js"

const Home = () => {
    return (
        <>
        <div className='generate'>
            <Generate />
        </div>
        <div className='hexa'>
            <HexaColor />
        </div>
        <div className='subscription'>
            <Subscribe/>
        </div>
        </>
    )
}

export default Home