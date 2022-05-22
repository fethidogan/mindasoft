import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"


const Retail = () => {
    return (
        <>
            <Head>
                <title>E-Commerce Software Development | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We are experts in building retail management, e-commerce, and B2B solutions for individuals, startups, and companies. We can build e-commerce or custom web or mobile application with our expert developers."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/ecommerce-app-development" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="E-Commerce Software Development | Mindasoft" />
                <meta property="og:description" content="We are experts in building retail management, e-commerce, and B2B solutions for individuals, startups, and companies. We can build e-commerce or custom web or mobile application with our expert developers." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="E-Commerce Software Development | Mindasoft" />
                <meta name="twitter:description" content="We are experts in building retail management, e-commerce, and B2B solutions for individuals, startups, and companies. We can build e-commerce or custom web or mobile application with our expert developers." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/ecommerce-app-development" />
            </Head>
            <Container fluid className={styles.ecommercecontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>E-Commerce Development </h1>
                            <h2 className={styles.headtwo}>We are an e-commerce app development and retail Software development company.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Start Project</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/e-commerce-app-development-1.png' width={480} height={400} className={styles.iosimage} alt="e commerce app development" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>E-Commerce App Development</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>Retail Software <br />Development</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <h2 className={styles.healthcaretwosideheader} style={{ textAlign: "center", paddingTop: "100px" }}>E-Commerce Development Services</h2>
                <hr />
                <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/e-commerce-app-development-2.png' width={430} height={330} className={styles.webtechimage} alt="e commerce development" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Retail CRM</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We build CRM for retail and e-commerce companies. Retail CRM software will help you to increase customer satisfaction and increase the good review rates of your business.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>E-Commerce Solutions</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We build e-commerce solutions for your individual and corporation needs. We build fast, secure, and flexible e-commerce applications that you can start selling your services or products.
                            We also implement payment gateways like PayPal and stripe in our e-commerce applications.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Stock Management</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Don't know how many products are in your warehouse? No problem, we will create stock and warehouse management software and solutions for your business to increase productivity.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>Data Visualization</h3>
                        <p className={styles.mvptwosidelongpara}>
                            When you have a shop you will want to know how many sales a specific product has and what the total profit of this item is.
                            We build charts and data visualization applications and software for your companies to see details of each specific item.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Payment Gateway Integration</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We do integrate industry-standard payment gateways to our e-commerce applications also we can integrate the payment gateways to your existing
                            website or application in a short time. We can make you start earning from your sales.
                        </p>
                    </Col>

                </Row>
            </Container >
            <Container className={styles.testimonialscontainer}>

                <Row >

                    <h2 className={styles.mvptwosideheader} style={{ marginTop: "100px" }}>Solutions for Retail and E-commerce</h2>
                    <hr />
                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Analytics</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We integrate data analytics, admin dashboards, and warehouse analytics into our e-commerce and retail software. Analyzing sales and tracking user behavior will be a simple task
                            to check in our e-commerce admin dashboard.
                        </p>
                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>


                        <h3 className={styles.mvptwosidesubheading}>Seo optimized</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Our e-commerce and retail solutions for your business are SEO optimized and designed under the following W3C standards and guides.
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
                        <img src='/images/retail-case.png' width={660} height={550} className={styles.casestudiesimage} alt="retail app development" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>

                            <h2 className={styles.casestudiesrighttitle}>Grocery App</h2>
                            <p className={styles.casestudiesrightpara}>
                            Groceries and food ordering mobile app. Order your food and get deliveries from groceries in a short time.
                            </p>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Country</span>
                                <span className={styles.casestudiesrightcountrytext}>United States</span>
                            </div>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Technologies</span>
                                <span className={styles.casestudiesrightcountrytext}>Flutter</span>
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
                            <h2 className={styles.descheader}>E-Commerce app development company</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <ul className={styles.industryparalong}>
                                <li>We have a team of developers specializing in e-commerce app development and retail software development.</li>
                                <li>Free cost estimation for your project</li>
                                <li>Stunning visuals designed by expert UI / UX Designers</li>
                                <li>Latest technologies used for e-commerce app development</li>
                            </ul>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={3} className="d-flex justify-content-center align-items-center">
                        <img src='/images/e-commerce-app-development.png' width={550} height={340} className={styles.casestudiesimage} alt="e commerce software" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Retail