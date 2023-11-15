import React, {useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {message} from 'antd'
import '../css/HomePage.css'; // Import the CSS file

const HomePage = () => {
  const [loginUser, setLoginUser] = useState('')
  const navigate = useNavigate(); // Access the navigate function

  useEffect( () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(user) {
      setLoginUser(user)
    }
  },[] )
  const handleLogout = () => {
    // Perform logout logic here
    // For example, remove the user from localStorage and reset the state
    localStorage.removeItem('user');
    setLoginUser('');
    message.success("Logout Successfully");
    navigate('/login');
  };
  const handleLogin = () => {
    // Navigate to the login page
    navigate('/login');
  };

  const handleSignup = () => {
    // Navigate to the signup page
    navigate('/register');
  };
  return (
    <>
      <div className="wrapper">
  {/* This is being used to create the top navigation bar of the website */}
  <div className="topbar">
    <div className="topnav">
      <img
        src="./images/expenses.png"
        alt="..."
        height="30px"
        width="30px"
        id="navimage"
      />
    </div>
    <div className="topnav" id="nova">
      NovaWallet
    </div>
    <div className="topnav"><Link to="/features" > Services</Link></div>
    <div className="topnav">Testimonials</div>
    <div className="topnav">Contact</div>
    <div className="topnav">About Us</div>
    <div className="topnav"> {loginUser && loginUser.name}</div>
    <div className='login-signup'>
    {loginUser ? (
          // User is logged in, show Logout button
          <button onClick={handleLogout}>Logout</button>
        ) : (
          // User is not logged in, show Login/Signup button
          <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Signup</button>
          </div>
        )}
    </div>

  </div>
  {/* Creating the main front image banner */}
  <div className="mainviewpage">
    <div className="contant">
      <div className="maintitle">
        <div className="heading">
          <pre id="text">
            {"                            "}NOVAWALLET{"\n"}
            {"                            "}TEAM_144{"\n"}
            {"                        "}
          </pre>
        </div>
      </div>
      <div className="viewparagraph">
        Place from where FINANCIAL INDEPENCY BEGINS!!
      </div>
      <div className="viewelements">
        <div className="button">
          <div className="getstarted">
            <p id="btext">Get Started</p>
          </div>
          <div className="learmore">
            <p id="btext">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* singup window */}
  <div className="usersignup">
    <div className="signup">
      <h1>Sign up Today!!</h1>
    </div>
    <div className="userbutton">
      <div className="button2">
        <p id="btext">Get Started</p>
      </div>
      <div className="button1">
        <p id="btext">Learn More</p>
      </div>
    </div>
  </div>
  {/* features card */}
  {/* total feature card:4 */}
  {/* feature card number:1 */}
  <div className="featurecard">
    <div className="featurebox">
      <div className="leftimage">
        <img
          src="./images/3d-render-hand-holding-transaction-receipt-bill_107791-16721.avif"
          alt="..."
          height="450px"
          width="500px"
          id="imageleft"
        />
      </div>
      <div className="righttext">
        <h1>Record Daily Transaction!!</h1>
        {/* <br></br> */}
        {/* <p>MULTIPLE EXPENSE CATEGORIES LIKE FOOD, SHOPPING, GIFT ETC</p> */}
        <p>
          Efficiently manage your financial activities with our finance
          software's easy-to-use "Record Daily Transactions" feature. Stay on
          top of your income, expenses, and financial health with precision and
          clarity.
        </p>
        <div className="userbutton">
          <div className="cardbutton2">
            <p id="btext">Get Started</p>
          </div>
          <div className="cardbutton1">
            <p id="btext">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* feature card number:2 */}
  <div className="featurecard">
    <div className="featurebox">
      <div className="righttext">
        <h1>Visualize Expense Reports!!</h1>
        {/* <br></br> */}
        <p>
          Gain valuable insights into your financial data with "Visualize
          Expense Reports" feature. Visual representations of your spending
          patterns and financial reports make it easier to manage your finances
          effectively
        </p>
        <div className="userbutton">
          <div className="cardbutton2">
            <p id="btext">Get Started</p>
          </div>
          <div className="cardbutton1">
            <p id="btext">Learn More</p>
          </div>
        </div>
      </div>
      <div className="leftimage">
        <img
          src="./images/Untitled design.png"
          alt="..."
          height="450px"
          width="500px"
          id="imageleft"
        />
      </div>
    </div>
  </div>
  {/* feature card number:3 */}
  <div className="featurecard">
    <div className="featurebox">
      <div className="leftimage">
        <img
          src="images/istockphoto-518678368-612x612.jpg"
          alt="..."
          height="450px"
          width="500px"
          id="imageleft"
        />
      </div>
      <div className="righttext">
        <h1>Achieve Your Financial Goals</h1>
        {/* <br></br> */}
        <p>
          Turn your financial dreams into reality with our finance software's
          "Achieve Your Financial Goals" feature. This feature empowers you to
          set, track, and achieve your goals with ease
        </p>
        <div className="userbutton">
          <div className="cardbutton2">
            <p id="btext">Get Started</p>
          </div>
          <div className="cardbutton1">
            <p id="btext">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* feature card number:4 */}
  <div className="featurecard">
    <div className="featurebox">
      <div className="righttext">
        <h1>Split Expense with Family and Friends!!</h1>
        {/* <br></br> */}
        <p>
          With the "Split Expenses with Family and Friends" feature, you can
          nurture your relationships without the financial stress. This
          user-friendly tool makes it convenient and hassle-free to manage
          shared finances,
        </p>
        <div className="userbutton">
          <div className="cardbutton2">
            <p id="btext">Get Started</p>
          </div>
          <div className="cardbutton1">
            <p id="btext">Learn More</p>
          </div>
        </div>
      </div>
      <div className="leftimage">
        <img
          src="./images/GettyImages_1311472388.jpeg"
          alt="..."
          height="450px"
          width="500px"
          id="imageleft"
        />
      </div>
    </div>
  </div>
  <div className="review">
    <h1>Reviews!!</h1>
  </div>
  {/* Creating testimonilas cards */}
  <div className="testimonials">
    <div className="cards">
      <div className="imagename">
        <img
          src="./images/1689061875140.jpg"
          alt="..."
          height="120px"
          width="120px"
          id="cardimage"
        />
        <div className="boxname">
          <div id="cardname">
            <h1>Aryaman</h1>
            <p>Team_Member</p>
          </div>
        </div>
      </div>
      <div id="founderinfo">
        TeamMate_1 Aryaman from second year computer science and engineering
        mnnit allahabad
      </div>
    </div>
    <div className="cards">
      <div className="imagename">
        <img
          src="./images/1689061875140.jpg"
          alt="..."
          height="120px"
          width="120px"
          id="cardimage"
        />
        <div className="boxname">
          <div id="cardname">
            <h1>Aryaman</h1>
            <p>Team_Member</p>
          </div>
        </div>
      </div>
      <div id="founderinfo">
        TeamMate_1 Aryaman from second year computer science and engineering
        mnnit allahabad
      </div>
    </div>
    <div className="cards">
      <div className="imagename">
        <img
          src="./images/1689061875140.jpg"
          alt="..."
          height="120px"
          width="120px"
          id="cardimage"
        />
        <div className="boxname">
          <div id="cardname">
            <h1>Aryaman</h1>
            <p>Team_Member</p>
          </div>
        </div>
      </div>
      <div id="founderinfo">
        TeamMate_1 Aryaman from second year computer science and engineering
        mnnit allahabad
      </div>
    </div>
  </div>
  {/* creation of testimoials and founder cards completed */}
  {/* Companies trusting us */}
  <div className="trustblock">
    <div className="trusted">
      <h1>Trusted by</h1>
    </div>
    <div className="companies">
      <img src="./images/image-removebg-preview (6).png" alt="..." id="companyimages" />
      <img src="./images/PayPal.svg-removebg-preview.png" alt="..." id="companyimage2" />
      <img src="./images/Forbes.png" alt="..." id="companyimages3" />
      <img src="./images/Razorpay.png" alt="..." id="companyimages" />
    </div>
  </div>
  {/* Companies trusting block completed */}
  {/* another signup window for the user */}
  <div className="usersignup">
    <div className="signup">
      <h1>Sign up Today!!</h1>
    </div>
    <div className="userbutton">
      <div className="button2">
        <p id="btext">Get Started</p>
      </div>
      <div className="button1">
        <p id="btext">Learn More</p>
      </div>
    </div>
  </div>
  {/* signup window completed */}
  {/* Founder informations */}
  <div className="testimonials">
    <div className="cards">
      <div className="imagename">
        <img
          src="./images/IMG_20231109_140808_115.jpg"
          alt="..."
          height="120px"
          width="120px"
          id="cardimage"
        />
        <div className="boxname">
          <div id="cardname">
            <h1>Amandeep</h1>
            <p>Team_Member</p>
          </div>
        </div>
      </div>
      <div id="founderinfo">
        TeamMate_1: Amandeep Singh from Second year, Computer Science and
        Engineering, MNNIT Allahabad
      </div>
    </div>
    <div className="cards">
      <div className="imagename">
        <img
          src="./images/1689061875140.jpg"
          alt="..."
          height="120px"
          width="120px"
          id="cardimage"
        />
        <div className="boxname">
          <div id="cardname">
            <h1>Aryaman</h1>
            <p>Team_Member</p>
          </div>
        </div>
      </div>
      <div id="founderinfo">
        TeamMate_2: Aryaman from Second year, Computer Science and Engineering,
        MNNIT Allahabad
      </div>
    </div>
    <div className="cards">
      <div className="imagename">
        <img
          src="./images/1689061875140.jpg"
          alt="..."
          height="120px"
          width="120px"
          id="cardimage"
        />
        <div className="boxname">
          <div id="cardname">
            <h1>Aradhya</h1>
            <p>Team_Member</p>
          </div>
        </div>
      </div>
      <div id="founderinfo">
        TeamMate_3: Aradhya from Second year, Computer Science and Engineering,
        MNNIT Allahabad
      </div>
    </div>
  </div>
  {/* Founder information completed */}
  <div className="lastsection">
    <div className="thought">
      <h1>Financial Planning</h1>
      <p>IS ABOUT MORE THAN JUST GOOD ADVIDE OR INVESTMENT RETURNS </p>
      <p>IT'S ABOUT PROVIDING GUIDANCE THAT YOU CAN TRUST</p>
    </div>
  </div>
  <div className="text">
    <p>So what you have been waiting for?</p>
    <p>Sign Up now and start your FINANCE JOURNEY!!</p>
  </div>
  <div className="usersignup">
    <div className="signup">
      <h1>Sign up Today!!</h1>
    </div>
    <div className="userbutton">
      <div className="button2">
        <p id="btext">Get Started</p>
      </div>
      <div className="button1">
        <p id="btext">Learn More</p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default HomePage
