import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdCheck, MdOutlineBusinessCenter, MdOutlineAddBusiness } from "react-icons/md"
import { FaReact } from "react-icons/fa"
import { SiFlutter } from "react-icons/si"
import { RiCheckboxMultipleFill } from "react-icons/ri"
import { GiProfit } from "react-icons/gi"
import Head from 'next/head'


const CrossPlatform = () => {
  const [selected, setSelected] = useState("first")
  const changer = () => {
    if (selected === "first") {
      return (

        <Container>
          <p className={styles.appdevservpara}>
            Cross-platform app development is, one single code base having the ability to run on multiple operating systems without any extra effort. that strategy is
            chosen by many companies and startups who want to pay less for app development.
          </p>
        </Container>

      )
    }
    if (selected === "second") {
      return (

        <Container>
          <p className={styles.appdevservpara}>
            Yes, if you want to get into the market fast with a low budget your first choice will be cross-platform app development.
            Cross-platform apps are built fast when we compare them to native apps.
          </p>
        </Container>

      )
    }
    if (selected === "third") {
      return (
        <Container>
          <p className={styles.appdevservpara}>
            When you have a startup you will probably want to release your app in a short time with a low budget. A cross-platform app development strategy best fits startups.
          </p>
        </Container>
      )
    }
    if (selected === "fourth") {
      return (
        <Container>
          <p className={styles.appdevservpara}>
            The first benefit of cross-platform app development is costs low, that's why most startups and companies choose cross-platform app development
            instead of native app development.
            The second benefit is development duration is so fast, our expert developers will develop one single code base and make this code run on multiple operating systems.
          </p>

        </Container>
      )
    }
  }

  return (
    <>
      <Head>
        <title>Cross-Platform App Development Company | Mindasoft</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="We are building high quality, fast and secure cross-platform apps that will meet your requirements with our expert cross platform app developer team."></meta>

        <meta property="og:url" content="https://www.mindasoft.com/cross-platform-app-development" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cross-Platform App Development Company | Mindasoft" />
        <meta property="og:description" content="We are building high quality, fast and secure cross-platform apps that will meet your requirements with our expert cross platform app developer team." />
        <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cross-Platform App Development Company | Mindasoft" />
        <meta name="twitter:description" content="We are building high quality, fast and secure cross-platform apps that will meet your requirements with our expert cross platform app developer team." />
        <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
        <link rel="canonical" href="https://www.mindasoft.com/cross-platform-app-development" />
      </Head>

      <Container fluid className={styles.ioscontainer}>
        <Container>
          <Row>

            <Col xs={12} sm={12} md={12} lg={6}>
              <h1 className={styles.headone}>Cross-Platform App Development </h1>
              <h2 className={styles.headtwo}>We develop High-Quality Cross-Platform apps that will reduce your costs and increase your profit.</h2>
              <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
            </Col>

            <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
              <img src='/images/cross-platform-app-development.png' width={350} height={350} className={styles.iosimage} alt="cross platform app development" />
            </Col>
          </Row>

          <Container className={styles.headservicecontainer}>
            <span className={styles.serviceshead}>Services</span>
            <div className='d-flex'>
              <Row>
                <Col>
                  <span className={styles.serviceparatext}>Cross Platform <br />App Development</span>
                </Col>
              </Row>
            </div>
          </Container>

        </Container>

      </Container>


      {/* Industry Leader */}
      <Container className='mt-5'>
        <h2 className={styles.industryheader}>High Quality <strong>Cross-Platform app development company</strong></h2>
        <h3 className={styles.industrypara}>We are a Cross-platform app development company that has expert team of developers</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Imagine that one single code schema can run on multiple devices and multiple operating systems without any issue, that is very cool, right?
          Yes, it's cool and possible with cross-platform app development. There are lots of benefits to developing an app using a cross-platform method. One of the biggest advantages of them is
          their low cost.
          <br />
          <br />
          When you choose a cross-platform app development strategy for your applications, developers will spend fewer hours building the application. Because one single code can run on android devices and ios based devices.
          That will reduce the cost of building the app and make you spend less money. Native app development is not so efficient for startups.
          Because native app development needs 2 different apps for both ios and android. That costs much more than compared to cross-platform.
          <br />
          <br />
          We offer cross-platform app development services with our expert team of specialized in building cross-platform apps. The cross-platform apps we develop are rock solid, fast, and secure.
          We follow the ios and android app development guides and rules while we are developing the cross-platform apps.
        </p>

      </Container>

      {/* Center blue item */}
      <Container fluid className={styles.wespecializedcross}>
        <Container >
          <Row >
            <Col>
              <h2 className={styles.specializedheading}>We build <br />Cross-platform apps</h2>
              <p className={styles.specializedsubheading}>We love to build next-generation cross-platform apps.</p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Description  */}
      <Container className='mt-5'>
        <h3 className={styles.descheader}>What is Cross-Platform app development?</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Cross-Platform app development is one code base that can run on different operating systems.
          There are lots of benefits that choosing cross-platform app development, Let us explain some of them. One of the biggest benefits of choosing cross-platform app development
          is development duration. You don't need a separate app for ios and android when you choose cross-platform app development. That is reducing the total amount of time spent on
          development and that reduces the cost.
        </p>

      </Container>

      <Container className='mt-5'>
        <h3 className={styles.descheader}>Low Cost</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>A cross-platform app development strategy will reduce your costs.
          One single app will be built for your needs and that will run on multiple operating systems.
          This approach is mostly chosen by startups. Cross-platform app development will make you spend less when compared to native ios or native android app development.</p>
      </Container>

      {/* Case studies kopya */}
      <Container >

        <Row className={styles.casestudiescontainer} >

          <Col className='d-flex justify-content-center align-items-center mt-5'>
            <img src='/images/cross-platform-app-image.png' width={450} height={285} className={styles.crosstechimage} alt="cross platform apps" />
          </Col>

          <Col>

            <Container className='d-flex flex-column mt-5'>

              <h2 className={styles.casestudiesrightindustry}>Cross-Platform Development</h2>
              <span className={styles.casestudiesrighttitle}>Technologies</span>
              <p className={styles.casestudiesrightpara}>We develop cross-platform apps using React Native and Flutter with a team of expert cross-platform app developers.</p>
              <div className='d-flex'>
                <div>
                  <FaReact size={80} color="#61dafb" style={{ marginRight: "35px" }} />
                  <p className={styles.casestudiesrightpara}>React Native</p>
                </div>

                <div>
                  <SiFlutter size={80} color="#69b7f8" style={{ marginLeft: "25px" }} />
                  <p className={styles.casestudiesrightpara} style={{ marginLeft: "35px" }}>Flutter</p>
                </div>

              </div>
            </Container>

          </Col>

        </Row>
      </Container>


      {/* iphone increase profit */}
      <Container className='mt-5'>
        <h2 className={styles.industryheader}><strong>Cross-platform app development</strong> increases profit</h2>
        <h3 className={styles.industrypara}>Cross-platform app development reduces costs and increases profits</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>If you have an idea and want to turn that into a profit, you will probably don't know how to do it. There is an easy and efficient way to turn that app idea into real ios and android app.
          That's called cross-platform app development. When you choose a cross-platform app development strategy for your app development, you will spend less on development and it will be on the app store in a short time.
          Because the amount of time spent on cross-platform app development is less than compared to native app development. The number of apps on the App Store and the
          number of smartphone devices is increasing every day. We can turn your app idea into a cross-platform app with our expert team of app developers and we can make you get profit from your well-designed and developed app.
        </p>
      </Container>

      {/* Center blue item */}
      <Container fluid className={styles.middleblue}>
        <Container>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Cross Platform App Development</span></Col>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
          </Row>
        </Container>
      </Container>

      {/*  */}
      <Container>
        <h2 className={styles.appdevservices}>Questions about cross-platform</h2>
        <hr style={{ marginBottom: "20px" }} />
        <Container>
          <Row >

            <Col className='d-flex justify-content-center text-start mt-5' xs={12} md={6} lg={6}>

              <Container className={styles.appdevsevcontainer}>
                <h3 className={selected == "first" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("first")} ><RiCheckboxMultipleFill size={35} style={{ marginRight: "8px" }} color="green" />What is cross-platform app development?</h3>
                <h3 className={selected == "second" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("second")}><MdOutlineBusinessCenter size={35} style={{ marginRight: "8px" }} color="green" />Is cross-platform good for MVP?</h3>
                <h3 className={selected == "third" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("third")}><MdOutlineAddBusiness size={35} style={{ marginRight: "8px" }} color="green" />Is cross-platform good for startups?</h3>
                <h3 className={selected == "fourth" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("fourth")}><GiProfit size={35} style={{ marginRight: "8px" }} color="green" />Benefits of cross-platform app?</h3>
              </Container>

            </Col>

            <Col>

              <Container className='d-flex justify-content-center mt-5' xs={12} md={6} lg={6}>
                {changer()}
              </Container>

            </Col>

          </Row>

        </Container>
      </Container>

      <Container>
        <Row className={styles.casestudiescontainer}>

          <Col className='d-flex justify-content-center align-items-center mt-5'>
            <img src='/images/cross-platform-developers.png' width={360} height={360} className={styles.casestudiesimage} alt="cross platform developers" />
          </Col>

          <Col>

            <Container className='d-flex flex-column mt-5'>

              <h2 className={styles.bottomsideheading}>Leading Cross-Platform App Development Company</h2>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are a cross-platform app development company, we build fast and visually stunning apps with our expert team of developers and designers.</p>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are following Android, Ios development guides and standards while developing cross-platform apps.</p>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are building High-Quality cross-platform apps with a team of expert cross-platform app developers.</p>

            </Container>

          </Col>

        </Row>
      </Container>

    </>
  )
}

export default CrossPlatform