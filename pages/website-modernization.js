import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdAttachMoney, MdCheck } from "react-icons/md"
import { FaReact } from "react-icons/fa"
import { SiAngularjs, SiCss3, SiHtml5, SiJavascript, SiNextdotjs } from "react-icons/si"
import { RiCloudOffLine } from "react-icons/ri"
import { AiOutlineLike } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import Head from 'next/head'

const WebsiteModernization = () => {
    const [selected, setSelected] = useState("first")
    const changer = () => {
        if (selected === "first") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        Website modernization is not an expensive process like building a huge web application from scratch. Depending on the complexity of your existing website
                        it can be updated into a next-generation website with a good-looking user interface with a low budget.
                    </p>
                </Container>

            )
        }
        if (selected === "second") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        While we are developing your next generation website there is no reason to put offline your old website.
                        We are using our servers for testing purposes while we are modernizing your old website.
                    </p>
                </Container>

            )
        }
        if (selected === "third") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        Nope, vice versa it will rank higher than before. Because search engines love fast websites and rank them in results higher than the slower ones.
                        We do follow the W3C and SEO guides and standards to rank the websites higher in search results.
                    </p>
                </Container>
            )
        }
        if (selected === "fourth") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        Some of the benefits of website modernization
                        <br />
                        - Faster speed
                        <br />
                        - Stunning visuals
                        <br />
                        - Additional features
                        <br />
                        - SEO friendly
                    </p>
                </Container>
            )
        }
    }

    return (
        <>
            <Head>
                <title>Website Modernization Services | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Do you have a old website and want to rebuild it with fresh latest trends? We are website design and web app development company. We can rebuild your website with latest technologies."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/website-modernization" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Website Modernization Services | Mindasoft" />
                <meta property="og:description" content="Do you have a old website and want to rebuild it with fresh latest trends? We are website design and web app development company. We can rebuild your website with latest technologies." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Website Modernization Services | Mindasoft" />
                <meta name="twitter:description" content="Do you have a old website and want to rebuild it with fresh latest trends? We are website design and web app development company. We can rebuild your website with latest technologies." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/website-modernization" />
            </Head>

            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Website Modernization </h1>
                            <h2 className={styles.headtwo}>Do you have an old website that needs to be updated with stunning visuals and a strong backend? We update your existing website with
                                our expert team of web developers.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/website-modernization.png' width={520} height={450} className={styles.iosimage} alt="website modernization" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Website <br />Modernization</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>


            {/* Industry Leader */}
            <Container className='mt-5'>
                <h2 className={styles.industryheader}>Website Modernization Service</h2>
                <h3 className={styles.industrypara}>The old websites modernized with the new technologies are faster than the older ones.</h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    Maybe you have a website more than 10 years old. We know that the modernization of the old websites seems scary to you. Website modernization is
                    not scary as you might think. We are using the latest technologies, languages, and frameworks to renew your website and keep the domain you have.
                    Website modernization will make your website looks much more modern, beautiful, and faster than the older one. Also, modernized websites are ranking
                    much higher on search engines than before because of the loading speed and the design system.
                    <br />
                    <br />
                    At Mindasoft we are building fresh designs on your existing domain with our team of expert UI designers. Also, we are building rock-solid apps on your
                    existing domains with a team of expert web app developers.
                </p>

            </Container>


            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Let's discuss for website modernization </span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Contact Us</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Why you should modernize your old website?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>
                                The web design trends are always changing, When you surf the internet you can estimate the age of each website or you can easily guess the development years
                                of this website. The website that was designed in 2000 will not look prettier than a website made in 2022. Because today's visual technology of the web is so advanced
                                than 2000. The web frameworks also advanced when compared to 2000.
                                <br />
                                <br />
                                This is why you should modernize your website and follow the latest trends in the web design world. Also, new technologies, languages, and web frameworks
                                will make your website much faster than before. We are updating your old websites with the new technologies with a team of expert web developers.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/website-modernization-1.svg' width={550} height={340} className={styles.webappbenefitsimage} alt="website modernization service" />
                    </Col>
                </Row>
            </Container>

            {/* Case studies kopya */}
            <Container >

                <Row className={styles.casestudiescontainer} >

                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <img src='/images/single-page-web-app-development-2.png' width={430} height={350} className={styles.webapptechnologiesimage} alt="single page web app development" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>

                            <span className={styles.casestudiesrightindustry}>Website Modernization</span>
                            <span className={styles.casestudiesrighttitle}>Technologies</span>
                            <p className={styles.casestudiesrightpara}>We use React Js, Angular, Next js frameworks to modernize your old website.<br />The Languages we use for modernization are Html, CSS, and Javascript.</p>
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
                <h2 className={styles.industryheader}><strong>Website Modernization</strong> attracts new users</h2>
                <h3 className={styles.industrypara}>Attract new users with the fresh and visually stunning design of your website.</h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    Users love to surf websites has good looking user interfaces and do not want to spend their time watching loading icons on the website.
                    Old websites are usually slow and the page loading speed of an old website is mostly bigger than 1.5 seconds.
                    Users love to surf super-fast websites. Next-generation web frameworks provide a page speed is lesser than a second.
                    That means the websites built with the next generation will rank higher on search engines and users will not see any loading icons while surfing on your web pages.
                    <br />
                    <br />
                    We do the modernization of your old websites in a short amount of time. We also have a team of expert web designers and web developers that will modernize your
                    website with next-generation frameworks with stunning visuals.
                </p>
            </Container>

            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Website modenization</span></Col>
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

                        <Col className='d-flex justify-content-center text-start mt-5' xs={12} sm={12} md={12} lg={6}>

                            <Container className={styles.appdevsevcontainer}>
                                <h3 className={selected == "first" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("first")} ><MdAttachMoney size={35} style={{ marginRight: "8px" }} color="green" />Do website modernization expensive?</h3>
                                <h3 className={selected == "second" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("second")}><RiCloudOffLine size={35} style={{ marginRight: "8px" }} color="green" />Is my website will be offline while modernization?</h3>
                                <h3 className={selected == "third" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("third")}><CgWebsite size={35} style={{ marginRight: "8px" }} color="green" />Is my website lose ranking if modernized?</h3>
                                <h3 className={selected == "fourth" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("fourth")}><AiOutlineLike size={35} style={{ marginRight: "8px" }} color="green" />Benefits of website modernization?</h3>
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
                        <img src='/images/website-modernization-developers.png' width={440} height={360} className={styles.webapptechnologiesimage} alt="website modernization developers" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>

                            <h2 className={styles.bottomsideheading}>Website Modernization Services</h2>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are a website modernization and web development company, we turn your old and slow website into fast and good-looking websites and web apps.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We do follow W3C standards to develop fast and search engine optimized websites and web apps.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are an Industry Leader in the modernization of old websites.</p>

                        </Container>

                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default WebsiteModernization