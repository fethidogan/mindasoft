import Head from 'next/head'
import { Store } from "../utils/store"
import { CgDesktop } from 'react-icons/cg'
import { AiOutlineMobile, AiFillPieChart, AiOutlineArrowRight } from 'react-icons/ai'
import { MdBusinessCenter, MdDevices } from 'react-icons/md'
import { FaDotCircle, FaApple, FaAndroid, FaChrome, FaSass, FaReact, FaAngular } from 'react-icons/fa'
import { GiTransform, GiAirplaneDeparture, GiRoundStar } from 'react-icons/gi'
import { SiCss3, SiExpress, SiFirebase, SiFlutter, SiHtml5, SiJavascript, SiKotlin, SiMongodb, SiNextdotjs, SiNodedotjs, SiSqlite, SiSwift } from 'react-icons/si'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Home.module.css"
import iosstyles from "../styles/Ios.module.css"
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [selected, setSelected] = useState("ios")
  const [selectedTech, setSelectedTech] = useState("web")
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (state.formsent === true) {
      toast.success("Message Sent")
    }
  }, [])

  const changer = () => {
    if (selected === "ios") {
      return (

        <Container>
          <p className={styles.appdevservpara}>
            One of our specialize in app development is building iOs / iPhone mobile apps from scratch.
            Your project can be simple or complex, we can develop your <a href='https://www.mindasoft.com/ios-iphone-app-development' style={{fontWeight:600, color:"blue"}}>ios application</a> with a low budget in a short time.
            Our iOS app developers will develop apps that have a strong background, are fast and maintainable.
            We are developing ios apps for iPhone, iPad, Apple Watch, and Apple TV.
          </p>
        </Container>

      )
    }
    if (selected === "android") {
      return (

        <Container>
          <p className={styles.appdevservpara}>
            Android is one of the biggest mobile device operating systems in the market.
            Android is the biggest competitor to Apple’s iOS. More than a billion devices have android as the operating system.
            We love to develop Android apps from scratch and, we develop our client's <a href='https://www.mindasoft.com/android-app-development' style={{fontWeight:600, color:"blue"}}>android development</a> stable and fast.
            We can take your app idea to next level by developing an android app for you and stand you out from the crowd.
          </p>
        </Container>

      )
    }
    if (selected === "multi") {
      return (
        <Container>
          <p className={styles.appdevservpara}>
            Imagine an application with the same code that works on all windows, android, and iOs devices.
            You will probably ask yourself how it can be possible? This is where cross-platform application development comes in.
            With the power of <a href='https://www.mindasoft.com/cross-platform-app-development' style={{fontWeight:600, color:"blue"}}>cross-platform app development</a>, the same development can work on all devices without any bugs.
            The biggest benefit of a cross-platform app is cost less and is startup-friendly.
          </p>
        </Container>
      )
    }
    if (selected === "web") {
      return (
        <Container>
          <p className={styles.appdevservpara}>
            HTML5 is the main technology on the web, it is one of the most popular languages across the world. After 2000, Javascript language made Html websites functional and much faster.
            After 2010 javascript frameworks like React Js and Angular Js made <a href='https://www.mindasoft.com/web-app-development' style={{fontWeight:600, color:"blue"}}>web applications</a> so much faster and easy to build and deploy. We can build any web application for every industry that you will need.
          </p>

        </Container>
      )
    }
  }

  const techchanger = () => {
    if (selectedTech == "web") {
      return (
        <Container>
          <Container>
            <h4 className={styles.technologysubheading}>Languages</h4>
            <hr />
            <Row className='mt-5'>

              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiJavascript size={55} color="#f7e018" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Javascript</p>
              </Col>
              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiHtml5 size={55} color="#e54c21" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Html 5</p>
              </Col>
              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiCss3 size={55} color="#264de4" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Css 3</p>
              </Col>
              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <FaSass size={55} color="#ce679a" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Sass</p>
              </Col>

            </Row>

          </Container>

          <Container className='mt-2'>
            <h4 className={styles.technologysubheading}>Frameworks</h4>
            <hr />
            <Row className='mt-5'>

              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <FaReact size={55} color="#61dafb" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>React</p>
              </Col>
              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <FaAngular size={55} color="#de002d" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Angular</p>
              </Col>
              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiNextdotjs size={55} color="#000000" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Next Js</p>
              </Col>

            </Row>

          </Container>

          <Container className='mt-2'>
            <h4 className={styles.technologysubheading}>Backend</h4>
            <hr />
            <Row className='mt-5'>

              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiNodedotjs size={55} color="#539e43" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Node Js</p>
              </Col>

              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiExpress size={55} color="#333333" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Express</p>
              </Col>

            </Row>

          </Container>

        </Container>
      )
    }
    if (selectedTech == "mobile") {
      return (
        <Container>
          <Container>
            <h4 className={styles.technologysubheading}>Languages</h4>
            <hr />
            <Row className='mt-5'>


              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiSwift size={55} color="#fd3924" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Swift</p>
              </Col>

              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiKotlin size={55} color="#567ed9" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Kotlin</p>
              </Col>

              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiJavascript size={55} color="#f7e018" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Javascript</p>
              </Col>

            </Row>

          </Container>

          <Container className='mt-2'>
            <h4 className={styles.technologysubheading}>Frameworks</h4>
            <hr />
            <Row className='mt-5'>

              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <FaReact size={55} color="#61dafb" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>React Native</p>
              </Col>
              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiFlutter size={55} color="#075a9e" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Flutter</p>
              </Col>

            </Row>

          </Container>

          <Container className='mt-2'>
            <h4 className={styles.technologysubheading}>Database</h4>
            <hr />
            <Row className='mt-5'>

              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiFirebase size={55} color="#f7c52d" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Firebase</p>
              </Col>

              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiMongodb size={55} color="#119250" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>Mongo DB</p>
              </Col>

              <Col className='d-flex flex-column justify-content-center align-items-center'>
                <SiSqlite size={55} color="#55aee2" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                <p className={styles.technologyparatitles}>SQLite</p>
              </Col>

            </Row>

          </Container>

        </Container>
      )
    }
  }


  return (
    <div>

      <Head>
        <title>Web and Mobile App Development Company | Mindasoft</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Web and mobile app development company, we are building app development and custom software development solutions with the expert developer team."></meta>

        <meta property="og:url" content="https://www.mindasoft.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Web and Mobile App Development Company | Mindasoft" />
        <meta property="og:description" content="Web and mobile app development company, we are building app development and custom software development solutions with the expert developer team." />
        <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web and Mobile App Development Company | Mindasoft" />
        <meta name="twitter:description" content="Web and mobile app development company, we are building app development and custom software development solutions with the expert developer team." />
        <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
        <link rel="canonical" href="https://www.mindasoft.com" />
      </Head>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
      />

      {/* Heading Section*/}
      <Container className={styles.headingcontainer}>
        <h1 className={styles.headone}>We Are Building Solutions <br />For <span className={styles.successtext}>Success</span></h1>
        <h2 className={styles.headtwo}>We are an app development company, <br />We are building web applications, mobile applications, and custom software development solutions.</h2>
        <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
      </Container>

      {/* Web Mobile Startup*/}
      <Container className={styles.headerservice}>
        <Row >
          <Col xs={12} sm={12} md={12} lg={4} >
            <Container className={styles.headerweb}>
              <h2 className={styles.headerserviceweb}><CgDesktop size={30} color="#0080e9" style={{ marginTop: "-5px", marginRight: "7px" }} />Web Development</h2>
              <div className={styles.divisorweb}></div>
              <p className={`${styles.websubtitles} mt-3`}><FaDotCircle size={11} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} /><Link href="/web-app-development" passHref><a className={styles.inneraelementweb} >Web App Development</a></Link></p>
              <p className={styles.websubtitles}><FaDotCircle size={11} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} /><Link href="/single-page-apps" passHref><a className={styles.inneraelementweb} >Single Page Apps</a></Link></p>
              <p className={styles.websubtitles}><FaDotCircle size={11} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} /><Link href="/website-modernization" passHref><a className={styles.inneraelementweb} >Website Modernization</a></Link></p>
            </Container>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4}>
            <Container className={styles.headermobile}>
              <h2 className={styles.headerservicemobile}><AiOutlineMobile size={30} color="#019546" style={{ marginTop: "-5px", marginRight: "7px" }} />Mobile Development</h2>
              <div className={styles.divisormobile}></div>
              <p className={`${styles.mobilesubtitles} mt-3`}><FaDotCircle size={11} color="#019546" style={{ marginTop: "-3px", marginRight: "7px" }} /><Link href="/ios-iphone-app-development" passHref><a className={styles.inneraelementmobile} >iOs App Development</a></Link></p>
              <p className={styles.mobilesubtitles}><FaDotCircle size={11} color="#019546" style={{ marginTop: "-3px", marginRight: "7px" }} /><Link href="/android-app-development" passHref><a className={styles.inneraelementmobile} >Android App Development</a></Link></p>
              <p className={styles.mobilesubtitles}><FaDotCircle size={11} color="#019546" style={{ marginTop: "-3px", marginRight: "7px" }} /><Link href="/cross-platform-app-development" passHref><a className={styles.inneraelementmobile} >Cross Platform Apps</a></Link></p>
            </Container>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4}>
            <Container className={styles.headerstartup}>
              <h2 className={styles.headerservicestartup}><MdBusinessCenter size={30} color="#e46917" style={{ marginTop: "-5px", marginRight: "7px" }} />Startup Development</h2>
              <div className={styles.divisorstartup}></div>
              <p className={`${styles.startupsubtitles} mt-3`}><FaDotCircle size={11} color="#e46917" style={{ marginTop: "-3px", marginRight: "7px" }} /><Link href="/mvp-development" passHref><a className={styles.inneraelementstartup} >MVP Development</a></Link></p>
              <p className={styles.startupsubtitles}><FaDotCircle size={11} color="#e46917" style={{ marginTop: "-3px", marginRight: "7px" }} /><Link href="/ui-ux-design-services" passHref><a className={styles.inneraelementstartup} >UI / UX Design</a></Link></p>
              <p className={styles.startupsubtitles}><FaDotCircle size={11} color="#e46917" style={{ marginTop: "-3px", marginRight: "7px" }} /><Link href="/seo-services" passHref><a className={styles.inneraelementstartup} >SEO</a></Link></p>
            </Container>
          </Col>

        </Row>
      </Container>

      <Container >

        <Row >

          <Col xs={12} lg={6} md={6}>
            <h2 className={styles.specializedheading}>Our Awards</h2>
            <p className={styles.redefinepara}>
              Leading rating & review platforms rank Mindasoft on top software
              development companies due to our leading tech experience in development.
            </p>
          </Col>

          <Col xs={12} lg={6} md={6} style={{ marginTop: "70px" }}>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
              <img src='/images/clutch-logo.png' width={280} height={111} alt="clutch logo" />
              <Container className='d-flex justify-content-center align-items-center mt-3' style={{ marginLeft: "15px" }}>
                <GiRoundStar size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />
                <GiRoundStar size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />
                <GiRoundStar size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />
                <GiRoundStar size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />
                <GiRoundStar size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />
              </Container>
            </Container>
          </Col>

        </Row>
      </Container >

      <Container className='d-flex flex-column justify-content-center align-items-center'>
        <Link href="https://www.designrush.com/agency/web-development-companies/trends/uat-testing" passHref>
          <a><img src='/images/design-rush.png' width={248} height={118} alt="clutch logo" /></a>
        </Link>
      </Container >

      {/* Case Studies */}
      <Container>
        <h3 className={styles.casestudies}>Case Studies</h3>
        {/* case study 1 */}
        <Link href="/portfolio" passHref>
          <Row className={styles.casestudiescontainer} style={{ cursor: "pointer" }}>

            <Col className='d-flex justify-content-center align-items-center mt-5'>
              <img src='/images/budget-app.webp' width={600} height={420} className={styles.casestudiesimage} alt="budget-app-development" />
            </Col>

            <Col>

              <Container className='d-flex flex-column mt-5'>

                <h2 className={styles.casestudiesrightindustry}><AiFillPieChart size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />Financial</h2>
                <h3 className={styles.casestudiesrighttitle}>Budget Planner App</h3>
                <p className={styles.casestudiesrightpara}>Budget tracker and savings planner app, built for desktop and mobile devices.</p>

                <div className='d-flex flex-row justify-content-between'>
                  <span className={styles.casestudiesrightcountry}>Country</span>
                  <span className={styles.casestudiesrightcountrytext}>United Kingdom</span>
                </div>

                <div className='d-flex flex-row justify-content-between'>
                  <span className={styles.casestudiesrightcountry}>Technologies</span>
                  <span className={styles.casestudiesrightcountrytext}>React Native</span>
                </div>

                <div className='d-flex flex-row justify-content-between'>
                  <span className={styles.casestudiesrightcountry}>Hours Spent</span>
                  <span className={styles.casestudiesrightcountrytext}>500 Hours</span>
                </div>

              </Container>

            </Col>

          </Row>
        </Link>

        {/* Case study 2 */}
        <Link href="/portfolio" passHref>
          <Row className={styles.casestudiescontainer} style={{ cursor: "pointer" }}>

            <Col className='d-flex justify-content-center align-items-center mt-5'>
              <img src='/images/crm-development.webp' width={600} height={420} className={styles.casestudiesimage} alt="crm-development" />
            </Col>

            <Col>
              <Container className='d-flex flex-column mt-5'>

                <h2 className={styles.casestudiesrightindustry}><GiTransform size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />Digital Transformation</h2>
                <h3 className={styles.casestudiesrighttitle}>CRM Dashboard</h3>
                <p className={styles.casestudiesrightpara}>Customer relationship manager - CRM for a company to transform their old way of customer relationships to the next generation.</p>

                <div className='d-flex flex-row justify-content-between'>
                  <span className={styles.casestudiesrightcountry}>Country</span>
                  <span className={styles.casestudiesrightcountrytext}>United States</span>
                </div>

                <div className='d-flex flex-row justify-content-between'>
                  <span className={styles.casestudiesrightcountry}>Technologies</span>
                  <span className={styles.casestudiesrightcountrytext}>Next Js</span>
                </div>

                <div className='d-flex flex-row justify-content-between'>
                  <span className={styles.casestudiesrightcountry}>Hours Spent</span>
                  <span className={styles.casestudiesrightcountrytext}>800 Hours</span>
                </div>

              </Container>
            </Col>

          </Row>
        </Link>

        {/* Case study 3 */}
        <Link href="/portfolio" passHref>
          <Row className={styles.casestudiescontainer} style={{ cursor: "pointer" }}>

            <Col className='d-flex justify-content-center align-items-center mt-5'>
              <img src='/images/travel-app.webp' width={600} height={420} className={styles.casestudiesimage} alt="travel-app-development" />
            </Col>

            <Col>
              <Container className='d-flex flex-column mt-5'>

                <h2 className={styles.casestudiesrightindustry}><GiAirplaneDeparture size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />Travel</h2>
                <h3 className={styles.casestudiesrighttitle}>Booking & Travel Advisor</h3>
                <p className={styles.casestudiesrightpara}>Booking and travel advisor app for iOs and Android devices.</p>

                <div className='d-flex flex-row justify-content-between'>
                  <span className={styles.casestudiesrightcountry}>Country</span>
                  <span className={styles.casestudiesrightcountrytext}>Canada</span>
                </div>

                <div className='d-flex flex-row justify-content-between'>
                  <span className={styles.casestudiesrightcountry}>Technologies</span>
                  <span className={styles.casestudiesrightcountrytext}>Swift</span>
                </div>

                <div className='d-flex flex-row justify-content-between'>
                  <span className={styles.casestudiesrightcountry}>Hours Spent</span>
                  <span className={styles.casestudiesrightcountrytext}>720 Hours</span>
                </div>

              </Container>
            </Col>

          </Row>
        </Link>

      </Container>

      {/* Specialized Section */}
      <Container fluid className={styles.wespecialized}>
        <Container >
          <h2 className={styles.specializedheading}>We are specialized<br />problem solvers</h2>
          <h3 className={styles.specializedsubheading}>Trusted by top organizations and agencies.</h3>
          <p className={styles.specializedparalong}>We build solutions for companies and organizations and solve their main or specific problems.
            Our development team uses the latest technologies and tools that will fit best your requirements.</p>
          <p className={styles.specializedparashort}>Want to see more app ? <span className={styles.specializedshowmore}><Link href="/portfolio" passHref><a>Show More<AiOutlineArrowRight size={33} color="#0047ca" style={{ marginTop: "-3px", marginRight: "7px" }} /></a></Link></span></p>
        </Container>
      </Container>

      {/* Redefine App Development */}
      <Container className={styles.redefinecontainer}>

        <Row >

          <Col className='d-flex justify-content-center mt-5' xs={12} lg={6}>
            <h2 className={styles.redefineheading}>We redefine <br />Web and Mobile app development.</h2>
          </Col>

          <Col className='d-flex justify-content-center mt-5' xs={12} lg={6}>
            <p className={styles.redefinepara}>
              We are an app development company with a strong background. We have an expert team of web and mobile app developers.
              If you are searching for a web app development or mobile app development we are ready to build your next game-changer web or
              mobile application that fits your requirements. We can turn your idea into a web app, ios app, or Android app.
              <br />
              <br />
              We can build next-generation
              solutions with the latest web and mobile technologies for to success of your business. We have a passion for developing mobile and web app solutions for our clients and making their businesses grow.
              Customer relationships and the service quality we are providing are everything to us. We can build app and software development solutions for your individual and corporational needs.
              We are building custom software development and app solutions that will fit your budget.
            </p>
          </Col>

        </Row>
      </Container>

      {/* App Development Services*/}
      <Container >

        <h2 className={styles.appdevservices}>App Development Services</h2>
        <hr style={{ marginBottom: "30px" }} />
        <Row >

          <Col className='d-flex justify-content-center text-start' xs={12} md={12} lg={6}>

            <Container className={styles.appdevsevcontainer}>
              <h3 className={selected == "ios" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("ios")} ><FaApple size={40} color={selected == "ios" ? "#0047ca" : "green"} style={{ marginTop: "-9px", marginRight: "7px" }} />iOs App Development</h3>
              <h3 className={selected == "android" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("android")}><FaAndroid size={40} color={selected == "android" ? "#0047ca" : "green"} style={{ marginTop: "-9px", marginRight: "7px" }} />Android App Development</h3>
              <h3 className={selected == "multi" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("multi")}><MdDevices size={40} color={selected == "multi" ? "#0047ca" : "green"} style={{ marginTop: "-9px", marginRight: "7px" }} />Multi Platform App Development</h3>
              <h3 className={selected == "web" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("web")}><FaChrome size={40} color={selected == "web" ? "#0047ca" : "green"} style={{ marginTop: "-9px", marginRight: "7px" }} />Web App Development</h3>
            </Container>

          </Col>

          <Col>

            <Container className='d-flex justify-content-center' xs={12} md={12} lg={6}>
              {changer()}
            </Container>

          </Col>

        </Row>

      </Container>

      {/* Center blue item */}
      <Container fluid className={iosstyles.middleblue}>
        <Container>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={iosstyles.centerblueheading}>Mobile and Web App Development</span></Col>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={iosstyles.bluesidebutton}>Get Proposal</Button></Link></Col>
          </Row>
        </Container>
      </Container>

      {/* Technologies Section */}
      <Container style={{ marginBottom: "100px" }}>

        <Container>
          <h2 className={styles.specializedheading}>Technologies</h2>
          <p className={styles.specializedparalong}>We use latest technologies for developing scalable, secure and fast mobile and web applications. </p>

          <Row>

            <Col>

              <Container className={selectedTech == "web" ? styles.technologytitlecontainer : styles.technologytitlecontainernonselect} onClick={() => setSelectedTech("web")} xs={"12"}>
                <h3 className={selectedTech == "web" ? styles.technologyheadingblue : styles.technologyheading}>Web</h3>
                <p className={styles.technologyparalong}>We use the latest web development tools and languages for building high-quality applications that will meet your requirements.</p>
              </Container>

            </Col>

            <Col>

              <Container className={selectedTech == "mobile" ? styles.technologytitlecontainer : styles.technologytitlecontainernonselect} onClick={() => setSelectedTech("mobile")} xs={"12"}>
                <h3 className={selectedTech == "mobile" ? styles.technologyheadingblue : styles.technologyheading}>Mobile</h3>
                <p className={styles.technologyparalong}>We follow the latest mobile app development tools, frameworks, and languages for building high-quality applications loved by thousands.</p>
              </Container>

            </Col>

          </Row>

          {techchanger()}

        </Container>
      </Container>



      {/* Testimonials */}
      <Container >

        <Row >

          <Col xs={12} lg={6}>
            <h2 className={styles.specializedheading} style={{ marginBottom: "-50px" }}>Why Choose Mindasoft</h2>
          </Col>

          <Col className='mt-5' xs={12} lg={6}>

            <h3 className={styles.specializedsubheading}>Custom Software Development</h3>
            <p className={styles.redefinepara}>
              We are building high-quality, fast, and secure custom software development
              and application solutions for your individual and corporation need.
            </p>
            <h3 className={styles.specializedsubheading}>Customer Satisfaction</h3>
            <p className={styles.redefinepara}>
              We know that the highly satisfied customers will advise Mindasoft to their friends.
              We are always keeping customer satisfaction and customer relationships in the first place.
            </p>
            <h3 className={styles.specializedsubheading}>Quality</h3>
            <p className={styles.redefinepara}>
              Building high-quality web and mobile apps are one of our important priority while we are building an app.
              At every stage of the development process, we check the app for bugs and we deliver bug-free applications to our clients.
            </p>
            <h3 className={styles.specializedsubheading}>Flexibility</h3>
            <p className={styles.redefinepara}>
              While we developing the app, if a client needs a feature that didn't talk before, we can implement that feature in a short time.
            </p>
            <h3 className={styles.specializedsubheading}>Expert Team</h3>
            <p className={styles.redefinepara}>
              We have an expert team of web, mobile, and custom software developers. Each one of our developers is an expert in their field.
              We can turn your dream app idea into a fast and secure app with our expert app developer team.
            </p>
          </Col>

        </Row>
      </Container >
    </div >
  )
}
