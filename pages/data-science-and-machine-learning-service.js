import Link from 'next/link'
import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../styles/Ios.module.css"
import { MdCheck } from "react-icons/md"
import Head from 'next/head'


const DataScience = () => {

    return (
        <>
            <Head>
                <title>Data Science and Machine Learning Services | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We can build data science or machine learning applications to your existing software or we can build it from scratch with our expert ds and ml developers."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/data-science-and-machine-learning-service" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Data Science and Machine Learning Services | Mindasoft" />
                <meta property="og:description" content="We can build data science or machine learning applications to your existing software or we can build it from scratch with our expert ds and ml developers." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Data Science and Machine Learning Services | Mindasoft" />
                <meta name="twitter:description" content="We can build data science or machine learning applications to your existing software or we can build it from scratch with our expert ds and ml developers." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/data-science-and-machine-learning-service" />
            </Head>
            <Container fluid className={styles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={styles.headone}>Data science & Machine Learning</h1>
                            <h2 className={styles.headtwo}>We are building data science and machine learning applications.</h2>
                            <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
                        </Col>
                        <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
                            <img src='/images/data-science-1.png' width={300} height={300} className={styles.iosimage} alt="data science" />
                        </Col>
                    </Row>

                    <Container className={styles.headservicecontainer}>
                        <span className={styles.serviceshead}>Services</span>
                        <div className='d-flex'>
                            <Row>
                                <Col>
                                    <span className={styles.serviceparatext}>Data <br />Science</span>
                                </Col>
                                <Col>
                                    <span className={styles.serviceparatext}>Machine Learning</span>
                                </Col>

                            </Row>
                        </div>
                    </Container>

                </Container>

            </Container>

            <Container className={styles.testimonialscontainer}>

                <Row >

                    <Col className='d-flex justify-content-center align-items-center mt-5' xs={12} lg={6} md={12}>
                        <img src='/images/data-science.png' width={300} height={300} alt="data science development" />
                    </Col>

                    <Col className='mt-5' xs={12} lg={6}>
                        <h2 className={styles.mvptwosideheader}>Data science & ML</h2>
                        <hr />

                        <h3 className={styles.mvptwosidesubheading}>Prediction</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Machine learning is the first to analyze the data and train this data to make predictions for the given input.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>Automatic decision</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Machine learning has the ability to automatic decisions after the prediction process. Automatic decisions will save your energy and time.
                        </p>

                        <h3 className={styles.mvptwosidesubheading}>Behavior analysis</h3>
                        <p className={styles.mvptwosidelongpara}>
                            Machine learning can predict user behaviors. Machine learning will analyze the list of data and predict what this user can do the next time.
                        </p>
                    </Col>

                </Row>
            </Container >
            <Container className={styles.testimonialscontainer}>

                <Row >

                    <h2 className={styles.mvptwosideheader}>Packages for DS & ML</h2>
                    <hr />
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/pandas-logo.png' width={100} height={100} alt="pandas logo" />
                            <p className={styles.designimages}>Pandas</p>
                        </Container>
                    </Col>
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/numpy-logo.png' width={100} height={100} alt="numpy logo" />
                            <p className={styles.designimages}>Numpy</p>
                        </Container>
                    </Col>
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/tensorflow-logo.png' width={100} height={100} alt="tensorflow logo" />
                            <p className={styles.designimages}>Tensorflow</p>
                        </Container>
                    </Col>
                    <Col className='mt-2' xs={6} lg={3} md={3}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='/images/scikit-learn-logo.png' width={150} height={100} alt="scikit learn logo" />
                            <p className={styles.designimages}>Scikit Learn</p>
                        </Container>
                    </Col>
                </Row>

            </Container >

            {/* Center blue item */}
            <Container fluid className={styles.middleblue}>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>Machine learning & Data Science</span></Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
                    </Row>
                </Container>
            </Container>

            {/* Description  */}
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={8}>

                        <Container className='mt-5'>
                            <h2 className={styles.descheader}>Why do you need DS & ML for your project?</h2>
                            <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                            <p className={styles.industryparalong}>
                                Most big companies use custom data science and machine learning software to analyze user behavior to grow their sales.
                                The companies investing in machine learning and data science quickly increase their sales. What that means is, investing in this field
                                will quickly return your company as profit.
                                <br />
                                <br />
                                We are building custom data science and machine learning applications and software for your companies and making your sales grow faster.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                        <img src='/images/machine-learning.png' width={400} height={330} className={styles.casestudiesimage} alt="machine learning" />
                    </Col>
                </Row>
            </Container>


            {/* iphone increase profit */}
            <Container className='mt-5'>
                <h2 className={styles.industryheader}><strong>Machine learning & Data Science</strong> </h2>
                <h3 className={styles.industrypara}>Grow sales with machine learning and Data science support.</h3>
                <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

                <p className={styles.industryparalong}>
                    In the last decade machine learning and data science, development has grown so fast and made our lives easier.
                    Now we can analyze data better and our value predictions are much better than before.
                    With the advantage of the ML and DS, we can predict user behavior and we can show products depending on this behavior.
                    <br />
                    <br />
                    As an example, if a user visits 10 pages on computer hardware products, you can expect 11. page visit probably will be on this field.
                    Machine learning thinks the same as us and recommends pages about computer hardware.
                </p>
            </Container>


            <Container>
                <Row className={styles.casestudiescontainer}>

                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <img src='/images/machine-learning-1.png' width={330} height={330} className={styles.webtechimage} alt="machine learning development" />
                    </Col>

                    <Col>

                        <Container className='d-flex flex-column mt-5'>

                            <h2 className={styles.bottomsideheading}>Machine learning & Data Science</h2>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We implement machine learning and data science applications in your application.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />Machine learning and data science increase sales.</p>
                            <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />We are an industry leader in machine learning and data science development.</p>

                        </Container>

                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default DataScience