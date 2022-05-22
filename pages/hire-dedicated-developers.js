import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { FaSass, FaReact, FaAngular } from 'react-icons/fa'
import { SiCss3, SiExpress, SiPython, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs } from 'react-icons/si'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import homestyles from "../styles/Home.module.css"
const HireDedicatedDevelopers = () => {

    return (
        <>
            <Head>
                <title>Hire Dedicated Developers | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Hire dedicated developers, hire expert dedicated developers for your next web, mobile application project."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/hire-dedicated-developers" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Hire Dedicated Developers | Mindasoft" />
                <meta property="og:description" content="Hire dedicated developers, hire expert dedicated developers for your next web, mobile application project." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hire Dedicated Developers | Mindasoft" />
                <meta name="twitter:description" content="Hire dedicated developers, hire expert dedicated developers for your next web, mobile application project." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/hire-dedicated-developers" />
            </Head>

            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Hire Dedicated Developers</h1>
                            <h2 className={styles.headtwo}>Hire our expert dedicated developers for your next web, mobile app project.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/hire-dedicated-developer.png' width={350} height={350} className={styles.iosimage} alt="hire dedicated developer" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Hire dedicated app <br />developers</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <Row >

                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/dedicated-developer.png' width={310} height={400} alt="dedicated developer" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>
                        <h2 className={styles.mvptwosideheader}>Hire dedicated app developers</h2>
                        <hr />
                        <h3 className={styles.mvptwosidesubheading}>Hire Mobile App Developers</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Hire mobile app developers for your next project mobile application project.
                            Hire dedicated mobile application developers, our team has solid knowledge and expertise in developing mobile applications.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Hire Front-End Developers</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Hire Front-end developers for your next project to add beautiful visuals and features to your Web application. Hire dedicated web app developers, our team is an expert in developing front-end with stunning visuals.
                            We can help your business with a team of expert developers.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Hire Back-End Developers</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Back-End developers can build your rock-solid, secure, and fast web application. Hire dedicated back-end developers for your next project to make your application secure and feature-rich.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Hire Web application Developers</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Hire web application developers, hire a dedicated development team for your web application. Our dedicated developers can build your web application from scratch with a rock-solid back-end. The applications that
                            our developers built it fast and feature-rich.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Hire Full Stack Developers</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Hire Full Stack developers, Hire our expert full stack developer team for your next web application project.
                        </p>

                    </Col>

                </Row>
            </Container >

            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Hire dedicated app developers</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={homestyles.descheader}>Why do you need to hire dedicated developers?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={homestyles.industryparalong}>
                                Mindasoft has a team of highly-experienced developers, our developers can work on your project idea and build your next-generation web or mobile application in a short time.
                                Hiring our dedicated development team is highly cost-effective.
                                <br />
                                Our dedicated developers have the expertise to deliver high-quality web and mobile app development solutions for startups to enterprises and individuals.
                                Our dedicated development team will help you to complete your complex web or mobile application development project that fits your business requirements.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/hire-dedicated-developers.png' width={250} height={250} alt="hire dedicated developers" />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Container>

                    <Row className='mt-5'>

                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3} lg={3}>
                            <SiJavascript size={55} color="#f7e018" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                            <p className={homestyles.technologyparatitles}>Hire Javascript Developers</p>
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3} lg={3}>
                            <SiHtml5 size={55} color="#e54c21" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                            <p className={homestyles.technologyparatitles}>Hire Html 5 Developers</p>
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3} lg={3}>
                            <SiCss3 size={55} color="#264de4" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                            <p className={homestyles.technologyparatitles}>Hire Css 3 Developers</p>
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3} lg={3}>
                            <FaSass size={55} color="#ce679a" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                            <p className={homestyles.technologyparatitles}>Hire Sass Developers</p>
                        </Col>

                    </Row>

                </Container>

                <Container className='mt-2'>

                    <Row className='mt-5'>

                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3} lg={3}>
                            <FaReact size={55} color="#61dafb" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                            <p className={homestyles.technologyparatitles}>Hire React JS Developers</p>
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3} lg={3}>
                            <FaAngular size={55} color="#de002d" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                            <p className={homestyles.technologyparatitles}>Hire Angular Developers</p>
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3} lg={3}>
                            <SiNextdotjs size={55} color="#000000" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                            <p className={homestyles.technologyparatitles}>Hire Next Js Developers</p>
                        </Col>

                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3} lg={3}>
                            <SiNodedotjs size={55} color="#539e43" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                            <p className={homestyles.technologyparatitles}>Hire Node Js Developers</p>
                        </Col>
                    </Row>

                </Container>

                <Container className='mt-2'>

                    <Row className='mt-5'>

                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6}>
                            <SiExpress size={55} color="#333333" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                            <p className={homestyles.technologyparatitles}>Hire Express Developers</p>
                        </Col>

                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6}>
                            <SiPython size={55} color="#e0c124" style={{ marginTop: "-9px", marginRight: "7px", borderRadius: "5px" }} />
                            <p className={homestyles.technologyparatitles}>Hire Python Developers</p>
                        </Col>

                    </Row>

                </Container>

            </Container>


        </>
    )
}

export default HireDedicatedDevelopers