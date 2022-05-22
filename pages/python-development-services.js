import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"

const PythonDevelopment = () => {

    return (
        <>
            <Head>
                <title>Python Software Development Services | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We are building python software development solutions for individuals and corporations. We are experts in building data science, Machine learning projects, and automation software for your needs with a team of expert Python developers."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/python-development-services" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Python Software Development Services | Mindasoft" />
                <meta property="og:description" content="We are building python software development solutions for individuals and corporations. We are experts in building data science, Machine learning projects, and automation software for your needs with a team of expert Python developers." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Python Software Development Services | Mindasoft" />
                <meta name="twitter:description" content="We are building python software development solutions for individuals and corporations. We are experts in building data science, Machine learning projects, and automation software for your needs with a team of expert Python developers." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/python-development-services" />
            </Head>

            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Python Development</h1>
                            <h2 className={styles.headtwo}>A python development company that builds solutions for individuals and companies.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/python-logo.png' width={350} height={350} className={styles.iosimage} alt="python development service" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Python Development</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>Task <br />Automation</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>Machine Learning<br />Applications</span>
                                </Col>

                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <Row >

                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/python-logo-1.png' width={250} height={250} alt="python logo" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>
                        <h2 className={styles.mvptwosideheader}>Python Solutions</h2>
                        <hr />
                        <h3 className={styles.mvptwosidesubheading}>Python development</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Python is one of the most popular computer languages in the world. Python can be used in web development, testing software, automation, and more purposes.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Task automation</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Python's best capability is python can easily automate a hard task. We can automate hard tasks with python language in a short time to increase your productivity.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Testing software</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Python has super abilities to test web applications. We can build testing scripts for web applications to make your application work without any bugs.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Chatbots</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Chatbots are widely used in customer support and also used in some popular chat applications like discord and telegram. Python has some special libraries to automate the chats
                            and show some welcome messages to users. We can easily build your chatbot for your discord, telegram, or any other chat platform that you need.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Machine learning applications</h3>
                        <p className={styles.mvptwosidelongpara}>
                            One of the widely known python skills is python's machine learning capabilities. We can build machine learning solutions for
                            your individual and corporation needs also prediction applications supported with machine learning.
                        </p>

                    </Col>

                </Row>
            </Container >
            <Container className={styles.testimonialscontainer}>

                <Row >
                    <h2 className={styles.mvptwosideheader}>Python libraries we use</h2>
                    <hr />
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/numpy-logo.png' width={100} height={100} alt="numpy logo" />
                            <p className={styles.designimages}>Numpy</p>
                        </Container>
                    </Col>
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/pandas-logo.png' width={100} height={100} alt="pandas logo" />
                            <p className={styles.designimages}>Pandas</p>
                        </Container>
                    </Col>
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/matplotlib-logo.png' width={100} height={100} alt="matplotlib logo" />
                            <p className={styles.designimages}>Matplotlib</p>
                        </Container>
                    </Col>
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/selenium-logo.png' width={100} height={100} alt="selenium logo" />
                            <p className={styles.designimages}>Selenium</p>
                        </Container>
                    </Col>
                </Row>

            </Container >

            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Python Development</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Why do you need python development?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>
                                Python is a powerful language. With Python, we can build web applications, automation tools, or data science applications.
                                The Python script we built will handle all the heavy tasks, automation processes and get the heavy lift from your shoulders.
                                <br />
                                <br />
                                We are a python development company and we provide build high-quality python development services for our clients with our team of expert Python developers.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/python-logo-3.png' width={250} height={250} alt="python development" />
                    </Col>
                </Row>
            </Container>


            {/* iphone increase profit */}
            <Container className='mt-5'>
                <h2 className={styles.industryheader}>What is <strong>python</strong> used for ? </h2>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <ul className={styles.industryparalong}>
                    <li>Python is used for task automation, python will do this automation task and make you save time.</li>
                    <li>Python is used for web development, Django and Flask frameworks are fast and secure.</li>
                    <li>Python is used for software testing, Selenium package will help you to test your software.</li>
                    <li>Python is used for data science, Pandas, NumPy, and Matplotlib package is widely used for data science tasks.</li>
                    <li>Python is used for Machine Learning and Neural Networks.</li>
                </ul>
            </Container>

        </>
    )
}

export default PythonDevelopment