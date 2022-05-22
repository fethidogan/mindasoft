import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"


const Healthcare = () => {

    return (
        <>
            <Head>
                <title>Healthcare Software Development Services | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We are building solutions for the healthcare industry. We can develop mobile and web healthcare applications for individual and corporational needs."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/healthcare-medical-app-development" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Healthcare Software Development Services | Mindasoft" />
                <meta property="og:description" content="We are building solutions for the healthcare industry. We can develop mobile and web healthcare applications for individual and corporational needs." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Healthcare Software Development Services | Mindasoft" />
                <meta name="twitter:description" content="We are building solutions for the healthcare industry. We can develop mobile and web healthcare applications for individual and corporational needs." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/healthcare-medical-app-development" />
            </Head>
            <Container fluid className={styles.healthcarecontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Healthcare App Development </h1>
                            <h2 className={styles.headtwo}>We are a healthcare app development company.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Start Project</Button></Link>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} className='d-flex justify-content-center'>
                            <img src='/images/healthcare-app-development.png' width={600} height={400} className={styles.iosimage} alt="healthcare app development" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Healthcare App Development</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>Medical App <br />Development</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <h2 className={styles.healthcaretwosideheader} style={{ textAlign: "center", paddingTop: "100px" }}>Healthcare Development Services</h2>
                <hr />
                <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/healthcare-app-development-1.png' width={430} height={300} className={styles.webtechimage} alt="healthcare app" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Data analytics</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are providing data analytics dashboards for doctors and patients. Custom data analytics software will save doctors' and patients' time
                            and they will be able to spend this time much more on the treatment of the sickness.

                        </p>

                        <h3 className={styles.mvptwosidesubheading}>HR Operations</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are building custom software and applications solutions for the healthcare industry. We develop HR management tools, Patient Appointment solutions
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>Remote Care</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are building solutions for your healthcare business. We are building custom Appointment software for patients, real-time video and text chat software
                            to increase the quality of the analysis and treatment of the healthcare industry.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Health Monitoring</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are developing custom Health Monitoring applications and software connected with wearable devices. These applications will help doctors to track their
                            patient's real-time data from a custom-built dashboard.
                        </p>
                    </Col>

                </Row>
            </Container >
            <Container className={styles.testimonialscontainer}>

                <Row >

                    <h2 className={styles.mvptwosideheader} style={{ marginTop: "100px" }}>Solutions for hospitals and clinics</h2>
                    <hr />
                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>EHR / EMR</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Electronic medical records (EMR) will keep all patients' medical history, allergies, and more data in one place.
                            <br />
                            Electronic health records (EHR) help doctors to reach the requested data from different departments. Doctors will be able to easily
                            reach the data of any patient at any time from a custom-built dashboard.
                        </p>
                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>


                        <h3 className={styles.mvptwosidesubheading}>Wearable Health</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Today mobile apps and wearable devices are helping people to measure their body health.
                            Also, these devices now can diagnose some sicknesses and track the disease. With the help of technology, we can help
                            doctors to analyze patients' sickness with the IoT and wearable devices.
                        </p>

                    </Col>

                </Row>
                <Row >

                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Real-time Communication</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Custom-built software and applications will help doctors to communicate in real-time with patients.
                        </p>

                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Portal For Patients</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are building custom E-portals for patients and healthcare providers. This portal will help patients and doctors
                            to share their knowledge with all users of the portal.
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
                        <img src='/images/healthcare-case.jpg' width={660} height={550} className={styles.casestudiesimage} alt="healthcare app developer" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>


                            <h2 className={styles.casestudiesrighttitle}>Clinic Appointment App</h2>
                            <p className={styles.casestudiesrightpara}>Clinic Appointment App with medical specialization option.</p>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Country</span>
                                <span className={styles.casestudiesrightcountrytext}>United States</span>
                            </div>

                            <div className='d-flex flex-row justify-content-between'>
                                <span className={styles.casestudiesrightcountry}>Technologies</span>
                                <span className={styles.casestudiesrightcountrytext}>Next Js, Node Js</span>
                            </div>

                        </Container>

                    </Col>

                </Row>


            </Container>


            <Container>
                <Row className='d-flex justify-content-between'>

                    <Col xs={12} md={6} lg={6}>
                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Patient-centered apps</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <ul className={styles.industryparalong}>
                                <li>Appointment scheduling applications.</li>
                                <li>Fitness and wellness apps</li>
                                <li>Telemedicine applications</li>
                                <li>Mental health apps</li>
                                <li>Medication intake tracking applications</li>
                                <li>AI symptom checkers</li>
                            </ul>
                        </Container>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Apps for medical professionals</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <ul className={styles.industryparalong}>
                                <li>Appointment management applications</li>
                                <li>Remote patient diagnosing applications</li>
                                <li>Remote patient monitoring applications</li>
                                <li>Medical networking and education applications</li>
                            </ul>
                        </Container>
                    </Col>

                </Row>
            </Container>

            {/* Description  */}
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={9}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>We are healthcare app development company</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <ul className={styles.industryparalong}>
                                <li>We have an expert team of developers specialized in healthcare app development</li>
                                <li>Free cost estimation</li>
                                <li>Stunning visuals designed by expert UI / UX Designers</li>
                                <li>Latest technologies used for healthcare app development</li>
                            </ul>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={3} className="d-flex justify-content-center align-items-center">
                        <img src='/images/healthcare-app-development-2.png' width={550} height={340} className={styles.webtechimage} alt="healthcare development" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Healthcare