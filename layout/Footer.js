import React, { useState } from 'react'
import styles from "../styles/Home.module.css"
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter, FaDribbble, FaLinkedin, FaBehance } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (name.length < 2) {
            return toast.error("Name can't less than 2 characters.")
        }
        if (message.length < 10) {
            return toast.error("Message can't less than 10 characters.")
        }
        try {
            await axios.post("/api/sendrequest", { name, mail, message })
            toast.success("Message Sent")
            setName("")
            setMail("")
            setMessage("")
        }
        // error messages
        catch (error) {
            toast.error("Too many requests")
        }
    }

    return (
        <Container fluid className={styles.footercontainer}>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
            />
            <Container className={styles.footerlinkscontainer}>
                {router.pathname == "/contact" ? "" :
                    <Form onSubmit={handleSubmit}>
                        <Row>

                            <Col xs={12} md={12} lg={6}>

                                <Form.Label className={styles.footercontacttitles}>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" size='lg' value={name} onChange={(e) => setName(e.target.value)} required />

                            </Col>

                            <Col xs={12} md={12} lg={6}>

                                <Form.Label className={styles.footercontacttitles}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email adress" size='lg' xs={12} value={mail} onChange={(e) => setMail(e.target.value)} required />

                            </Col>

                        </Row>

                        <Form.Group className="mt-4">
                            <Form.Label className={styles.footercontacttitles}>About Project</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Your message" size='lg' value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </Form.Group>

                        <Button className={styles.footercontactbutton} size='lg' type='submit'>Send Message</Button>

                    </Form>
                }

                <Row>
                    <Col className={styles.footerblog}>
                        <h3 className={styles.footertitles}>Services</h3>
                        <Link href="/ios-iphone-app-development" passHref><a className={styles.footerparas}>iOs / iPhone Development</a></Link>
                        <Link href="/android-app-development" passHref><a className={styles.footerparas}>Android Development</a></Link>
                        <Link href="/cross-platform-app-development" passHref><a className={styles.footerparas}>Cross Platform Development</a></Link>
                        <Link href="/web-app-development" passHref><a className={styles.footerparas}>Web Development</a></Link>
                        <Link href="/ui-ux-design-services" passHref><a className={styles.footerparas}>UI / UX Design</a></Link>
                        <Link href="/single-page-apps" passHref><a className={styles.footerparas}>Single Page Apps</a></Link>
                        <Link href="/website-modernization" passHref><a className={styles.footerparas}>Website Modernization</a></Link>
                        <Link href="/mvp-development" passHref><a className={styles.footerparas}>MVP Development</a></Link>
                    </Col>

                    <Col className={styles.footerblog}>
                        <h3 className={styles.footertitles}>Expertise</h3>
                        <Link href="/python-development-services" passHref><a className={styles.footerparas}>Python Development</a></Link>
                        <Link href="/crm-development-services" passHref><a className={styles.footerparas}>CRM Development</a></Link>
                        <Link href="/healthcare-medical-app-development" passHref><a className={styles.footerparas}>Healthcare and Medical</a></Link>
                        <Link href="/transport-logistics-apps" passHref><a className={styles.footerparas}>Logistics</a></Link>
                        <Link href="/financial-app-development" passHref><a className={styles.footerparas}>Financial</a></Link>
                        <Link href="/ecommerce-app-development" passHref><a className={styles.footerparas}>Retail</a></Link>
                        <Link href="/travel-app-development" passHref><a className={styles.footerparas}>Travel</a></Link>
                        <Link href="/education-app-development" passHref><a className={styles.footerparas}>Education</a></Link>
                    </Col>

                    <Col className={styles.footerblog}>
                        <h3 className={styles.footertitles}>Blog</h3>
                        <Link href="/blog/app-development-cost" passHref><a className={styles.footerparas}>App Development Cost</a></Link>
                        <Link href="/blog/how-to-increase-app-engagement" passHref><a className={styles.footerparas}>How to increase app engagement</a></Link>
                        <Link href="/blog/how-to-hire-mobile-app-developer" passHref><a className={styles.footerparas}>How to hire app developers</a></Link>
                        <Link href="/blog/minimum-viable-product" passHref><a className={styles.footerparas}>What is MVP</a></Link>
                        <Link href="/blog/how-do-apps-make-money" passHref><a className={styles.footerparas}>How do apps make money</a></Link>
                        <Link href="/blog/cost-to-build-react-native-app" passHref><a className={styles.footerparas}>React native app development cost</a></Link>
                    </Col>

                    <Col className={styles.footerblog}>
                        <div className='d-flex flex-column'>
                            <h3 className={styles.footertitles}>Contact</h3>
                            <a href='mailto:info@mindasoft.com' className={styles.footerparas}>info@mindasoft.com</a>
                            <a href="tel:+90 554 800 33 04" className={styles.footerparas}>+90 554 800 33 04</a>
                        </div>

                        <div className='d-flex flex-column mt-4'>
                            <h3 className={styles.footertitles}></h3>
                            <p className={styles.footeradress}><br /></p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className='d-flex mt-5'>
                <Row>
                    {/* <Col className='d-flex flex-column mt-4'>
                        <Link href="https://www.facebook.com/mindasoft" passHref><a className={styles.footersocialfirst}><FaFacebook size={30} color="cccccc" style={{ marginTop: "-3px" }} /></a></Link>
                    </Col> */}
                    <Col className='d-flex flex-column mt-4'>
                        <Link href="https://www.instagram.com/mindasoftco" passHref><a className={styles.footersocialmargins}><FaInstagram size={30} color="cccccc" style={{ marginTop: "-3px" }} /></a></Link>
                    </Col>
                    <Col className='d-flex flex-column mt-4'>
                        <Link href="https://www.twitter.com/mindasoftco" passHref><a className={styles.footersocialmargins}><FaTwitter size={30} color="cccccc" style={{ marginTop: "-3px" }} /></a></Link>
                    </Col>
                    <Col className='d-flex flex-column mt-4'>
                        <Link href="https://www.dribbble.com/mindasoft" passHref><a className={styles.footersocialmargins}><FaDribbble size={30} color="cccccc" style={{ marginTop: "-3px" }} /></a></Link>
                    </Col>
                    <Col className='d-flex flex-column mt-4'>
                        <Link href="https://www.behance.net/mindasoft" passHref><a className={styles.footersocialmargins}><FaBehance size={30} color="cccccc" style={{ marginTop: "-3px" }} /></a></Link>
                    </Col>
                    <Col className='d-flex flex-column mt-4'>
                        <Link href="https://www.linkedin.com/company/mindasoft" passHref><a className={styles.footersocialmargins}><FaLinkedin size={30} color="cccccc" style={{ marginTop: "-3px" }} /></a></Link>
                    </Col>
                </Row>

            </Container>

        </Container>
    )
}

export default Footer