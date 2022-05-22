import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdAttachMoney, MdPerson } from "react-icons/md"
import { GiLevelEndFlag } from "react-icons/gi"

import { CgWebsite } from 'react-icons/cg'
import Head from 'next/head'

const Seo = () => {
    const [selected, setSelected] = useState("first")
    const changer = () => {
        if (selected === "first") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        Most people think to buy backlinks but it is not a good idea.
                        Buying low-quality backlinks won't affect your ranking positively vice versa it will rank you down.
                        Instead of buying backlinks you can create your social media accounts or building high authority backlinks will be the best choice to
                        rank higher.
                    </p>
                </Container>

            )
        }
        if (selected === "second") {
            return (

                <Container>
                    <p className={styles.appdevservpara}>
                        Most SEO service providers will offer the first page guaranteed SEO service. But there is no guarantee for that because they do not know
                        how google search algorithms works. Stay away from this kind of guaranteed work.
                    </p>
                </Container>

            )
        }
        if (selected === "third") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        Depending on the backlink quality of the website and the SEO optimizations usually, websites start climbing the higher positions after 3-4 months.
                        You should always get high authority do-follow backlinks from other websites.
                    </p>
                </Container>
            )
        }
        if (selected === "fourth") {
            return (
                <Container>
                    <p className={styles.appdevservpara}>
                        We do not guarantee the first page in 1 week.
                        Depending on the keyword competition you can rank on the first page in 3-12 months.
                        The backlinks you have will be indexing from google. Then google recalculates the authority of the website and changes its ranking position.
                    </p>
                </Container>
            )
        }
    }

    return (
        <>
            <Head>
                <title>SEO Services | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Search engine optimization is one of the most critical things in the development process. We are providing high-quality off-page SEO services, backlinks for SEO, and on-page optimizations for your website and web app."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/seo-services" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="SEO Services | Mindasoft" />
                <meta property="og:description" content="Search engine optimization is one of the most critical things in the development process. We are providing high-quality off-page SEO services, backlinks for SEO, and on-page optimizations for your website and web app." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEO Services | Mindasoft" />
                <meta name="twitter:description" content="Search engine optimization is one of the most critical things in the development process. We are providing high-quality off-page SEO services, backlinks for SEO, and on-page optimizations for your website and web app." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/seo-services" />
            </Head>

            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Seo Services</h1>
                            <h2 className={styles.headtwo}>We are optimizing your website to rank higher on search engines.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/seo-optimization-1.png' width={500} height={400} className={styles.iosimage} alt="seo service" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Search Engine Optimization</span>
                                </Col>

                            </Row>
                        </div>
                    </Container>

                </Container>
            </Container>



            <Container className={styles.testimonialscontainer}>

                <Row >

                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/seo-optimization.png' width={500} height={400} className={styles.webtechimage} alt="seo optimization" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>
                        <h2 className={styles.mvptwosideheader}>SEO Steps</h2>
                        <hr />
                        <h3 className={styles.mvptwosidesubheading}>Research</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We will first make deep research of the keywords in the industry you are in.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Analyze</h3>
                        <p className={styles.mvptwosidelongpara}>
                            After we make a deep research about the industry we will pick the right keywords for you.
                        </p>
                        <h3 className={styles.mvptwosidesubheading}>Optimization</h3>
                        <p className={styles.mvptwosidelongpara}>
                            We will optimize the content, images, articles, and much more thing on your website to make your website rank higher.
                        </p>

                    </Col>

                </Row>
            </Container >

            <Container className={styles.testimonialscontainer}>

                <Row >

                    <h2 className={styles.mvptwosideheader}>Benefits of SEO</h2>
                    <hr />
                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Rank Higher</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Search engine optimized websites rank higher than before and always win the race against competitors.
                        </p>
                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>


                        <h3 className={styles.mvptwosidesubheading}>Optimized content</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Seo is also meant that optimize content. We are optimizing the article lengths that the search engine understands, reducing the image sizes and image formats.
                            That optimization will make your website load faster.
                        </p>

                    </Col>

                </Row>
                <Row >

                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>Increased Speed</h3>
                        <p className={styles.mvptwosidelongpara}>
                            If you want to rank high on search results your site should load in under 1 second. To make your website load in under 1 second, we optimize all the images, videos, and
                            files.
                        </p>

                    </Col>
                    <Col className='mt-2' xs={12} lg={6}>

                        <h3 className={styles.mvptwosidesubheading}>More Visitors</h3>
                        <p className={styles.mvptwosidelongpara}>
                            SEO will rank you up and make you more visible on results. Your website will be able to attract new users and get the benefits of SEO.
                        </p>

                    </Col>

                </Row>
            </Container >

            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Let's discuss details for SEO</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Contact Us</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Why do you need SEO service ?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>
                                If you want to rank higher on search engines you will need an SEO service. Search engines love fast loading and websites with optimized articles, content.
                                Search engine optimization service will help you to increase sales and drive more traffic to your website or web application.
                                <br />
                                <br />
                                We are experts in SEO service and we will move your website to the top of the search results.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/seo-optimization-3.png' width={450} height={250} className={styles.casestudiesimage} alt="seo" />
                    </Col>
                </Row>
            </Container>

            {/* iphone increase profit */}
            <Container className='mt-5'>
                <h2 className={styles.industryheader}><strong>Search Engine Optimization</strong> </h2>
                <h3 className={styles.industrypara}>Rank higher on search engines.</h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    We provide high-quality in-page and off-page SEO services. On the page, SEO is the optimization that you do inside the website, which can be
                    article lengths optimization or image size reduction. Offpage SEO is the optimization that you do outside of the website. You can think of this
                    as backlinking, social media pages, or digital marketing.
                    <br />
                    We offer Onpage and Offpage SEO services and make your website load faster and rank higher.
                </p>
            </Container>


            {/* Questions */}
            <Container>
                <h2 className={styles.appdevservices}>Questions about seo service</h2>
                <hr style={{ marginBottom: "20px" }} />
                <Container>
                    <Row >

                        <Col className='d-flex justify-content-center text-start mt-5' xs={12} sm={12} md={12} lg={6}>

                            <Container className={styles.appdevsevcontainer}>
                                <h3 className={selected == "first" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("first")} ><MdAttachMoney size={35} style={{ marginRight: "8px" }} color="green" />Should you buy a backlinks service?</h3>
                                <h3 className={selected == "second" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("second")}><MdPerson size={35} style={{ marginRight: "8px" }} color="green" />Who should you choose for SEO service?</h3>
                                <h3 className={selected == "third" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("third")}><GiLevelEndFlag size={35} style={{ marginRight: "8px" }} color="green" />When will my ranking position change?</h3>
                                <h3 className={selected == "fourth" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("fourth")}><CgWebsite size={35} style={{ marginRight: "8px" }} color="green" />Will you guarantee first page?</h3>
                            </Container>

                        </Col>

                        <Col className='d-flex justify-content-center mt-5' xs={12} sm={12} md={12} lg={6}>

                            <Container >
                                {changer()}
                            </Container>

                        </Col>

                    </Row>

                </Container>
            </Container>

        </>
    )
}

export default Seo