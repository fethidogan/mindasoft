import React from 'react'
import styles from "../styles/Portfolio.module.css"
import { AiFillPieChart, AiOutlineArrowRight } from 'react-icons/ai'
import { GiTransform, GiAirplaneDeparture } from 'react-icons/gi'
import { SiBookstack } from 'react-icons/si'
import { MdShoppingCart } from 'react-icons/md'
import { FaBehance, FaDribbble } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'

const Portfolio = () => {
    return (
        <Container className={styles.portfoliocontainer}>
            <Head>
                <title>Portfolio | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Would you like to see some of the web app and mobile app development works we done for our clients ? You can take a look at our beautifuly designed works in this page."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/portfolio" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Portfolio | Mindasoft" />
                <meta property="og:description" content="Would you like to see some of the web app and mobile app development works we done for our clients ? You can take a look at our beautifuly designed works in this page." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Portfolio | Mindasoft" />
                <meta name="twitter:description" content="Would you like to see some of the web app and mobile app development works we done for our clients ? You can take a look at our beautifuly designed works in this page." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/portfolio" />
            </Head>
            <h1 className={styles.heading}>Portfolio</h1>
            {/* case study 1 */}
            <Row className={styles.casestudiescontainer} >
                <Col className='d-flex justify-content-center align-items-center mt-5'>
                    <img src='/images/budget-app.webp' width={600} height={420} className={styles.casestudiesimage} alt="budget-app-development" />
                </Col>

                <Col>

                    <Container className='d-flex flex-column mt-5'>

                        <span className={styles.casestudiesrightindustry}><AiFillPieChart size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />Financial</span>
                        <h2 className={styles.casestudiesrighttitle}>Budget Planner App</h2>
                        <p className={styles.casestudiesrightpara}>Budget tracker and savings planner app development build for desktop and mobile devices. </p>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Country</span>
                            <span className={styles.casestudiesrightcountrytext}>United Kingdom</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Technologies</span>
                            <span className={styles.casestudiesrightcountrytext}>React Native</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Hours Spent</span>
                            <span className={styles.casestudiesrightcountrytext}>500 Hours</span>
                        </div>

                    </Container>

                </Col>

            </Row>

            {/* Case study 2 */}

            <Row className={styles.casestudiescontainer} >

                <Col className='d-flex justify-content-center align-items-center mt-5'>
                    <img src='/images/crm-development.webp' width={600} height={420} className={styles.casestudiesimage} alt="crm-development" />
                </Col>

                <Col>
                    <Container className='d-flex flex-column mt-5'>

                        <span className={styles.casestudiesrightindustry}><GiTransform size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />Digital Transformation</span>
                        <h2 className={styles.casestudiesrighttitle}>CRM Dashboard</h2>
                        <p className={styles.casestudiesrightpara}>Customer relationship manager - CRM development for a company to transform their old way of customer relationships to next generation.</p>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Country</span>
                            <span className={styles.casestudiesrightcountrytext}>United States</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Technologies</span>
                            <span className={styles.casestudiesrightcountrytext}>Next Js</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Hours Spent</span>
                            <span className={styles.casestudiesrightcountrytext}>800 Hours</span>
                        </div>

                    </Container>
                </Col>

            </Row>

            {/* Case study 3 */}

            <Row className={styles.casestudiescontainer} >

                <Col className='d-flex justify-content-center align-items-center mt-5'>
                    <img src='/images/travel-app.webp' width={600} height={420} className={styles.casestudiesimage} alt="travel-app-development" />
                </Col>

                <Col>
                    <Container className='d-flex flex-column mt-5'>

                        <span className={styles.casestudiesrightindustry}><GiAirplaneDeparture size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />Travel</span>
                        <h2 className={styles.casestudiesrighttitle}>Booking & Travel Advisor</h2>
                        <p className={styles.casestudiesrightpara}>Booking app development and travel advisor app for iOs and android devices.</p>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Country</span>
                            <span className={styles.casestudiesrightcountrytext}>Canada</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Technologies</span>
                            <span className={styles.casestudiesrightcountrytext}>Swift</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Hours Spent</span>
                            <span className={styles.casestudiesrightcountrytext}>720 Hours</span>
                        </div>

                    </Container>
                </Col>

            </Row>

            {/* Case study 4 */}

            <Row className={styles.casestudiescontainer} >

                <Col className='d-flex justify-content-center align-items-center mt-5'>
                    <img src='/images/tracking-app.webp' width={600} height={420} className={styles.casestudiesimage} alt="location-tracking-app" />
                </Col>

                <Col>
                    <Container className='d-flex flex-column mt-5'>

                        <span className={styles.casestudiesrightindustry}><SiBookstack size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />Education</span>
                        <h2 className={styles.casestudiesrighttitle}>Kids Tracking App</h2>
                        <p className={styles.casestudiesrightpara}>Real time location tracking app for parents and track what is kids doing today.</p>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Country</span>
                            <span className={styles.casestudiesrightcountrytext}>United States</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Technologies</span>
                            <span className={styles.casestudiesrightcountrytext}>Kotlin, Swift</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Hours Spent</span>
                            <span className={styles.casestudiesrightcountrytext}>920 Hours</span>
                        </div>

                    </Container>
                </Col>

            </Row>

            {/* Case study 5 */}

            <Row className={styles.casestudiescontainer} >

                <Col className='d-flex justify-content-center align-items-center mt-5'>
                    <img src='/images/ecommerce-dashboard.webp' width={600} height={420} className={styles.casestudiesimage} alt="ecommerce-dashboard" />
                </Col>

                <Col>
                    <Container className='d-flex flex-column mt-5'>

                        <span className={styles.casestudiesrightindustry}><MdShoppingCart size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />Retail</span>
                        <h2 className={styles.casestudiesrighttitle}>E-commerce Dashboard</h2>
                        <p className={styles.casestudiesrightpara}>E-commerce dashboard application with custom charts with custom functionality and statics.</p>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Country</span>
                            <span className={styles.casestudiesrightcountrytext}>United Kingdom</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Technologies</span>
                            <span className={styles.casestudiesrightcountrytext}>Next Js</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Hours Spent</span>
                            <span className={styles.casestudiesrightcountrytext}>900 Hours</span>
                        </div>

                    </Container>
                </Col>

            </Row>

            {/* Case study 6 */}

            <Row className={styles.casestudiescontainer} >

                <Col className='d-flex justify-content-center align-items-center mt-5'>
                    <img src='/images/elearning-app.webp' width={600} height={420} className={styles.casestudiesimage} alt="elearning-app-development" />
                </Col>

                <Col>
                    <Container className='d-flex flex-column mt-5'>

                        <span className={styles.casestudiesrightindustry}><SiBookstack size={33} color="#0080e9" style={{ marginTop: "-3px", marginRight: "7px" }} />Education</span>
                        <h2 className={styles.casestudiesrighttitle}>E-Learning Platform</h2>
                        <p className={styles.casestudiesrightpara}>E-Learning platform that educators can create online classes and exams.</p>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Country</span>
                            <span className={styles.casestudiesrightcountrytext}>Australia</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Technologies</span>
                            <span className={styles.casestudiesrightcountrytext}>React Js</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between'>
                            <span className={styles.casestudiesrightcountry}>Hours Spent</span>
                            <span className={styles.casestudiesrightcountrytext}>830 Hours</span>
                        </div>

                    </Container>
                </Col>

            </Row>

            {/* Behance Dribble */}
            <Row >

                <Col className='mt-5' xs={12} md={6} lg={6}>
                    <a href='https://dribbble.com/mindasoft'>
                        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#e94d89", borderRadius: "30px", width: "90%", paddingBottom: "20px", paddingTop: "20px" }}>
                            <FaDribbble size={100} color="#e6e6e6" style={{ marginTop: "0px", marginRight: "7px" }} />
                            <a href='https://dribble.com' className={styles.linkstext}>Show Dribble</a>
                        </Container>
                    </a>
                </Col>

                <Col className='mt-5' xs={12} md={6} lg={6}>
                    <a href='https://behance.net/mindasoft'>
                        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#0156cc", borderRadius: "30px", width: "90%", paddingBottom: "20px", paddingTop: "20px" }}>
                            <FaBehance size={100} color="#e6e6e6" style={{ marginTop: "0px", marginRight: "7px" }} />
                            <a href='https://behance.net' className={styles.linkstext}>Show Behance</a>
                        </Container>
                    </a>
                </Col>

            </Row>

        </Container>

    )
}

export default Portfolio