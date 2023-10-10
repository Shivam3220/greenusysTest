import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='TopNav'>
                <div className='w-90 d-flex'>
                <div>
                    <ul>
                        <li className='cursor'><img alt='' src='/Assest/Facebook.png' /></li>
                        <li className='cursor'><img alt='' src='/Assest/Twitter.png' /></li>
                        <li className='cursor'><img alt='' src='/Assest/Google-Plus.png' /></li>
                        <li className='cursor'><img alt='' src='/Assest/Instagram.png' /></li>
                    </ul>
                </div>
                <div>
                    <ul className='user'>
                        <li><img src='/Assest/Login.png' alt='' /><span>Log in</span></li>
                        <element></element>

                        <li><img src='/Assest/Register.png' alt='' /><span>Register Now</span></li>
                        <element></element>

                        <li><img src='/Assest/Become-Member.png' alt='' /><span>Become Member</span></li>
                    </ul>
                </div>
                </div>
            </div>

            <div className='mainNav'>
                <div className='w-90 d-flex'> 
                    <div><img src='/Assest/BanquetBooking-Logo.png' width={220} alt='' /></div>
                    <div className='rightMainNav'>
                        <div className='navdata  gap-1'>
                            <img src='/Assest/phone.png' alt='' />
                            <div >
                                <h5>Call Us : (+84)123 456 789</h5>
                                <h5 className='text-gray'>E-mail : support@banquetbooking.com</h5>
                            </div>
                        </div>
                        <div className='navdata  gap-1'>
                            <img src='/Assest/Working-Hours.png' alt='' />
                            <div >
                                <h5>working Hours</h5>
                                <h5 className='text-gray'>Mon-sun (8:00am - 12:00am)</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex w-90 menuBar'>
                <ul className='d-flex'> 
                    <li>Banglore</li>
                    <li>Chennai</li>
                    <li>Delhi</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Kolkata</li>
                    <li>Mumbai</li>
                    <li>Noida</li>
                </ul>
                <div>
                    <div class="container">
                        <input type="text" name="text" class="input" placeholder="Search Cities"/>
                            <button class="search__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="#efeff1"></path>
                                </svg>
                            </button>
                    </div>
                </div>
            </div>

            {/* bannner */}
            <div className='banner relative'>
                <img src='/Assest/Slider-Main.jpg' alt=''/>
                <div className='absolute top-40 left-10'>
                    <h3 className='text-xl'>Find <span className='text-red'>Banquet</span> near by </h3>
                    <h3 className='text-xl'>at best price</h3>
                    <button className='btn-theme m-4 bannerBtn'>Get Started!</button>
                </div>
                <div className='d-flex w-50 gap-1'>
                    <input type='text' placeholder='Badarpur New Delhi' className='input1' />
                    <input type='date'  />
                    <input type='text' placeholder='people 500' />
                    <button className='btn-theme formbtn'>Search</button>
                </div>
            </div>



            
        </>
    )
}

export default Navbar