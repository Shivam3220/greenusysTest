import React from 'react'

const MapImage = () => {
    return (
        <div>
            <div className='relative'>
                <img src='/Assest/Map.png' className='mapImg' alt=''/>
                <div className='absolute setPositionRight'>
                    <img src='/Assest/Img.png'  alt=''/>
                </div>
                <div className='absolute setPositionLeft'>
                    <h2>World's Fastest Growing Banquet Chain</h2>
                    <p>More destination. More ease. More affordable</p>
                    <div className='d-flex' style={{justifyContent:"start" ,gap:"2rem", marginTop:"2rem"}}>
                        <div className=''>
                            <h3>800+</h3>
                            <h4>Cities</h4>
                        </div>
                        <div className=''>
                            <h3>43000+</h3>
                            <h4>Exclusive Banquet</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapImage