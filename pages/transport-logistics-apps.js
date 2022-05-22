import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"


const TransportApp = () => {

    return (
        <>
            <Head>
                <title>Logistics Software Development | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We are a Logistics software and application development company, we can build your fleet management, warehouse management, and real-time tracking web and mobile applications with a team of expert web and mobile developers."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/transport-logistics-apps" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Logistics Software Development | Mindasoft" />
                <meta property="og:description" content="We are a Logistics software and application development company, we can build your fleet management, warehouse management, and real-time tracking web and mobile applications with a team of expert web and mobile developers." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Logistics Software Development | Mindasoft" />
                <meta name="twitter:description" content="We are a Logistics software and application development company, we can build your fleet management, warehouse management, and real-time tracking web and mobile applications with a team of expert web and mobile developers." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/transport-logistics-apps" />
            </Head>
            <Container fluid className={styles.logisticcontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Logistics App Development </h1>
                            <h2 className={styles.headtwo}>We are a logistics app development company, <br />We build logistics and transportation solutions for your business.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Start Project</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/logistics-app-development.png' width={450} height={450} className={styles.iosimage} alt="logistics app development" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Transportation App Development</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>Logistics App <br />Development</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <h2 className={styles.healthcaretwosideheader} style={{ textAlign: "center", paddingTop: "100px" }}>Logistics Software Development Services</h2>
                <hr />
                <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/logistics-app-development-2.png' width={520} height={430} className={styles.webtechimage} alt="logistics app" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Warehouse management</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Warehouse management software will optimize your warehouse operations and staff efficiency. Warehouse management software
                            will help your employees to increase their productivity. You can see the real-time data of your warehouse analytics on your warehouse management dashboard.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>Assets Tracking</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Assets tracking software will help you to track all shipments and their shipment status. Monitor your all assets in real-time on your software.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>Fleet management</h3>
                        <p className={styles.mvptwosidelongpara}>
                            With the help of the latest technologies, we can build your fleet management application. You can real-time track your all fleet data and their real-time positions
                            on the map.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Supply chain management</h3>
                        <p className={styles.mvptwosidelongpara}>
                            A supply chain management tool will help you to deliver all the goods much more efficiently than before. We can build a supply chain management system from scratch or
                            we can implement it in your existing software to increase your employee's productivity.
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
                        <img src='/images/logistic-app-case.png' width={660} height={550} className={styles.casestudiesimage} alt="logistics apps" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>


                            <h2 className={styles.casestudiesrighttitle}>Shipment Tracking App</h2>
                            <p className={styles.casestudiesrightpara}>Shipment tracking system and shipment status tracking.</p>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Country</span>
                                <span className={styles.casestudiesrightcountrytext}>United Kingdom</span>
                            </div>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Technologies</span>
                                <span className={styles.casestudiesrightcountrytext}>Next Js, Flutter</span>
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
                            <h2 className={styles.descheader}>Logistics app development company</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <ul className={styles.industryparalong}>
                                <li>Supply chain management software and system to increase your productivity.</li>
                                <li>Assets tracking applications to get real-time data on your shipments.</li>
                                <li>Warehouse management software to reduce human labor and increase efficiency.</li>
                                <li>Fleet management application to real-time fleet tracking.</li>
                            </ul>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={3} className="d-flex justify-content-center align-items-center">
                        <img src='/images/logistics-app-development-1.png' width={550} height={340} className={styles.webtechimage} alt="logistic app developers" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TransportApp