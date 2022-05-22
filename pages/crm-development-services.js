import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdCheck } from "react-icons/md"
import Head from 'next/head'


const CRMDevelopment = () => {

    return (
        <>
            <Head>
                <title>CRM Development Services | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We can build a custom relationship management system for your business. Our next-generation CRM solutions will make your employees work more efficiently than before and make your company grow."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/crm-development-services" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="CRM Development Services | Mindasoft" />
                <meta property="og:description" content="We can build a custom relationship management system for your business. Our next-generation CRM solutions will make your employees work more efficiently than before and make your company grow." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="CRM Development Services | Mindasoft" />
                <meta name="twitter:description" content="We can build a custom relationship management system for your business. Our next-generation CRM solutions will make your employees work more efficiently than before and make your company grow." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/crm-development-services" />
            </Head>

            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>CRM Development</h1>
                            <h2 className={styles.headtwo}>We are a CRM development company, <br />We will turn your old CRM to next-generation.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/crm-1.png' width={350} height={350} className={styles.iosimage} alt="crm development service" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>CRM <br />Development</span>
                                </Col>

                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <Row >

                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/crm-2.png' width={330} height={300} className={styles.webtechimage} alt="crm development" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>
                        <h2 className={styles.mvptwosideheader}>CRM Solutions</h2>
                        <hr />

                        <h3 className={styles.mvptwosidesubheading}>Custom CRM development</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Custom CRM development will help you to gain trust between your company and the customers. CRM software will help your company to keep customer satisfaction at high quality.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>CRM integration</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We are integrating CRM software into your existing application. You will start using your brand new CRM software on your existing application.
                        </p>
                    </Col>

                </Row>
            </Container >


            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>CRM Development</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Why do you CRM development ?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>
                                Customer relationship is the most important thing in a company. Not satisfied customers won't choose you again for next time. In the last decade, CRM software are involved and
                                made all processes simpler. You can make your customers happy all the time with CRM and track all the things about your customers in one place.
                                <br />
                                <br />
                                We are experts in building CRM software and applications for your business with a team of expert developers.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/crm-3.png' width={340} height={250} className={styles.webtechimage} alt="crm" />
                    </Col>
                </Row>
            </Container>


            {/* iphone increase profit */}
            <Container className='mt-5'>
                <h2 className={styles.industryheader}><strong>CRM Development</strong> </h2>
                <h3 className={styles.industrypara}>Customer relationship details in one place.</h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    We are building high-quality Customer relationship management software and tools for your startups and companies.
                    CRM development will help you to track all the data, emails of your clients and you will see all the details for the specific client.
                    <br />
                    We have a team of software developers that experts in building CRM software and tools to grow your sales and make your customers happy.
                </p>
            </Container>




            <Container>
                <Row className={styles.casestudiescontainer}>

                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <img src='/images/crm-4.png' width={380} height={280} className={styles.webtechimage} alt="crm developers" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>

                            <h2 className={styles.bottomsideheading}>CRM development services</h2>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are building CRM software and applications with a team of expert developers.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />Building custom CRM tools for your needs.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are an industry leader CRM development company.</p>

                        </Container>

                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default CRMDevelopment