import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"

const Fintech = () => {
    return (
        <>
            <Head>
                <title>Fintech Software Development Services | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We are developing fintech solutions for companies, startups. Our solutions are making companies much more efficient and making their business grow faster."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/financial-app-development" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Fintech Software Development Services | Mindasoft" />
                <meta property="og:description" content="We are developing fintech solutions for companies, startups. Our solutions are making companies much more efficient and making their business grow faster." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fintech Software Development Services | Mindasoft" />
                <meta name="twitter:description" content="We are developing fintech solutions for companies, startups. Our solutions are making companies much more efficient and making their business grow faster." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/financial-app-development" />
            </Head>
            <Container fluid className={styles.financialcontainer}>
                <Container>

                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Fintech App Development</h1>
                            <h2 className={styles.headtwo}>We are building Fintech and custom financial software and applications.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Start Project</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/financial-app-development-2.png' width={500} height={410} className={styles.iosimage} alt="financial app development" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Fintech Software <br />Development</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <h2 className={styles.healthcaretwosideheader} style={{ textAlign: "center", paddingTop: "100px" }}>Fintech Development Services</h2>
                <hr />
                <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/financial-app-development-1.png' width={430} height={300} className={styles.webtechimage} alt="finanical app" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Financial tools</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are building invoicing systems, cash flow controls, payment systems, and custom tools for your individual and corporation needs.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>Data visualization</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are building tools to visualize your financial data. Total sale charts, profit charts, and much more customized charts and metrics for your business.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>Secure software</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We keep security at a high level and encrypt data flow. We keep your all financial data securely on servers.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Financial automation</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are building tools, applications, and custom software to automate your financial data.
                        </p>

                    </Col>

                </Row>
            </Container >
            <Container className={styles.testimonialscontainer}>
                <h2 className={styles.mvptwosideheader} style={{ marginTop: "100px" }}>Solutions for Fintech </h2>
                <hr />
                <Row >

                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Payment gateways</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We do integrate Payment gateways to your shopping app, e-commerce, and any web or mobile app that you need. You can start selling and make a profit after
                            your payment gateway is implemented on your application.
                        </p>
                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>


                        <h3 className={styles.mvptwosidesubheading}>Billing and invoicing</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are building custom billing software and invoicing systems for your business. An automated billing system will help you
                            to focus more on sales.
                        </p>

                    </Col>

                </Row>
                <Row >

                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Banking CRM</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We can build your custom Banking CRM software for your business. Satisfy your banking clients with the next-generation highly secure Banking CRM software.
                        </p>
                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>


                        <h3 className={styles.mvptwosidesubheading}>Banking data analytics</h3>
                        <p className={styles.mvptwosidelongpara}>
                            With our custom-developed banking data analytics software, you will be able to get customer analytics, channel analytics, marketing analytics, and performance analytics in your
                            custom developer data analytics dashboard.
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

                <Row className={styles.casestudiescontainer} >

                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <img src='/images/financial-app-case.jpg' width={600} height={480} className={styles.casestudiesimage} alt="fintech app" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>


                            <h2 className={styles.casestudiesrighttitle}>Expense Tracker App</h2>
                            <p className={styles.casestudiesrightpara}>Tracking expenses and managing the budgets of the user.</p>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Country</span>
                                <span className={styles.casestudiesrightcountrytext}>United States</span>
                            </div>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Technologies</span>
                                <span className={styles.casestudiesrightcountrytext}>React Native</span>
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
                            <h2 className={styles.descheader}>We are fintech app development company</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <ul className={styles.industryparalong}>
                                <li>Help employees to work more efficiently with the Bank intranet.</li>
                                <li>Grow up your sales with payment gateway integration to your application or website.</li>
                                <li>Find the all analytics with just a few clicks in your Banking data analytics.</li>
                                <li>Satisfy your all users with next-generation Banking CRM software.</li>
                            </ul>

                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={3} className="d-flex justify-content-center align-items-center">
                        <img src='/images/financial-app-development.png' width={550} height={340} className={styles.casestudiesimage} alt="financial software" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Fintech