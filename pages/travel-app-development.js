import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"


const Travel = () => {
    return (
        <>
            <Head>
                <title>Travel App Development | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Are you looking for a booking, hotel management, travel booking, or flight booking app? We can build your travel or booking web app or mobile apps with our team of expert web and mobile developers."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/travel-app-development" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Travel App Development | Mindasoft" />
                <meta property="og:description" content="Are you looking for a booking, hotel management, travel booking, or flight booking app? We can build your travel or booking web app or mobile apps with our team of expert web and mobile developers." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Travel App Development | Mindasoft" />
                <meta name="twitter:description" content="Are you looking for a booking, hotel management, travel booking, or flight booking app? We can build your travel or booking web app or mobile apps with our team of expert web and mobile developers." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/travel-app-development" />
            </Head>
            <Container fluid className={styles.travelcontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Travel App Development </h1>
                            <h2 className={styles.headtwo}>We are a travel app development company,
                                <br />We are building solutions for travel industry.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Start Project</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/travel-app-development-2.png' width={500} height={400} className={styles.iosimage} alt="travel app development" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Travel App <br />Development</span>
                                </Col>

                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <h2 className={styles.healthcaretwosideheader} style={{ textAlign: "center", paddingTop: "100px" }}>Travel Development Services</h2>
                <hr />
                <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/travel-app-development-1.png' width={430} height={300} className={styles.webtechimage} alt="travel app" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Booking</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are developing booking systems for hotels, agencies, and travel websites. We build travel application development solutions for your business that fits your budget.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>Search</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Search functionality is a must-have feature for travel websites. We build search functionality for your application that fits best your requirements.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>Recommendation System</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Booking websites need to show advice and alternative hotels or opportunities to visitors. We build an advanced recommendation system for your travel applications and websites.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Rentals</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Travel companies mostly have a close relationship with all rental companies. We do integrate rental offers into your travel applications and travel, booking websites.
                        </p>
                    </Col>

                </Row>
            </Container >

            <Container className={styles.testimonialscontainer}>

                <Row >

                    <h2 className={styles.mvptwosideheader} style={{ marginTop: "100px" }}>Solutions for travel companies</h2>
                    <hr />
                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Booking software</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We build advanced booking software for your agency or website. We can develop your next booking software in any size you want.
                        </p>
                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>


                        <h3 className={styles.mvptwosidesubheading}>Travel agent</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We do build software for travel agents.
                            Keeping the records in the same place for all accounts, and search functionality will make travel agents' life easier.
                        </p>

                    </Col>

                </Row>
                <Row >

                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Hotel management</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We build a hotel management system for hotels and motels. We can build the feature-rich hotel management system that you need.
                        </p>

                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>CRM for hotels</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Customer relationship is the most critical thing in the travel industry.
                            We build solutions to keep your customer satisfaction at the top level with our CRM solutions.
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
                        <img src='/images/travel-case.jpg' width={660} height={470} className={styles.casestudiesimage} alt="travel app developer" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>


                            <h2 className={styles.casestudiesrighttitle}>Booking Website</h2>
                            <p className={styles.casestudiesrightpara}>Search hotels and motels all over the world with advanced search functionality.</p>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Country</span>
                                <span className={styles.casestudiesrightcountrytext}>Canada</span>
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
                    <Col xs={12} md={12} lg={9}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>We are travel app development company</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <ul className={styles.industryparalong}>
                                <li>We have a team of developers specialized in travel app development</li>
                                <li>Free cost estimation for your next travel app</li>
                                <li>Stunning visuals designed by expert UI / UX Designers</li>
                                <li>Latest technologies used for travel app development</li>
                            </ul>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={3} className="d-flex justify-content-center align-items-center">
                        <img src='/images/travel-app-development.png' width={550} height={340} className={styles.casestudiesimage} alt="travel app development service" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Travel