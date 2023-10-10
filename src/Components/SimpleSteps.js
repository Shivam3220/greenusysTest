import React from 'react'

const SimpleSteps = () => {
  return (
    <div className='w-80'>
        <h2 className='my-4 text-center'>Simple Steps</h2>
        <div className='d-flexSimple'>
            <div><img src='/Assest/Find-Banquet-1.png' alt=''/> </div>
            <div className='arrow'>
                <img src='/Assest/Find-Banquet-Icon.png' alt=''/>
                <h2>Find Banquet</h2>
                <p>Discover custom for your home or batch formulas for restaturents and commercial</p>
            </div>
        </div>
        <div className='d-flexSimple'>
            <div className='arrow'>
                <img src='/Assest/Bookiing-Your-Space-icon.png' alt=''/>
                <h2>Find Banquet</h2>
                <p>Discover custom for your home or batch formulas for restaturents and commercial</p>
            </div>
            <div><img src='/Assest/Booking-Your-Space-2.png' alt=''/> </div>
        </div>
        <div className='d-flexSimple'>
            <div><img src='/Assest/Enjoy-Your-Moment-1.png' alt=''/> </div>
            <div className='arrow'>
                <img src='/Assest/Enjoy-your-moments-icon.png' alt=''/>
                <h2>Find Banquet</h2>
                <p>Discover custom for your home or batch formulas for restaturents and commercial</p>
            </div>
        </div>
    </div>
  )
}

export default SimpleSteps