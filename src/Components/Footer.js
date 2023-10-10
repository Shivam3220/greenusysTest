import React from 'react';

function Footer() {
  const footerContainerStyle = {
    backgroundColor: '#F9F3CC',
    padding: '20px',
  };


  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap', // Allow items to wrap to the next line on smaller screens
  };

  const sectionStyle = {
    flex: 1,
    textAlign: 'center',
    position: 'relative',
    marginBottom: '20px', // Add space between sections
  };

  const mediaQueryStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow items to wrap to the next line on smaller screens
  };

  const lineStyle = {
    // position: 'absolute',
    // top: '10%', // Position the line at the middle of the section
    //left: '12%',
    // transform: 'translateX(-50%)',
    width: '2px',
    height: '180px', // Set the height to 50% of the section
    background: 'linear-gradient(to bottom, red 20%, grey 10%)',
    marginRight: '10px',
  };

  const contentStyle = {
    marginLeft: '10px',
    flex: 1,
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0, // Remove default padding from the list
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const formItemStyle = {
    marginBottom: '10px',
  };

  const copyrightStyle = {
    backgroundColor: '#E9B824',
    padding: '10px',
    textAlign: 'center',
    color: 'black',
    width: '100%', // Make copyright section full width
  };

  return (
    <div>
      <div style={footerContainerStyle}>
        <footer style={footerStyle}>
          {/* Section 1: Paragraph with logo, Apple, and Google Store */}
          <div style={{ ...sectionStyle, ...mediaQueryStyle }}>
            <div>
              <div>
                <p style={{color:'#6d6d6d',margin:20}}>
                  <img src="/Assest/BanquetBooking-Logo.png" alt="Logo" style={{ width: '250px', height: '50px' ,margin:"0.5rem 0" }} /><br />
                  BanquetBooking is committed towards building an organization centered on the highest standards of transparency and corporate
                </p>
              </div>

              <div>
                <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/Assest/playstore.jpg" alt="Download on the App Store" style={{ width: '120px', height: '40px' }} />
                </a>
                <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/Assest/applestore.jpg" alt="Get it on Google Play" style={{ width: '120px', height: '40px' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Heading with list items */}
          <div style={{ ...sectionStyle, ...mediaQueryStyle, }}>
            <div style={lineStyle}></div>
            <div>
              <ul style={listStyle}>
                <li style={{color:'#6d6d6d'}}>USEFUL LINKS</li>
                <br></br>
                <br></br>
                <li style={{color:'#6d6d6d'}}>About Us</li>
                <li style={{color:'#6d6d6d'}}>Team/careers</li>
                <li style={{color:'#6d6d6d'}}>News Blogs</li>
                <li style={{color:'#6d6d6d'}}>Support</li>
                <li style={{color:'#6d6d6d'}}>Frames</li>
                <li style={{color:'#6d6d6d'}}>Circle</li>
                <li style={{color:'#6d6d6d'}}>Press Kit</li>
              </ul>
            </div>
          </div>

          {/* Section 3: List items only with the same line */}
          <div style={{ ...sectionStyle, ...mediaQueryStyle, }}>
            <div style={lineStyle}></div>
            <div>
              <ul style={listStyle}>
                <li style={{color:'#6d6d6d'}}>Term & conditions</li>
                <li style={{color:'#6d6d6d'}}>Privacy Policy</li>
                <li style={{color:'#6d6d6d'}}>Guest Policy</li>
                <li style={{color:'#6d6d6d'}}>Responsible Disclosure</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Heading with a form and the same line */}
          <div style={{ ...sectionStyle, ...mediaQueryStyle, }}>

            <div style={lineStyle}></div>
            
            <div style={formStyle}>
            <div> <h2 >News Letter</h2></div>
            <p>Subscribe to our news letter</p>
              <div style={formItemStyle}>
                <input type="text" id="input1" name="input1" />
              </div>
              <div style={formItemStyle}>
                <input type="text" id="input2" name="input2" />
              </div>
              <button  type="submit" className=' btn-theme' style={{width:"100%"}}>Submit</button>
            </div>
          </div>
        </footer>
      </div>

      {/* Copyright Section */}
      <div style={copyrightStyle}>
        &copy; 2023 Your Website. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;