import React from 'react'
import './Flight.scss';
// reacticons
import { CiLocationOn } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
// img
import logo1 from './assets/image/logo1.png'
import logo from './assets/image/Logo.png'
import first from './assets/image/1st.jpg'
import second from './assets/image/2nd.jpg'
import fourth from './assets/image/5thA.jpg'
import fifth from './assets/image/3rd.jpg'
import lugage from './assets/image/Illustration.jpg'
//icon
import mail from './assets/icon/Illustration.svg'
import flightsvg from './assets/icon/Frame 81.svg'
import flighticon from './assets/icon/Vector.svg'
import licon from './assets/icon/Vector (1).svg'
import twitter from './assets/icon/entypo-social_twitter-with-circle.svg'
import { isContentEditable } from '@testing-library/user-event/dist/utils';
import { BiColor } from 'react-icons/bi';
//BGVIDEO
import bgv from './assets/image/bg.mp4'
import bgv1 from './assets/image/BG1.mp4'
function Flight() {

  return (
    <div>

      <div className='a1'>
      <video className='videoTag' autoPlay loop muted>
      <source src={bgv1} type='video/mp4' />
</video>
        {/* bg image */}
      </div>

      <div className='container'>
        <div className='a2'>
          <a>+977 9878787845</a>
          <a>let’sbookit@gmail.com</a>
        </div>

        <div className='a3'>
          <img src={flighticon} />
          <img src={licon} />
          <img src={twitter} />
        </div>

        <div className='a4'>
          <div className='a4a'>
            <button>Log In</button>
          </div>

          <div className='a4b'>
            <button>Sign Up</button>
          </div>

          <div className='a4ab'>

          </div>
        </div>

        <div className='a5'>
          <select>
            <option> NRs</option>
          </select>
        </div>
      </div>

      <div>
        <br></br>
        <hr></hr>
      </div>

      <div className='b'>
        <div className='b1'>
        <img className='d66c' src={flightsvg} />
         <b>Sky Fly High</b>
          {/* <img src={logo1} /> */}
        </div>

        <div className='b2'>
          <li>About</li>
          <li>Explore</li>
          <li>Bookings</li>
          <li>Find Ticket</li>
          <li>Contact Us</li>
        </div>

      </div>


      <div className='c'>
        <div className='c1'>
          <p>Say Yes to The World</p>
        </div>

        <div className='c2'>
          <p> FlightBookingApp simplifies travel with real-time flight info, personalized recommendations, <br></br> and price comparisons. Users can easily find the best routes and deals, check seat availability, <br></br>With secure payment options and an intuitive interface, it ensures a smooth and hassle-free <br></br>travel planning experience.</p>
        </div>

      </div>

      <div className='overall'>
      <div className='c3'>
        <p>Departure Airport</p>

      </div>

      <div className='c3a'>
        <CiLocationOn />
      </div>

      <div className='c3b'>
        <input type='text' placeholder='Where are you now?' />
      </div>




      <div className='c4'>
        <p>Arrival Airport</p>

      </div>

      <div className='c4a'>
        <CiLocationOn />
      </div>

      <div className='c4b'>
        <input type='text' placeholder='Where are you now?' />
      </div>



      <div className='c5'>
        <p>Date</p>

      </div>

      {/* <div className='c5a'>
        <FaCalendar />
      </div> */}

      <div className='c5b'>

        <input type='date' placeholder='Where are you leaving?' />
      </div>


      <div className='c6'>
        <p>Travellers</p>

      </div>

      <div className='c6a'>
        <IoMdContact />
      </div>

      <div className='c6b'>
        <input type='text' placeholder='Number of passenger' />
      </div>
      </div>
      {/* c7 */}

      <div className='c7' >

        <button>Search Your Flight</button>

      </div>


      {/* SECOND PAGE */}


      <div className='imgarrange'> {/* overall div for 2nd page  */}

        <div className='d'>
          <div className='d1'>
            <p>Top Destinations</p>
          </div>

          <div className='d1a'>
            <p>Dui in in orci fermentum a. Maecenas nunc id ut auctor <br></br> curabitur pellentesque id et tristique. Pellentesque et a <br></br>nisl aliquam eget. Nam velit duis in mauris arcu vivamus <br></br>amet turpis in. In bibendum placerat quam ullamcorper <br></br>accumsan felis. Velit vitae pellentesque sagittis et <br></br>consequat sit donec. Donec aenean vivamus ullamcorper <br></br>urna aliquet faucibus lacus aliquet.</p>
          </div>

          <div className='d1b'>
            <button>Discover</button>
          </div>

        </div>

        {/* second page images */}
        <div className=''>


          <div className='firstrow'>
            <div className='d2a'>
              <img className='d2b' src={first} />
              <img className='d2c' src={flightsvg} />
              <span>Tokyo, <a>Japan</a> <br></br> Rs. 24,000 onwards.</span>
            </div>



            {/* 2ndimg */}


            <div className='d3a'>
              <img className='d3b' src={second} />
              <img className='d3c' src={flightsvg} />
              <span>Kuching, <a>Malaysia</a> <br></br> Rs. 64,000 onwards.</span>
            </div>




            {/* 3rd img */}


            <div className='d34a'>
              <img className='d34b' src={fifth} />
              <img className='d34c' src={flightsvg} />
              <span>Kathmandu, <a>Nepal</a> <br></br> Rs. 25,000 onwards.</span>
            </div>


          </div>

          {/* 4th img second row */}

          <div className='secondrow'>

            <div className='d4a'>
              <img className='d4b' src={second} />
              <img className='d4c' src={flightsvg} />
              <span>Kuching, <a>Malaysia</a> <br></br> Rs. 64,000 onwards.</span>
            </div>


            {/* 5th image */}


            <div className='d5a'>
              <img className='d5b' src={fourth} />
              <img className='d5c' src={flightsvg} />
              <span>Sydney, <a>Australia</a> <br></br> Rs. 74,000 onwards.</span>
            </div>


            {/* 6th image */}

            <div className='d6a'>
              <img className='d6b' src={first} />
              <img className='d6c' src={flightsvg} />
              <span>Tokyo, <a>Japan</a> <br></br> Rs. 1,02,000 onwards.</span>
            </div>

          </div>
        </div>





      </div>

      {/*third page */}

      <div className='thirdpage'>

        <div className='point1'>

          <div className='point1a'>
            <p> <span>01 </span>  Instant Ticket</p>
          </div>
          <div className='point1b'>
            <p>Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit.</p>
          </div>

          {/* 2nd point */}
          <div className='point2a'>
            <p> <span>02 </span>Worldwide Flight</p>
          </div>
          <div className='point2b'>
            <p>Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit.</p>
          </div>

          {/* 3rd point*/}

          <div className='point3a'>
            <p> <span>03 </span>  Trusted Booking</p>
          </div>
          <div className='point3b'>
            <p>Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus mauris hac nisi habitasse donec. Vitae integer massa in blandit.</p>
          </div>

        </div>

        {/* box2 */}
        <div className='box2'>
          <div className='box2title'>
            <h1>We Offer Best Services </h1>
          </div>

          <div className='box2button'>
            <button>Learn More</button>
          </div>
          <div className='lugage'>
            <img src={lugage} />
          </div>
        </div>
      </div>

      {/* Fourthpage */}

      <div className='fourthpage'>
        <div className='fourthall'>
          <div className='fourthtitle'>
            <p>Subscribe</p>
            <p>to Get Notified About Latest Deals & Offers</p>
          </div>

          <div className='fourthpara'>
            <p>Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus <br></br> mauris hac nisi habitasse donec. Vitae integer massa in blandit.</p>
          </div>

          <div className='fourthform'>
            <div className='mailicon'>
              <MdEmail />
            </div>
            <div className='mailplace'>
              <input type='text' placeholder='Email Address'></input>
            </div>
            <button>Subscribe</button>
          </div>

          <div className='fourthicon'>
            <img src={mail} />
          </div>
        </div>
      </div>

      {/* 5th page */}

      <div className='fifthpage'>
        <div className='letsbookicon'>
        <img src={logo}/>
          <p>
            Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus <br></br> mauris hac nisi habitasse donec. Vitae integer massa in blandit.
          </p>
        </div>

      </div>

      <div className='hrtag1'>
        <hr></hr>
        <br></br>
      </div>

      <div className='footnav'>
        <a>About</a>
        <a>Explore</a>
        <a>Bookings</a>
        <a>Find Ticket</a>
        <a>Contact Us</a>
      </div>

      <div className='hrtag2'>
        <br></br>
        <hr></hr>
      </div>

      <div></div>







    </div>


  )
}

export default Flight