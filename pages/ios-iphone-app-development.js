import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdAttachMoney, MdTimer, MdCheck } from "react-icons/md"
import { GrAppleAppStore } from "react-icons/gr"
import { BsTools } from "react-icons/bs"
import Head from 'next/head'

const IosApp = () => {
  const [selected, setSelected] = useState("first")
  const changer = () => {
    if (selected === "first") {
      return (

        <Container>
          <p className={styles.appdevservpara}>
            It is depending on the requested app's complexity, custom UI / UX design, the number of features going to be added to the app will mainly define the cost.
            You can think about how big the app is increasing the cost.
            If you want to know how much your app going to cost you can just fill out the form at the bottom and we will reply to you as soon as possible.
          </p>
        </Container>

      )
    }
    if (selected === "second") {
      return (

        <Container>
          <p className={styles.appdevservpara}>
            The app development duration is depending on how complex and how big it is. Todo app can take 100 hours a big and complex E-commerce can take more than
            500 hours. This duration includes all the development, styling, and designs.
          </p>
        </Container>

      )
    }
    if (selected === "third") {
      return (
        <Container>
          <p className={styles.appdevservpara}>
            Our iOs / iPhone service includes.
            <br />
            - UI / UX design
            <br />
            - Development
            <br />
            - Release
            <br />
            - Maintenance & Support ( if Needed )

          </p>
        </Container>
      )
    }
    if (selected === "fourth") {
      return (
        <Container>
          <p className={styles.appdevservpara}>
            We provide customer support & maintenance after we release the app. We guarantee bug fixes if needed with no extra fees.
          </p>

        </Container>
      )
    }
  }

  return (
    <>
      <Head>
        <title>iOs / iPhone App Development Company | Mindasoft</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="We are building visually stunning, feature rich, secure and high quality native ios and iphone apps for your invidual and corporational needs with our team of expert native ios and iphone developers."></meta>

        <meta property="og:url" content="https://www.mindasoft.com/ios-iphone-app-development" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="iOs / iPhone App Development Company | Mindasoft" />
        <meta property="og:description" content="We are building visually stunning, feature rich, secure and high quality native ios and iphone apps for your invidual and corporational needs with our team of expert native ios and iphone developers." />
        <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="iOs / iPhone App Development Company | Mindasoft" />
        <meta name="twitter:description" content="We are building visually stunning, feature rich, secure and high quality native ios and iphone apps for your invidual and corporational needs with our team of expert native ios and iphone developers." />
        <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
        <link rel="canonical" href="https://www.mindasoft.com/ios-iphone-app-development" />
      </Head>

      <Container fluid className={styles.ioscontainer}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <h1 className={styles.headone}>iOs / iPhone App Development </h1>
              <h2 className={styles.headtwo}>We are building innovative iOs / iPhone applications.</h2>
              <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
            </Col>
            <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
              <img src='/images/ios-app-development.svg' width={600} height={300} className={styles.iosimage} alt="ios app development" />
            </Col>
          </Row>

          <Container className={styles.headservicecontainer}>
            <span className={styles.serviceshead}>Services</span>
            <div className='d-flex'>
              <Row>
                <Col>
                  <span className={styles.serviceparatext}>iOs / iPhone <br />App Development</span>
                </Col>
                <Col>
                  <span className={styles.serviceparatext}>Apple Watch <br />App Development</span>
                </Col>
                <Col>
                  <span className={styles.serviceparatext}>Apple TV <br />App Development</span>
                </Col>
              </Row>
            </div>
          </Container>

        </Container>

      </Container>


      {/* Industry Leader */}
      <Container className='mt-5'>
        <h2 className={styles.industryheader}>Industry Leader <strong>iOs</strong> / <strong>iPhone app development company</strong></h2>
        <h3 className={styles.industrypara}>We turn your dream ios and iPhone app idea into application</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>iOs is one of the most popular operating systems in the mobile phone industry.
          There are more than 1 billion devices on the earth using the iOs operating system.
          We have an expert team of ios and iPhone developers that builds applications since the time iPhone launched.</p>

        <p className={styles.industryparalong}>When iPhone and iOs launched in 2007, the mobile phone technology completely changed. Today, smartphone users do all the jobs through apps. For example, reading the news,
          sending messages, or maybe ridesharing.</p>

        <p className={styles.industryparalong}>Apple’s App Store ecosystem facilitated over half a trillion dollars in commerce in 2019, which means if you want to generate profit
          Apple's app store platform is the best platform for your application. Big companies like Instagram, Snapchat launched their apps on the Apple app store. At Mindasoft we develop iOs and iPhone apps for clients with our expert ios and iPhone app developers.
          We helped a lot of clients and helped them to make a profit on apps.</p>

        <p className={styles.industryparalong}>Our team of ios developers is developing industry-leading applications with stunning visuals.
          The app design and development process needs so much time, experience and also needs testing for bugs. We are building apps and testing them over and over again.</p>

        <p className={styles.industryparalong}>We are an iOs and iPhone app design and development company that designs and develop custom apps.
          We are also building applications for Apple Watch and Apple Tv. We turn our client's ideas into app visually stunning, fast, and secure applications.
          We specialized in iOs app development, iPhone app development and we are building industry leader applications.</p>

      </Container>

      {/* Center blue item */}
      <Container fluid className={styles.wespecialized}>
        <Container >
          <Row >
            <Col>
              <h2 className={styles.specializedheading}>We build <br />iOs / iPhone apps</h2>
              <p className={styles.specializedsubheading}>We are passionate to learn new technologies
                <br />and love to build iOs and iPhone apps.</p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Description  */}
      <Container className='mt-5'>
        <h3 className={styles.descheader}>iPhone, iPad, Apple Watch and Apple TV apps</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>iPhone, iPad, Apple Watch, and Apple TVs are all running on the ios operating system. One of the most powerful features
          of the iOs is you can run one single iOs application on many devices with no extra effort. With some small modifications, one single iOs app can run on all Apple devices.
          At Mindasoft we are designing and developing iOs apps for iPhone, iPad, Apple Watches, and Apple TVs from scratch. The apps we built for iOs are well tested and securely built
          fast and have stunning visuals.</p>

      </Container>

      <Container className='mt-5'>
        <h3 className={styles.descheader}>IoT Development</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>IoT devices are increasing every day and helping make our lives easier. Now IoT devices can able to connect the internet and can connect to your phone.
          At Mindasoft our IoT developers can able to connect IoT devices to the iOs operating system and make them work together.</p>
      </Container>

      <Container className='mt-5'>
        <h3 className={styles.descheader}>Website Integration</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Do you have a website but don't have an iOs or iPhone app?
          We can turn your website or web app into an iOs application.
          We can also integrate your website's authentication system or Api into iPhone / iOs app. Our Web Developers and iPhone developers
          will collaborate and turn your existing website into iOs and iPhone apps.</p>
      </Container>

      {/* iphone increase profit */}
      <Container className='mt-5'>
        <h2 className={styles.industryheader}><strong>iOs</strong> / <strong>iPhone app development</strong> increases profit</h2>
        <h3 className={styles.industrypara}>We know that iOs / iPhone apps increases company values and profits</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>We know stunning apps will get so many downloads and get so much profit to the app owner company. We are superior at building user experiences and beautifully design user interfaces.
          iPhone apps generate millions of revenues and make app owner companies grow faster.
          We design iOs and iPhone apps regarding iOs Standards and follow these UI / UX design rules. These rules and structures are our priority in designing apps.
          We make sure our team of iPhone app developers works on high standards using clean and stunning design.
        </p>
      </Container>

      {/* Center blue item */}
      <Container fluid className={styles.middleblue}>
        <Container>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>High Quality iOs / iPhone App Development</span></Col>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
          </Row>
        </Container>
      </Container>

      {/* Questions */}
      <Container>
        <h2 className={styles.appdevservices}>Questions</h2>
        <hr style={{ marginBottom: "20px" }} />
        <Container>
          <Row >

            <Col className='d-flex justify-content-center text-start mt-5' xs={12} sm={12} md={12} lg={6}>

              <Container className={styles.appdevsevcontainer}>
                <h3 className={selected == "first" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("first")} ><MdAttachMoney size={35} style={{ marginRight: "8px" }} color="green" />How much do iOs / iPhone app development services cost?</h3>
                <h3 className={selected == "second" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("second")}><MdTimer size={35} style={{ marginRight: "8px" }} color="green" />How long do iOs / iPhone app development services take?</h3>
                <h3 className={selected == "third" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("third")}><GrAppleAppStore size={35} style={{ marginRight: "8px" }} color="green" />What services do iOs / iPhone application development service include?</h3>
                <h3 className={selected == "fourth" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("fourth")}><BsTools size={35} style={{ marginRight: "8px" }} color="green" />Do you provide maintenance and support services free as part of development?</h3>
              </Container>

            </Col>

            <Col className='d-flex justify-content-center mt-5' xs={12} sm={12} md={12} lg={6}>
              <Container className={styles.questionsmobile}>
                {changer()}
              </Container>
            </Col>

          </Row>

        </Container>
      </Container>

      <Container>
        <Row className={styles.casestudiescontainer}>

          <Col className='d-flex justify-content-center align-items-center mt-5'>
            <img src='/images/ios-app-developers.png' width={440} height={360} className={styles.casestudiesimage} alt="ios app developers" />
          </Col>

          <Col>

            <Container className='d-flex flex-column mt-5'>

              <h2 className={styles.bottomsideheading}>We Specialized in iOs App Development</h2>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are an iOs / iPhone app development company that builds fast, secure and stable iOs / iPhone apps with stunning visuals with an expert team of iOs developers.</p>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are following iOs development guides and standards.</p>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are building Industry leader apps and following the latest trends.</p>

            </Container>

          </Col>

        </Row>
      </Container>

    </>
  )
}

export default IosApp