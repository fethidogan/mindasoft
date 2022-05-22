import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdAttachMoney, MdTimer, MdCheck } from "react-icons/md"
import { FaServicestack } from "react-icons/fa"
import { BiRevision } from "react-icons/bi"
import Head from 'next/head'

const UIUX = () => {
    const [selected, setSelected] = useState("first")
    const changer = () => {
        if (selected === "first") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        Depending on client requests and the number of pages, UI / UX designs of an application can be done lesser than 10 days.
                        More than 15 pages of UI / UX design can take a little bit more than 12 days.
                    </p>
                </Container>

            )
        }
        if (selected === "second") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        Yes, we will provide additional revisions if you want us to change something. We are providing satisfaction-guaranteed service.
                    </p>
                </Container>

            )
        }
        if (selected === "third") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        The cost of the UI / UX design is depending on the number of pages that will be designed. What that means is more page costs more.
                        Also complex component is a factor that changes the UI / UX design cost. But if you are looking for a non-complex design, you can be sure that it will not hurt your design budget.
                    </p>
                </Container>
            )
        }
        if (selected === "fourth") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        UI / UX Design service includes
                        <br />
                        - Prototype Design
                        <br />
                        - Wireframe Design
                        <br />
                        - UI / UX Design
                    </p>
                </Container>
            )
        }
    }

    return (
        <>
            <Head>
                <title>UI / UX Design Services | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We are designing UI / UX for your website, web apps and mobile apps. Our UI / UX designers will analyze your requirements and they will provide you designs and prototypes."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/ui-ux-design-services" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="UI / UX Design Services | Mindasoft" />
                <meta property="og:description" content="We are designing UI / UX for your website, web apps and mobile apps. Our UI / UX designers will analyze your requirements and they will provide you designs and prototypes." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="UI / UX Design Services | Mindasoft" />
                <meta name="twitter:description" content="We are designing UI / UX for your website, web apps and mobile apps. Our UI / UX designers will analyze your requirements and they will provide you designs and prototypes." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/ui-ux-design-services" />
            </Head>
            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>UI / UX Design Service</h1>
                            <h2 className={styles.headtwo}>We design stunning visuals for your mobile, desktop, and web applications.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/ui-ux-design-service.png' width={400} height={400} className={styles.iosimage} alt="ui ux design service" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Prototype & Wireframe Design</span>
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
                        <img src='/images/ui-ux-design.png' width={500} height={400} className={styles.webtechimage} alt="ui ux design" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>
                        <h2 className={styles.mvptwosideheader}>UI / UX Design Steps</h2>
                        <hr />
                        <h3 className={styles.mvptwosidesubheading}>Research</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We will first analyze your industry and the design schemas of the related industry. We will make deep research before we start
                            the designing process. We will define the most used colors and the components used in related industries.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Wireframing</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Wireframing is the visual frame representation of the real application. We will first design the wireframes of the web or mobile application depending on your requirements.

                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Design</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Our UI / UX design team will get the wireframes of the application and start designing the UI / UX of the application.
                            Our design team is using unique components and illustrations in the design process. The design team will send the renders to the client
                            when the client approves the renders. These designs will be sent to frontend developers to build a web or mobile application. These renders are
                            references to frontend developers and they will know how the design of the real application should be.
                        </p>

                    </Col>

                </Row>
            </Container >
            <Container className={styles.testimonialscontainer}>

                <Row >

                    <h2 className={styles.mvptwosideheader}>Our Design Tools</h2>
                    <hr />
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/figma-logo.png' width={100} height={100} alt="figma logo" />
                            <p className={styles.designimages}>Figma</p>
                        </Container>
                    </Col>
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/sketch-logo.png' width={100} height={100} alt="sketch logo" />
                            <p className={styles.designimages}>Sketch</p>
                        </Container>
                    </Col>
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/adobe-after-effects-logo.png' width={100} height={100} alt="adobe after effects logo" />
                            <p className={styles.designimages}>Adobe After Effects</p>
                        </Container>
                    </Col>
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/adobe-photoshop-logo.jpg' width={100} height={100} alt="photoshop logo" />
                            <p className={styles.designimages}>Adobe Photoshop</p>
                        </Container>
                    </Col>
                </Row>

            </Container >

            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Let's discuss for UI / UX design</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Contact Us</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Why do you need UI / UX design?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>
                                Before building an application, developers need a visual reference of the application. This UI / UX design will be a guide to developers and they will understand where
                                components need to be exactly placed and also give developers an exact idea of which colors will be used in this application.
                                Also, UI / UX design will be a perfect visual representation of how the final web or mobile application will be.
                                This is why every web or mobile application project needs UI / UX design before the development process.
                                <br />
                                <br />
                                At Mindasoft we are designing visually stunning UI / UX for our clients depending on their requirements with our expert UI / UX design team.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/ui-ux-design-1.png' width={400} height={300} className={styles.webtechimage} alt="ui ux" />
                    </Col>
                </Row>
            </Container>


            {/* iphone increase profit */}
            <Container className='mt-5'>
                <h2 className={styles.industryheader}><strong>UI / UX Design</strong> </h2>
                <h3 className={styles.industrypara}>Visually stunning designs and prototypes.</h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    UI / UX design is one of the most critical processes before actual development takes the place.
                    Developers will understand these references and build page layouts following that design and color schema.
                    Frontend developers will develop your application taking these designs as a reference and turning that designs into
                    functional applications.
                </p>
            </Container>


            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>UI / UX Design Service</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Questions */}
            <Container>
                <h2 className={styles.appdevservices}>Questions About UI / UX Design</h2>
                <hr style={{ marginBottom: "20px" }} />
                <Container>
                    <Row >

                        <Col className='d-flex justify-content-center text-start mt-5' xs={12} sm={12} md={12} lg={6}>

                            <Container className={styles.appdevsevcontainer}>
                                <h3 className={selected == "first" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("first")} ><MdTimer size={35} style={{ marginRight: "8px" }} color="green" />How long does UI / UX design take?</h3>
                                <h3 className={selected == "second" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("second")}><BiRevision size={35} style={{ marginRight: "8px" }} color="green" />Will you provide extra revisions if needed?</h3>
                                <h3 className={selected == "third" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("third")}><MdAttachMoney size={35} style={{ marginRight: "8px" }} color="green" />How much does UI / UX design cost?</h3>
                                <h3 className={selected == "fourth" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("fourth")}><FaServicestack size={35} style={{ marginRight: "8px" }} color="green" />What services are included in UI / UX Design?</h3>
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
                        <img src='/images/ui-ux-designers.png' width={550} height={440} className={styles.casestudiesimage} alt="ui ux designers" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>

                            <h2 className={styles.bottomsideheading}>UI / UX Design Services</h2>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We turn your idea into a design with a team of expert UI / UX designers.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We do analyze your idea and choose the right components, colors for your related industry before we start the UI / UX Design process.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are Industry Leader UI / UX design company and we can design your visually stunning UI / UX with a team of expert designers.</p>

                        </Container>

                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default UIUX