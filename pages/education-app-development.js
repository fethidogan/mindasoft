import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"


const Education = () => {

    return (
        <>
            <Head>
                <title>Education and E-learning Software Development | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We are building schools management software, e-learning apps, and custom applications for the education industry with our team of expert developers."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/education-app-development" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Education and E-learning Software Development | Mindasoft" />
                <meta property="og:description" content="We are building schools management software, e-learning apps, and custom applications for the education industry with our team of expert developers." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Education and E-learning Software Development | Mindasoft" />
                <meta name="twitter:description" content="We are building schools management software, e-learning apps, and custom applications for the education industry with our team of expert developers." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/education-app-development" />
            </Head>

            <Container fluid className={styles.educationcontainer}>

                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Education & E-Learning App Development </h1>
                            <h2 className={styles.headtwo}>We are an education and e-learning app development company.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Start Project</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/education-app-development-1.png' width={520} height={400} className={styles.iosimage} alt="education app development" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Education App <br />Development</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>E-Learning App <br />Development</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>School Management Software Development</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <h2 className={styles.healthcaretwosideheader} style={{ textAlign: "center", paddingTop: "100px" }}>Education App Development Services</h2>
                <hr />
                <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/education-app-development.png' width={430} height={300} className={styles.webtechimage} alt="education app development service" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Education app</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Education is one of the most important things in our lives. We build scalable, fast, and high-quality education applications solutions for your individual and corporation needs.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>School management</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We build solutions for schools to manage and visualize all data they have. We do keep this data in one place and store all the data securely.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>E-learning</h3>
                        <p className={styles.mvptwosidelongpara}>
                            After the pandemic e-learning is boomed, and many websites and apps are built worldwide for e-learning.
                            We build e-learning applications integrated with payment gateways. You can start selling your courses online and make money.
                        </p>

                    </Col>

                </Row>
            </Container >
            <Container className={styles.testimonialscontainer}>

                <Row >

                    <h2 className={styles.mvptwosideheader} style={{ marginTop: "100px" }}>Solutions for education</h2>
                    <hr />
                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Education CRM</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are building CRM solutions for schools, websites, and apps to keep their customer relationship and customer satisfaction at the top level.
                        </p>
                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>


                        <h3 className={styles.mvptwosidesubheading}>Education portal</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Portals are the best way to share knowledge. We build portals for schools, education websites, and applications.
                        </p>

                    </Col>

                </Row>
                <Row >

                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Management systems</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Keeping all the data with paperwork is a hard thing to do. We build management systems for schools and make the management software do the heavy lifting for you.
                        </p>

                    </Col>

                </Row>
            </Container >

            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Any questions to ask ?</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Contact Us</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            <Container>

                <Row className={styles.casestudiescontainer} style={{ cursor: "pointer" }}>

                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <img src='/images/elearning-app.webp' width={660} height={550} className={styles.casestudiesimage} alt="elearning app" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>


                            <h2 className={styles.casestudiesrighttitle}>E-Learning App</h2>
                            <p className={styles.casestudiesrightpara}>E-learning application and course sale app.</p>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Country</span>
                                <span className={styles.casestudiesrightcountrytext}>United States</span>
                            </div>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Technologies</span>
                                <span className={styles.casestudiesrightcountrytext}>Next Js</span>
                            </div>

                        </Container>

                    </Col>

                </Row>

            </Container>

            {/* Description  */}
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>We are education app development company</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <ul className={styles.industryparalong}>
                                <li>We have a team of developers specialized in education app development</li>
                                <li>Free cost estimation for education app development</li>
                                <li>Stunning visuals designed by expert UI / UX Designers</li>
                                <li>Latest technologies used for education app development</li>
                            </ul>
                        </Container>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/education-app-development-2.png' width={400} height={250} className={styles.casestudiesimage} alt="education app" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Education