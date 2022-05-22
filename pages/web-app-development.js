import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdAttachMoney, MdCheck, MdOutlineWeb } from "react-icons/md"
import { CgWebsite } from "react-icons/cg"
import { AiOutlineApi } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { SiAngularjs, SiCss3, SiHtml5, SiJavascript, SiNextdotjs } from "react-icons/si"
import Head from 'next/head'


const WebApp = () => {
    const [selected, setSelected] = useState("first")
    const changer = () => {
        if (selected === "first") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        Web app development service includes
                        <br />
                        - Business Analysis
                        <br />
                        - User interface / User experience Design
                        <br />
                        - Web app development
                        <br />
                        - Release
                        <br />
                        - Maintenance & Support ( When needed )
                    </p>
                </Container>

            )
        }
        if (selected === "second") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        Yes, we are making integrations from an external API provider when needed. We can also integrate API into your old website.
                    </p>
                </Container>

            )
        }
        if (selected === "third") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        We are also experts in modernizing the old website with good-looking themes. Modernization will increase the speed of your website and that will affect your
                        ranking in a good manner.
                    </p>
                </Container>
            )
        }
        if (selected === "fourth") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        When things come to web app development costs we can't say the exact number.
                        Simple and less complex web app development will sure cost you less. Feature-rich applications will cost you more than simple apps.
                    </p>

                </Container>
            )
        }
    }

    return (
        <>
            <Head>
                <title>Web Application Development Company | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We are web application development company, we build web app solutions for your invidual and corporation needs. We can build feature rich website with our expert web app developers."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/web-app-development" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Web Application Development Company | Mindasoft" />
                <meta property="og:description" content="We are web application development company, we build web app solutions for your invidual and corporation needs. We can build feature rich website with our expert web app developers." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Application Development Company | Mindasoft" />
                <meta name="twitter:description" content="We are web application development company, we build web app solutions for your invidual and corporation needs. We can build feature rich website with our expert web app developers." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/web-app-development" />
            </Head>

            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Web Application Development</h1>
                            <h2 className={styles.headtwo}>We are a web application development company that builds any size of a web app with a team of experts.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/web-app-development.png' width={350} height={350} className={styles.iosimage} alt="web app" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Web App <br /> Development</span>
                                </Col>

                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>


            {/* Industry Leader */}
            <Container className='mt-5'>
                <h2 className={styles.industryheader}>Leading <strong>Web App Development</strong></h2>
                <h3 className={styles.industrypara}>We have a team of expert web app developers that builds industry leader web applications</h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    With the advancement of web frameworks, Web application development become cheaper
                    and easier in a short amount of time.
                    The build time of web applications is so fast with the web frameworks like react js, angular js, or next js.
                    These frameworks made dream web ideas real in a short time with a low budget.
                    <br />
                    <br />
                    Nowadays startups want to create their Minimum Viable Product - MVP and they want to get on the market as fast as possible.
                    We are building web apps for startups, individuals, and companies and make their MVP in a short time with the help of these web frameworks with our expert team of web app developers. With the help of these web frameworks, we can build your dream web app in a short time with a low budget compared to a time when frameworks don't exist.
                    There is no limitation while building a web app we can build any size and any complex web application with a team of expert developers.
                    <br />
                    <br />
                    We are designing web applications by following the guides and rules of W3C standards. These W3C standards are our priority while we designing a web app.
                    We also make web app designs with stunning visuals and develop web apps stable, fast, and scalable. Bear in mind that we are developing high-quality web apps with a
                    team of expert web app developers.
                </p>

            </Container>


            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>How much does web app development cost?</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/hire-us"><Button size='lg' className={styles.bluesidebutton}>Calculate</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={8}>
                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>What is a Web application development Service?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>Web app development is a website that has custom functionalities, for example, authentication,
                                user profile admin dashboard, or user management system.
                                You can add more features to this example. A web app is in a nutshell a website with custom features and 
                                is eligible to scale any size depending on company growth. We can build your web app development for any size, any complexity, and feature-rich.
                                Our team of expert web app developers will design your app following the rules of W3C with a beautifully designed user interface.
                            </p>

                        </Container>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Benefits of having web app?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>Today smartphones, computers, and websites are part of our lives. We do tasks from websites, watch videos, and even make profits from websites.
                                Having a website for your company will attract new customers and going to make your company grow faster than before. At Mindasoft we build web apps for individuals, startups, and companies.
                                Our expert team of developers will build visually stunning, rock-solid web apps for any size and complexity.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/web-app-development-1.png' width={400} height={340} className={styles.webappbenefitsimage} alt="web app developer" />
                    </Col>
                </Row>
            </Container>

            {/* Case studies kopya */}
            <Container >

                <Row className={styles.casestudiescontainer} >

                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <img src='/images/web-app-development-2.png' width={450} height={350} className={styles.webapptechnologiesimage} alt="web app developers" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>

                            <span className={styles.casestudiesrightindustry}>Web App Development</span>
                            <span className={styles.casestudiesrighttitle}>Technologies</span>
                            <p className={styles.casestudiesrightpara}>We use React Js, Angular, Next js as a framework for our web app development. <br />The Languages we use for web development are Html, CSS, and javascript.</p>
                            <div className='d-flex'>
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
                                            <p className={styles.casestudiesrightpara} style={{ marginLeft: "15px" }}>Css 3</p>
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
                <h2 className={styles.industryheader}><strong>Web app development</strong> increases profit</h2>
                <h3 className={styles.industrypara}>Web app development attract new customers and increase profits</h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    A website is a must-have when you have a company, startup, or even a portfolio for yourself to market your skills or for market your product.
                    At Mindasoft we are building web app development for individuals, companies, startups, and enterprises.
                    Our expert team of web app developers will first analyze your requirements. Then we will start designing your project prototypes, and beautiful user interface for your web app.
                    <br />
                    <br />
                    Fast websites always rank higher on search engines. That means is profit growth for the company.
                    We build fast, secure web app development that will increase your company's value and the growth of sales.
                </p>
            </Container>

            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Web App Development</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/*  */}
            <Container>
                <h2 className={styles.appdevservices}>Questions</h2>
                <hr style={{ marginBottom: "20px" }} />
                <Container>
                    <Row >

                        <Col className='d-flex justify-content-center text-start mt-5' xs={12} md={12} lg={6}>

                            <Container className={styles.appdevsevcontainer}>
                                <h3 className={selected == "first" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("first")} ><MdOutlineWeb size={35} style={{ marginRight: "8px" }} color="green" />What services do web app development includes?</h3>
                                <h3 className={selected == "second" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("second")}><AiOutlineApi size={35} style={{ marginRight: "8px" }} color="green" />Do you integrate API to web app?</h3>
                                <h3 className={selected == "third" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("third")}><CgWebsite size={35} style={{ marginRight: "8px" }} color="green" />Do you modernize old website?</h3>
                                <h3 className={selected == "fourth" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("fourth")}><MdAttachMoney size={35} style={{ marginRight: "8px" }} color="green" />How much does a web app development cost?</h3>
                            </Container>

                        </Col>

                        <Col className='d-flex justify-content-center mt-5' xs={12} md={12} lg={6} >

                            <Container className={styles.questionsmobile}>
                                {changer()}
                            </Container>

                        </Col>

                    </Row>

                </Container>
            </Container>

            <Container>
                <Row className={styles.casestudiescontainer}>

                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <img src='/images/web-app-developers.png' width={500} height={400} className={styles.webapptechnologiesimage} alt="web app development" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>

                            <h2 className={styles.bottomsideheading}>Leading Web App Development Services</h2>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are a Web application development company, we are building secure and fast apps with our expert team of web app developers.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are following W3C guides and standards for developing fast and SEO-optimized applications.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are building High-Quality web apps with a team of expert web app developers.</p>

                        </Container>

                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default WebApp