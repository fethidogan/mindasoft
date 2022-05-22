import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdAttachMoney, MdCheck } from "react-icons/md"
import { GiLaddersPlatform } from "react-icons/gi"
import { DiAndroid } from "react-icons/di"
import { AiOutlineLike } from "react-icons/ai"
import Head from 'next/head'

const AndroidApp = () => {
  const [selected, setSelected] = useState("first")
  const changer = () => {
    if (selected === "first") {
      return (

        <Container>
          <p className={styles.appdevservpara}>
            The cost of app development is depending on the complexity of the requested android app.
            Authentication, likes, or any extra functionality will increase the amount of time spent. Also, it will increase the cost.
          </p>
        </Container>

      )
    }
    if (selected === "second") {
      return (

        <Container>
          <p className={styles.appdevservpara}>
            Steps of developing an android app.
            <br />
            - Market Analysis
            <br />
            - UI / UX Design
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
    if (selected === "third") {
      return (
        <Container>
          <p className={styles.appdevservpara}>
            Having an Android app will get you a share of the huge android app market. The companies which have android apps grow faster and make profits from apps when compared
            to companies has no android apps.
          </p>
        </Container>
      )
    }
    if (selected === "fourth") {
      return (
        <Container>
          <p className={styles.appdevservpara}>
            The first benefit of having an android app is low cost. Depending on the complexity, you can have an app in a short time with a low budget. The second benefit of having an android app is
            profit, your idea can turn into profit in a short amount of time.
          </p>

        </Container>
      )
    }
  }

  return (
    <>
      <Head>
        <title>Android App Development Company | Mindasoft</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="We are building fast, feature-rich, secure, and high-quality native android apps for your individual and corporational needs with our team of expert native android developers."></meta>

        <meta property="og:url" content="https://www.mindasoft.com/android-app-development" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Android App Development Company | Mindasoft" />
        <meta property="og:description" content="We are building fast, feature-rich, secure, and high-quality native android apps for your individual and corporational needs with our team of expert native android developers." />
        <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Android App Development Company | Mindasoft" />
        <meta name="twitter:description" content="We are building fast, feature-rich, secure, and high-quality native android apps for your individual and corporational needs with our team of expert native android developers." />
        <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
        <link rel="canonical" href="https://www.mindasoft.com/android-app-development" />
      </Head>

      <Container fluid className={styles.ioscontainer}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <h1 className={styles.headone}>Android App Development </h1>
              <h2 className={styles.headtwo}>We are an Android app development company, we are building top-notch android apps.</h2>
              <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
            </Col>
            <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
              <img src='/images/android-app-development.png' width={350} height={350} className={styles.iosimage} alt="android app development" />
            </Col>
          </Row>

          <Container className={styles.headservicecontainer}>
            <span className={styles.serviceshead}>Services</span>
            <div className='d-flex'>
              <Row>
                <Col>
                  <span className={styles.serviceparatext}>Android <br />App Development</span>
                </Col>
                <Col>
                  <span className={styles.serviceparatext}>Android Watch <br />App Development</span>
                </Col>
                <Col>
                  <span className={styles.serviceparatext}>Android TV <br />App Development</span>
                </Col>
              </Row>
            </div>
          </Container>

        </Container>

      </Container>


      {/* Industry Leader */}
      <Container className='mt-5'>
        <h2 className={styles.industryheader}>Industry Leader <strong>Android app development company</strong></h2>
        <h3 className={styles.industrypara}>We can design your dream android app idea with our expert team of developers</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>When android was launched in the smartphone market in 2008, google grabbed the huge cake piece from the smartphone operating system market.
          Today almost %90 smartphones have the Android operating system. That's making android dominates the smartphone market. Android operating system is lightweight, fast, and low cost
          which is why most people have smartphones with android installed as the operating system.
          <br />
          <br />
          When things come to development most companies will choose android app development because of the market size of android devices.
          There are more than a billion devices has an android operating system and that is a big opportunity for companies to get into these devices as an application. If you have a company or startup
          you should have an android app to get the benefits of this market. We can build your android app without the team of expert android developers.
          With the huge growth of Android devices, android became the biggest competitor to the iOs operating system. Android app development
          is the best choice for companies, startups, and enterprises who wants to make profits from apps. We have android app development experts for developing fast, secure, and visually stunning Android applications.
          <br />
          <br />
          We also offer native android app development services for individuals, companies, startups, and enterprises. We build Android apps from scratch and follow the
          Android Design, development guides, and rules. For many companies, Android app development is key to success to make profits and grow the company faster than before. Our team of android developers
          has solid knowledge and expertise in their fields.
        </p>


      </Container>

      {/* Center blue item */}
      <Container fluid className={styles.wespecializedandroid}>
        <Container >
          <Row >
            <Col>
              <h2 className={styles.specializedheading}>We build <br />Android apps</h2>
              <p className={styles.specializedsubheading}>We are an android app development company, <br />We are passionate to build new things.</p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Description  */}
      <Container className='mt-5'>
        <h3 className={styles.descheader}>Android, Android Watch and Android TV apps</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Android smartphones, android tablets, android watches, and android tv as the name on it are all android and they are all using the android operating system.
          We can develop your android app and we can run this application on all of the devices that use android. For most companies, individuals, and startups it's a huge opportunity to get their android apps.
          The second benefit is low cost. You do not need to create an app for each device and that is the very very cool thing to reduce the costs.
          At Mindasoft we are developing and designing Android apps for Android smartphones, android tablets, android watches, and Android TVs. Our expert team of android app developers will create
          fast and rock-solid apps for companies, individuals that want to grow fast.</p>

      </Container>

      <Container className='mt-5'>
        <h3 className={styles.descheader}>IoT Development</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Do you have Arduino or raspberry pi project that needs to be connected to the android app?
          We can connect your Arduino or raspberry pi project to the android operating system.
          The project size doesn't matter, we can connect your device to the android app with our expert team developers.
          IoT and android developers will work together to build rock-solid IoT devices for you. </p>
      </Container>

      <Container className='mt-5'>
        <h3 className={styles.descheader}>Website Integration to Android App</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Most companies have a website and most of them don't know how to turn their website into an Android app. We can turn your website into an android app
          By making just some of the modifications to your website and you will be ready to get into this huge android app market and grow profits.</p>
      </Container>

      {/* iphone increase profit */}
      <Container className='mt-5'>
        <h2 className={styles.industryheader}><strong>Android app development</strong> increases profit</h2>
        <h3 className={styles.industrypara}>Having an Android App will increase the value and profit of your company</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>The number of smartphones is is increasing every day.
          There are more than a billion smartphones with android. When you have an app  idea and turn that into an android app,
          that will make you get the benefits of the android app market and will increase the profit of your company.
          We are building applications loved by the users,
          grow your company faster with the help of high-quality and well-developed android applications.
          We design android apps following the android Standards and UI / UX design rules.
          These rules and guides are our priority for android developers while designing apps.
          We are making sure our team of android app developers delivers high-quality apps.
        </p>
      </Container>

      {/* Center blue item */}
      <Container fluid className={styles.middleblue}>
        <Container>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Android App Development Service</span></Col>
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

            <Col className='d-flex justify-content-center text-start mt-5' xs={12} md={12} lg={6}>

              <Container className={styles.appdevsevcontainer}>
                <h3 className={selected == "first" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("first")} ><MdAttachMoney size={35} style={{ marginRight: "8px" }} color="green" />How much does the android development service cost?</h3>
                <h3 className={selected == "second" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("second")}><GiLaddersPlatform size={35} style={{ marginRight: "8px" }} color="green" />Android app development steps?</h3>
                <h3 className={selected == "third" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("third")}><DiAndroid size={35} style={{ marginRight: "8px" }} color="green" />Why do you need an Android app?</h3>
                <h3 className={selected == "fourth" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("fourth")}><AiOutlineLike size={35} style={{ marginRight: "8px" }} color="green" />Benefits of having an Android app?</h3>
              </Container>

            </Col>

            <Col className='d-flex justify-content-center mt-5' xs={12} md={12} lg={6}>

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
            <img src='/images/android-app-developers.png' width={440} height={360} className={styles.androidbottomimage} alt="android app developers" />
          </Col>

          <Col>

            <Container className='d-flex flex-column mt-5'>

              <h2 className={styles.bottomsideheading}>Hire Android development experts</h2>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are an Android app development company, we build rock-solid android apps with stunning visuals with an expert team of android developers.</p>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are following Android development guides and standards.</p>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are building High-Quality Android apps with our expert team.</p>

            </Container>

          </Col>

        </Row>
      </Container>

    </>
  )
}

export default AndroidApp