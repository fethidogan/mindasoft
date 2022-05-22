import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"

const HireMobileAppDevelopers = () => {

    return (
        <>
            <Head>
                <title>Hire Mobile App Developers | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Hire mobile app developers, we are a mobile app development company with a team of expert mobile application developers."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/hire-mobile-app-developers" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Hire Mobile App Developers | Mindasoft" />
                <meta property="og:description" content="Hire mobile app developers, we are a mobile app development company with a team of expert mobile application developers." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hire Mobile App Developers | Mindasoft" />
                <meta name="twitter:description" content="Hire mobile app developers, we are a mobile app development company with a team of expert mobile application developers." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/hire-mobile-app-developers" />
            </Head>

            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Hire Mobile App Developers</h1>
                            <h2 className={styles.headtwo}>Hire our expert mobile app developers for your next project.</h2>
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
                                    <span className={styles.serviceparatext}>Hire mobile app developers</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>Hire developers</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>Hire android <br />developers</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>Hire ios <br />developers</span>
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
                        <h2 className={styles.mvptwosideheader}>Hire dedicated developers</h2>
                        <hr />
                        <h3 className={styles.mvptwosidesubheading}>Hire iOs App Developers</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Hire ios developers for your next project to maintain or complete your ios application. Hire dedicated ios app developers, our team is expert in developing ios and iPhone applications.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Hire Android App Developers</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Hire android developers for your next project to maintain or complete your android application. Hire dedicated android app developers, our team is an expert in developing android applications.
                            We can help your business with a team of expert developers.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Hire Cross-Platform App Developer</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Cross-platform app developers can build multi-platform applications for your individual or corporation projects. Hire our expert cross-platform app developers for your next project.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Hire React Native Developer</h3>
                        <p className={styles.mvptwosidelongpara}>
                            React native developers will help you to build your cross-platform applications. Hire react native developers for your next project to maintain or scale your existing or building an application
                            from scratch.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Hire Flutter App Developers</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Hire flutter developers for your cross-platform ios, android, or windows based application project. Our expert flutter developer team will help you to complete your flutter application.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Hire iPhone App Developers</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Hire iPhone developers to build your iPhone app from scratch. Our team of experts iPhone developers will maintain and scale your application regarding your requirements.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Hire Dedicated App Developers</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Hire dedicated developers, we are expert app developers and we can help you to build your application from scratch, we can maintain your existing application with a team of expert developers.
                        </p>

                    </Col>

                </Row>
            </Container >

            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Hire mobile app developers</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Why do you need mobile app developers?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>
                                Every mobile app project needs a mobile app developer to add features and maintain the application. Our team of expert mobile app developers will help to build
                                your mobile application from scratch or add new features. Highly skilled mobile app developers will make your company and the business go further.
                                <br />
                                <br />
                                Hire our team of expert mobile app developers for your next project. We are ready to help your business increase sales and make a profit more.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/hire-dedicated-developers.png' width={250} height={250} alt="hire dedicated developers" />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default HireMobileAppDevelopers