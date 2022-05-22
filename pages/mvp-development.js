import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdTimer, MdCheck, MdOutlineAddBusiness } from "react-icons/md"
import { BiAnalyse } from "react-icons/bi"
import { AiOutlineLike } from 'react-icons/ai'
import Head from 'next/head'

const MVP = () => {
    const [selected, setSelected] = useState("first")
    const changer = () => {
        if (selected === "first") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        MVP development will not take too much time if we compare it to a fully-featured application. Because the approach of MVP development is
                        having the core features of the product and quickly getting into the market.
                    </p>
                </Container>

            )
        }
        if (selected === "second") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        We will analyze and verify your idea with our team of expert business analysts. We will start MVP development after we are sure that your idea is suitable for
                        MVP.
                    </p>
                </Container>

            )
        }
        if (selected === "third") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        Yes, MVP development suits the best startups that don't want to spend so much on development. Also, Individuals and companies commonly choose the MVP strategy.</p>
                </Container>
            )
        }
        if (selected === "fourth") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        Some of the benefits of MVP
                        <br />
                        - Start marketing your product fast
                        <br />
                        - Development cost
                        <br />
                        - Ability to scale further for any size
                        <br />
                        - Feedback driven
                    </p>
                </Container>
            )
        }
    }

    return (
        <>
            <Head>
                <title>MVP Development | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Minimum viable product (MVP) will get your product in market fast with core features and functionalities. MVP is also scalable, when you get enough attention it is possible to scale MVP"></meta>

                <meta property="og:url" content="https://www.mindasoft.com/mvp-development" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="MVP Development | Mindasoft" />
                <meta property="og:description" content="Minimum viable product (MVP) will get your product in market fast with core features and functionalities. MVP is also scalable, when you get enough attention it is possible to scale MVP" />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MVP Development | Mindasoft" />
                <meta name="twitter:description" content="Minimum viable product (MVP) will get your product in market fast with core features and functionalities. MVP is also scalable, when you get enough attention it is possible to scale MVP" />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/mvp-development" />
            </Head>

            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className={styles.headone}>Minimum Viable Product Development </h1>
                            <h2 className={styles.headtwo}>We develop a minimum viable product for startups, individuals, and companies and make their products get to market fast.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <img src='/images/mvp.png' width={400} height={400} className={styles.iosimage} alt="mvp" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Minimum Viable Product</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>Product Discovery</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>UI / UX <br />Design</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <Row >

                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/MVP-steps.png' width={630} height={500} className={styles.webapptechnologiesimage} alt="mvp development" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>
                        <h2 className={styles.mvptwosideheader}>MVP Steps</h2>
                        <hr />
                        <h3 className={styles.mvptwosidesubheading}>Creation of concept</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We will analyze your requirements and make a deep research on the internet about the concept that you want to turn that into MVP.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Analytics</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Our expert team of business analysts will analyze the idea and we will find the best solutions for you.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Design</h3>
                        <p className={styles.mvptwosidelongpara}>
                            When the analytics phase is done we will start designing a prototype of the actual product. When the client confirms the prototype, we will start designing the UI / UX design of the real product.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Development</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We start developing the MVP after we get all confirmations of the design. Our expert team of developers will develop your MVP with a strong backend and
                            stunning visuals.</p>
                        <h3 className={styles.mvptwosidesubheading}>Setup of MVP</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We will set up your MVP after the development process is done and we will be sure that everything is running fine.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Implementation</h3>
                        <p className={styles.mvptwosidelongpara}>
                            After the development process is done we will launch your MVP on the internet and in application stores.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Review</h3>
                        <p className={styles.mvptwosidelongpara}>
                            When we have enough feedback from users we can scale further your MVP to any size you need.
                        </p>
                    </Col>

                </Row>
            </Container >
            <Container className={styles.testimonialscontainer}>

                <Row >

                    <h2 className={styles.mvptwosideheader}>Benefits of MVP</h2>
                    <hr />
                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Idea Verification</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Before we start MVP development we will be sure that your idea is unique. This approach will save you time and money.
                        </p>
                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>


                        <h3 className={styles.mvptwosidesubheading}>Feedback Driven</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Feedbacks are important for MVP. Because you will add new features based on this feedback coming from users.
                        </p>

                    </Col>

                </Row>
                <Row >

                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Cost Less</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Building MVP costs less than a full-featured app. MVP is just the core feature of the real product. When you get enough attention from users you can easily scale this product into any size.
                        </p>

                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Quick time to market</h3>
                        <p className={styles.mvptwosidelongpara}>
                            MVP is a Minimum viable product which means when you have the market-able minimum product you can start marketing it and find customers.
                            When you decide to go with MVP, core features will be enough to find new users for your product.
                        </p>

                    </Col>

                </Row>
            </Container >

            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Let's discuss details for MVP</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Contact Us</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Why do you need MVP?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>
                                If you have an idea and want to turn that into a product most clients don't know how to turn that idea into reality and don't know where to start their projects.
                                We help our customers from the start to analyze their ideas to launch their final product. MVP is the best solution for startups who wants to turn ideas into a real product.
                                <br />
                                <br />
                                MVP costs cheaper when compared to a fully-featured application. The development time and having core features makes MVP so popular.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/mvp-development.png' width={480} height={300} className={styles.webapptechnologiesimage} alt="mvp steps" />
                    </Col>
                </Row>
            </Container>




            {/* iphone increase profit */}
            <Container className='mt-5'>
                <h2 className={styles.industryheader}><strong>Minimum Viable Product</strong> </h2>
                <h3 className={styles.industrypara}>Attract new users and market your idea in a short time with MVP.</h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    Development time and getting into the market time is so fast in MVP strategy. Because your product will have only the core feature that users need.
                    When your product has enough visits or downloads, users will share their feedback about your product.
                    <br />
                    <br />
                    When you are ready to scale your MVP with extra features depending on the user feedback, we will scale it to any size that you need further.
                </p>
            </Container>

            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Minimum Viable Product</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/*  */}
            <Container>
                <h2 className={styles.appdevservices}>Questions About MVP Development</h2>
                <hr style={{ marginBottom: "20px" }} />
                <Container>
                    <Row >

                        <Col className='d-flex justify-content-center text-start mt-5' xs={12} sm={12} md={12} lg={6}>

                            <Container className={styles.appdevsevcontainer}>
                                <h3 className={selected == "first" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("first")} ><MdTimer size={35} style={{ marginRight: "8px" }} color="green" />How long does MVP development take?</h3>
                                <h3 className={selected == "second" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("second")}><BiAnalyse size={35} style={{ marginRight: "8px" }} color="green" />Will you analyze my idea?</h3>
                                <h3 className={selected == "third" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("third")}><MdOutlineAddBusiness size={35} style={{ marginRight: "8px" }} color="green" />Is MVP good for startups?</h3>
                                <h3 className={selected == "fourth" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("fourth")}><AiOutlineLike size={35} style={{ marginRight: "8px" }} color="green" />Benefits of MVP?</h3>
                            </Container>

                        </Col>

                        <Col className='d-flex justify-content-center mt-5' xs={12} sm={12} md={12} lg={6}>

                            <Container>
                                {changer()}
                            </Container>

                        </Col>

                    </Row>

                </Container>
            </Container>

            <Container>
                <Row className={styles.casestudiescontainer}>

                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <img src='/images/mvp-developers.png' width={440} height={360} className={styles.webapptechnologiesimage} alt="mvp developers" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>

                            <h2 className={styles.bottomsideheading}>Minimum Viable Product Development Services</h2>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We do turn your ideas into MVP in a short time with our team of expert developers and business analysts.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We do analyze your idea and find solutions for your MVP Development.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are Industry Leader in MVP development.</p>

                        </Container>

                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default MVP