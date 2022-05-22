import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdAttachMoney, MdTimer, MdCheck } from "react-icons/md"
import { FaReact } from "react-icons/fa"
import { SiAngularjs, SiCss3, SiHtml5, SiJavascript, SiNextdotjs } from "react-icons/si"
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineLike } from 'react-icons/ai'
import Head from 'next/head'

const SinglePageApp = () => {
    const [selected, setSelected] = useState("first")
    const changer = () => {
        if (selected === "first") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        Single-page web application can be built within a week. Because single page web applications is a homepage that includes all the other
                        page's content with just a simple linking system.
                    </p>
                </Container>

            )
        }
        if (selected === "second") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        There are only a couple of factors that increase the total amount of cost.
                        If the single page application that you are requesting will be pure Html, that can be built with a tiny budget.
                        If you need custom functionality or API integration from an external website that will sure increase this amount
                        but it will be still much lower when compared to a multi-page web app with custom functions.
                    </p>
                </Container>

            )
        }
        if (selected === "third") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        Yes, as long as your web page is a maximum of 10 pages with no
                        custom functionality like authentication or any other functionality. It can be turned into a single-page web application with stunning visuals.
                    </p>
                </Container>
            )
        }
        if (selected === "fourth") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        One of the biggest benefits of a single-page application is development duration. Development duration is so fast with this web app development strategy.
                        The second benefit of a single-page application is can be built with a very tiny budget. This is what makes single-page apps so popular.
                    </p>
                </Container>
            )
        }
    }

    return (
        <>
            <Head>
                <title>Single Page Application Development | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Single page applications are startup-friendly and low-cost web applications. We can build your single-page application with our team of expert web developers in a week."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/single-page-apps" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Single Page Application Development | Mindasoft" />
                <meta property="og:description" content="Single page applications are startup-friendly and low-cost web applications. We can build your single-page application with our team of expert web developers in a week." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Single Page Application Development | Mindasoft" />
                <meta name="twitter:description" content="Single page applications are startup-friendly and low-cost web applications. We can build your single-page application with our team of expert web developers in a week." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/single-page-apps" />
            </Head>
            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Single Page <br /> Web Application </h1>
                            <h2 className={styles.headtwo}>Do you have an idea but have a low budget? Single page web apps its best for you.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/single-page-app-development.png' width={480} height={400} className={styles.iosimage} alt="single page app development" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Single Page <br />Web Applications</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>


            {/* Industry Leader */}
            <Container className='mt-5'>
                <h2 className={styles.industryheader}>Low Cost <strong>Single Page Web Application Development</strong></h2>
                <h3 className={styles.industrypara}>Single page web applications are the first choice that those who want to spend less on app development. </h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    Today we have many technologies that can build single page web applications.
                    Single page applications are as named on it, single web page that includes all the other pages.
                    Single page applications are commonly chosen by startups or chosen by companies that want to show their projects to potential customers.
                    <br />
                    <br />
                    The development duration at single page applications is super fast.
                    We can build your single page web application within a week.
                    Because of this duration time startups, artists, or companies that want to show their new product or service love this single page application.
                    We can turn your dream idea into a single page web application in a short time with our expert team of web app developers.
                    We use the latest technologies and we follow W3C guides and standards for search engine optimization.
                </p>

            </Container>


            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Let's discuss for web app development project</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Contact Us</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Benefits of single page web apps?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>
                                Instead of having huge and complex web applications most startups,
                                artists and companies want to market their new products is, choosing single web applications for their new projects,
                                products, or portfolio pages. Single page applications are fast to build and easy to release applications.
                                <br />
                                <br />
                                We are single page web app development company that is building next-generation single page web applications with a team of web app developers.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/single-page-web-app-development-1.png' width={550} height={340} className={styles.webappbenefitsimage} alt="single page web app" />
                    </Col>
                </Row>
            </Container>

            {/* Case studies kopya */}
            <Container >

                <Row className={styles.casestudiescontainer} >

                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <img src='/images/single-page-web-app-development-2.png' width={430} height={350} className={styles.webtechimage} alt="single page web app development" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>


                            <h2 className={styles.casestudiesrightindustry}>Single Page App Development</h2>
                            <p className={styles.casestudiesrighttitle}>Technologies</p>
                            <p className={styles.casestudiesrightpara}>We use React Js, Angular, Next js as frameworks for our single page web app development.<br />The Languages we use for web development are Html, CSS, and Javascript.</p>

                            <div>
                                <Row>
                                    <Col lg={3} md={4} xs={4} >
                                        <div className='d-flex flex-column justify-content-start align-items-start'>
                                            <FaReact size={80} color="#61dafb" style={{ marginRight: "25px" }} />
                                            <p className={styles.casestudiesrightpara}>React Js</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={4}>
                                        <div className='d-flex flex-column justify-content-start align-items-start'>
                                            <SiAngularjs size={80} color="#dd0031" style={{ marginRight: "25px" }} />
                                            <p className={styles.casestudiesrightpara} style={{ marginLeft: "5px" }}>Angular</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={4}>
                                        <div className='d-flex flex-column justify-content-start align-items-start'>
                                            <SiNextdotjs size={80} color="#2a2c2e" style={{ marginRight: "25px" }} />
                                            <p className={styles.casestudiesrightpara} style={{ marginLeft: "7px" }}>Next Js</p>
                                        </div>

                                    </Col>
                                    <Col lg={3} md={4} xs={4}>
                                        <div className='d-flex flex-column justify-content-start align-items-start'>
                                            <SiJavascript size={80} color="#efd81d" style={{ marginRight: "25px", borderRadius: "5px" }} />
                                            <p className={styles.casestudiesrightpara} >Javascript</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={4}>
                                        <div className='d-flex flex-column justify-content-start align-items-start'>
                                            <SiHtml5 size={80} color="#e54c21" style={{ marginRight: "25px", borderRadius: "5px" }} />
                                            <p className={styles.casestudiesrightpara} style={{ marginLeft: "8px" }}>Html 5</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={4}>
                                        <div className='d-flex flex-column justify-content-start align-items-start'>
                                            <SiCss3 size={80} color="#264de4" style={{ marginRight: "25px", borderRadius: "5px" }} />
                                            <p className={styles.casestudiesrightpara} style={{ marginLeft: "15px" }}>CSS</p>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Container>

                    </Col>

                </Row>
            </Container>


            {/* iphone increase profit */}
            <Container className='mt-5'>
                <h2 className={styles.industryheader}><strong>Single Page Web app</strong> reduces costs</h2>
                <h3 className={styles.industrypara}>Attract new users and increase your product or service sales with single page web applications</h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    Single page applications boomed since web frameworks like react js and angular js were launched.
                    The old way of building web applications was developing each web page for example about us, services, or contact us.
                    The old way of building web pages was time-consuming and many pages needs to be built to complete the website.
                    <br />
                    The new way of building web applications is evolved into single page web application that one page includes all the other page contents. Imagine that the home page
                    has the content of the contact page or maybe your services page. We can build these single page web applications with our team of expert web app developers following the guides and standards of W3C.
                </p>
            </Container>

            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Single Page Web App Development</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Questions */}
            <Container>
                <h2 className={styles.appdevservices}>Questions about single page apps</h2>
                <hr style={{ marginBottom: "20px" }} />
                <Container>
                    <Row >

                        <Col className='d-flex justify-content-center text-start mt-5' xs={12} sm={12} md={12} lg={6}>

                            <Container className={styles.appdevsevcontainer}>
                                <h3 className={selected == "first" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("first")} ><MdTimer size={35} style={{ marginRight: "8px" }} color="green" />How long does it take to build SPA?</h3>
                                <h3 className={selected == "second" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("second")}><MdAttachMoney size={35} style={{ marginRight: "8px" }} color="green" />How much does SPA development cost?</h3>
                                <h3 className={selected == "third" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("third")}><CgWebsite size={35} style={{ marginRight: "8px" }} color="green" />Can the old website be turned in SPA?</h3>
                                <h3 className={selected == "fourth" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("fourth")}><AiOutlineLike size={35} style={{ marginRight: "8px" }} color="green" />Benefits of SPA?</h3>
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
                        <img src='/images/single-page-web-app-developers.webp' width={550} height={400} className={styles.webapptechnologiesimage} alt="single page app developers" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>

                            <h3 className={styles.bottomsideheading}>Single Page Web Application Development</h3>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are Single Page Web app development company, we develop fast and rock-solid single page web applications with our team of expert web app developers.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are following W3C guides and standards to develop SEO-optimized single page web applications.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are building Industry Leader single page web apps.</p>

                        </Container>

                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default SinglePageApp