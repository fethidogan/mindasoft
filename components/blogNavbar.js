import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../styles/Blog.module.css"
import { Button, Col, Container, Row } from 'react-bootstrap'

const BlogNavbar = () => {
    const router = useRouter()
    return (
        <>
            <Container style={{ marginTop: "30px" }}>
                <Row >
                    <Col className={styles.blogmainleftcold} xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Link href="/blog" passHref><Button style={{ borderRadius: "20px", marginRight: "20px", paddingLeft:"15px", paddingRight:"15px" }} size='md' variant={`${router.pathname === "/blog" ? "primary" : "outline-primary"}`} ><span style={{ fontSize: "17px" }}>Latest</span></Button></Link>
                        <Link href="/category/technology" passHref><Button style={{ borderRadius: "20px", marginRight: "20px", paddingLeft:"15px", paddingRight:"15px" }} size='md' variant={`${router.pathname === "/category/technology" ? "primary" : "outline-primary"}`}><span style={{ fontSize: "17px" }}>Technology</span></Button></Link>
                        <Link href="/category/mobile" passHref><Button style={{ borderRadius: "20px", marginRight: "20px", paddingLeft:"15px", paddingRight:"15px" }} size='md' variant={`${router.pathname === "/category/mobile" ? "primary" : "outline-primary"}`}><span style={{ fontSize: "17px" }}>Mobile</span></Button></Link>
                    </Col>
                    <Col className={styles.blogmainrightcold} xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Link href="/category/web" passHref><Button style={{ borderRadius: "20px", marginRight: "20px", paddingLeft:"15px", paddingRight:"15px" }} size='md' variant={`${router.pathname === "/category/web" ? "primary" : "outline-primary"}`}><span style={{ fontSize: "17px" }}>Web</span></Button></Link>
                        <Link href="/category/startup" passHref><Button style={{ borderRadius: "20px", marginRight: "20px", paddingLeft:"15px", paddingRight:"15px" }} size='md' variant={`${router.pathname === "/category/startup" ? "primary" : "outline-primary"}`}><span style={{ fontSize: "17px" }}>Startup</span></Button></Link>
                        <Link href="/category/development" passHref><Button style={{ borderRadius: "20px", marginRight: "20px", paddingLeft:"15px", paddingRight:"15px" }} size='md' variant={`${router.pathname === "/category/development" ? "primary" : "outline-primary"}`}><span style={{ fontSize: "17px" }}>Development</span></Button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BlogNavbar