import React, {useEffect} from 'react'
import {  useNavigate, useLocation } from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import styles from '../css/HomePage.module.css'; // Import the CSS file

const HomePage = () => {

  const location =useLocation();
  const navigate =useNavigate();
  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <Layout>
      <>
      <div className={styles.wrapper}>
        {/* Creating the main front image banner */}
        <div className={styles.mainviewpage}>
          <div className={styles.content}>
            <div className={styles.maintitle}>
              <div className={styles.heading}>
                <pre id={styles.text}>
                  {"                            "}NOVAWALLET{"\n"}
                  {"                            "}TEAM_144{"\n"}
                </pre>
              </div>
            </div>
            <div className={styles.viewparagraph}>
              <br></br>
              Place from where FINANCIAL INDEPENCY BEGINS!!
            </div>
            <div className={styles.viewelements}>
              <div className={styles.button}>
                <div className={styles.getstarted}>
                  <p id={styles.btext}>Get Started</p>
                </div>
                <div className={styles.learmore}>
                  <p id={styles.btext}>Learn More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* singup window */}
        <div className={styles.usersignup}>
          <div className={styles.signup}>
            <h1>Sign up Today!!</h1>
          </div>
          <div className={styles.userbutton}>
            <div className={styles.button2}>
              <p id={styles.btext}>Get Started</p>
            </div>
            <div className={styles.button1}>
              <p id={styles.btext}>Learn More</p>
            </div>
          </div>
        </div>
        {/* features card */}
        {/* total feature card:4 */}
        {/* feature card number:1 */}
        <div id='featurecard1' className={styles.featurecard}>
          <div className={styles.featurebox}>
            <div className={styles.leftimage}>
              <img
                src="./images/3d-render-hand-holding-transaction-receipt-bill_107791-16721.avif"
                alt="..."
                height="450px"
                width="500px"
                id={styles.imageleft}
              />
            </div>
            <div className={styles.righttext}>
              <h1>Record Daily Transaction!!</h1>
              {/* <br></br> */}
              {/* <p>MULTIPLE EXPENSE CATEGORIES LIKE FOOD, SHOPPING, GIFT ETC</p> */}
              <p>
                Efficiently manage your financial activities with our finance
                software's easy-to-use "Record Daily Transactions" feature. Stay on
                top of your income, expenses, and financial health with precision and
                clarity.
              </p>
              <div className={styles.userbutton}>
                <div className={styles.cardbutton2}>
                  <p id={styles.btext}>Get Started</p>
                </div>
                <div className={styles.cardbutton1}>
                  <p id={styles.btext}>Learn More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* feature card number:2 */}
        <div className={styles.featurecard}>
          <div className={styles.featurebox}>
            <div className={styles.righttext}>
              <h1>Visualize Expense Reports!!</h1>
              {/* <br></br> */}
              <p>
                Gain valuable insights into your financial data with "Visualize
                Expense Reports" feature. Visual representations of your spending
                patterns and financial reports make it easier to manage your finances
                effectively
              </p>
              <div className={styles.userbutton}>
                <div className={styles.cardbutton2}>
                  <p id={styles.btext}>Get Started</p>
                </div>
                <div className={styles.cardbutton1}>
                  <p id={styles.btext}>Learn More</p>
                </div>
              </div>
            </div>
            <div className={styles.leftimage}>
              <img
                src="./images/Untitled design.png"
                alt="..."
                height="450px"
                width="500px"
                id={styles.imageleft}
              />
            </div>
          </div>
        </div>
        {/* feature card number:3 */}
        <div className={styles.featurecard}>
          <div className={styles.featurebox}>
            <div className={styles.leftimage}>
              <img
                src="images/istockphoto-518678368-612x612.jpg"
                alt="..."
                height="450px"
                width="500px"
                id={styles.imageleft}
              />
            </div>
            <div className={styles.righttext}>
              <h1>Achieve Your Financial Goals</h1>
              {/* <br></br> */}
              <p>
                Turn your financial dreams into reality with our finance software's
                "Achieve Your Financial Goals" feature. This feature empowers you to
                set, track, and achieve your goals with ease
              </p>
              <div className={styles.userbutton}>
                <div className={styles.cardbutton2}>
                  <p id={styles.btext}>Get Started</p>
                </div>
                <div className={styles.cardbutton1}>
                  <p id={styles.btext}>Learn More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* feature card number:4 */}
        <div className={styles.featurecard}>
          <div className={styles.featurebox}>
            <div className={styles.righttext}>
              <h1>Split Expense with Family and Friends!!</h1>
              {/* <br></br> */}
              <p>
                With the "Split Expenses with Family and Friends" feature, you can
                nurture your relationships without the financial stress. This
                user-friendly tool makes it convenient and hassle-free to manage
                shared finances,
              </p>
              <div className={styles.userbutton}>
                <div className={styles.cardbutton2}>
                  <p id={styles.btext}>Get Started</p>
                </div>
                <div className={styles.cardbutton1}>
                  <p id={styles.btext}>Learn More</p>
                </div>
              </div>
            </div>
            <div className={styles.leftimage}>
              <img
                src="./images/GettyImages_1311472388.jpeg"
                alt="..."
                height="450px"
                width="500px"
                id={styles.imageleft}
              />
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <h1>Reviews!!</h1>
        </div>
        {/* Creating testimonilas cards */}
        <div id='testimonials' className={styles.testimonials}>
          <div className={styles.cards}>
            <div className={styles.imagename}>
              <img
                src="./images/1689061875140.jpg"
                alt="..."
                height="120px"
                width="120px"
                id={styles.cardimage}
              />
              <div className={styles.boxname}>
                <div id={styles.cardname}>
                  <h1 id={styles.smalltext}>Aryaman</h1>
                  <p id={styles.smalltext}>Team_Member</p>
                </div>
              </div>
            </div>
            <div id={styles.founderinfo}>
              TeamMate_1 Aryaman from second year computer science and engineering
              mnnit allahabad
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imagename}>
              <img
                src="./images/1689061875140.jpg"
                alt="..."
                height="120px"
                width="120px"
                id={styles.cardimage}
              />
              <div className={styles.boxname}>
                <div id={styles.cardname}>
                  <h1 id={styles.smalltext}>Aryaman</h1>
                  <p id={styles.smalltext}>Team_Member</p>
                </div>
              </div>
            </div>
            <div id={styles.founderinfo}>
              TeamMate_1 Aryaman from second year computer science and engineering
              mnnit allahabad
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imagename}>
              <img
                src="./images/1689061875140.jpg"
                alt="..."
                height="120px"
                width="120px"
                id={styles.cardimage}
              />
              <div className={styles.boxname}>
                <div id={styles.cardname}>
                  <h1 id={styles.smalltext}>Aryaman</h1>
                  <p id={styles.smalltext}>Team_Member</p>
                </div>
              </div>
            </div>
            <div id={styles.founderinfo}>
              TeamMate_1 Aryaman from second year computer science and engineering
              mnnit allahabad
            </div>
          </div>
        </div>
        {/* creation of testimoials and founder cards completed */}
        {/* Companies trusting us */}
        <div className={styles.trustblock}>
          <div className={styles.trusted}>
            <h1>Trusted by</h1>
          </div>
          <div className={styles.companies}>
            <img src="./images/image-removebg-preview (6).png" alt="..." id={styles.companyimages} />
            <img src="./images/PayPal.svg-removebg-preview.png" alt="..." id={styles.companyimage2} />
            <img src="./images/Forbes.png" alt="..." id={styles.companyimages3} />
            <img src="./images/Razorpay.png" alt="..." id={styles.companyimages} />
          </div>
        </div>
        {/* Companies trusting block completed */}
        {/* another signup window for the user */}
        <div className={styles.usersignup}>
          <div className={styles.signup}>
            <h1>Sign up Today!!</h1>
          </div>
          <div className={styles.userbutton}>
            <div className={styles.button2}>
              <p id={styles.btext}>Get Started</p>
            </div>
            <div className={styles.button1}>
              <p id={styles.btext}>Learn More</p>
            </div>
          </div>
        </div>
        {/* signup window completed */}
        {/* Founder informations */}
        <div id='team' className={styles.testimonials}>
          <div className={styles.cards}>
            <div className={styles.imagename}>
              <img
                src="./images/IMG_20231109_140808_115.jpg"
                alt="..."
                height="120px"
                width="120px"
                id={styles.cardimage}
              />
              <div className={styles.boxname}>
                <div id={styles.cardname}>
                  <h1 id={styles.smalltext}>Amandeep</h1>
                  <p id={styles.smalltext}>Team_Member</p>
                </div>
              </div>
            </div>
            <div id={styles.founderinfo}>
              TeamMate_1: Amandeep Singh from Second year, Computer Science and
              Engineering, MNNIT Allahabad
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imagename}>
              <img
                src="./images/1689061875140.jpg"
                alt="..."
                height="120px"
                width="120px"
                id={styles.cardimage}
              />
              <div className={styles.boxname}>
                <div id={styles.cardname}>
                  <h1 id={styles.smalltext}>Aryaman</h1>
                  <p id={styles.smalltext}>Team_Member</p>
                </div>
              </div>
            </div>
            <div id={styles.founderinfo}>
              TeamMate_2: Aryaman from Second year, Computer Science and Engineering,
              MNNIT Allahabad
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.imagename}>
              <img
                src="./images/1689061875140.jpg"
                alt="..."
                height="120px"
                width="120px"
                id={styles.cardimage}
              />
              <div className={styles.boxname}>
                <div id={styles.cardname}>
                  <h1 id={styles.smalltext}>Aradhya</h1>
                  <p id={styles.smalltext}>Team_Member</p>
                </div>
              </div>
            </div>
            <div id={styles.founderinfo}>
              TeamMate_3: Aradhya from Second year, Computer Science and Engineering,
              MNNIT Allahabad
            </div>
          </div>
        </div>
        {/* Founder information completed */}
        <div className={styles.lastsection}>
          <div className={styles.thought}>
            <h1>Financial Planning</h1>
            <p>IS ABOUT MORE THAN JUST GOOD ADVIDE OR INVESTMENT RETURNS </p>
            <p>IT'S ABOUT PROVIDING GUIDANCE THAT YOU CAN TRUST</p>
          </div>
        </div>
        <div className={styles.text}>
          <p>So what you have been waiting for?</p>
          <p>Sign Up now and start your FINANCE JOURNEY!!</p>
        </div>
        <div className={styles.usersignup}>
          <div className={styles.signup}>
            <h1>Sign up Today!!</h1>
          </div>
          <div className={styles.userbutton}>
            <div className={styles.button2}>
              <p id={styles.btext}>Get Started</p>
            </div>
            <div className={styles.button1}>
              <p id={styles.btext}>Learn More</p>
            </div>
          </div>
        </div>
      </div>
      </>
      </Layout>
  )
}

export default HomePage
